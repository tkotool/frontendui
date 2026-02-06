import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, ref, hasInjectionContext, inject, defineAsyncComponent, computed, unref, shallowReactive, Suspense, Fragment, useSSRContext, createApp, withCtx, createVNode, toRef, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, nextTick, mergeProps, getCurrentScope } from 'vue';
import { k as hasProtocol, m as isScriptProtocol, l as joinURL, w as withQuery, n as sanitizeStatusCode, o as getContext, $ as $fetch, p as createHooks, q as executeAsync, h as createError$1, v as toRouteMatcher, x as createRouter$1, y as defu, d as destr, z as klona, A as parse, B as getRequestHeader, C as isEqual, D as setCookie, E as getCookie, F as deleteCookie } from '../_/nitro.mjs';
import { u as useHead$1, h as headSymbol, b as baseURL } from '../routes/renderer.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'pinia';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { deepPickUnsafe, deepOmitUnsafe } from 'deep-pick-omit';
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    versions: {
      get nuxt() {
        return "4.1.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta = null;
const component_45stubrdZbwUjm1ZCoVHuGW0v5Ko4G9_86qz71beTwBqhuUDE = {};
const _routes = [
  {
    name: "apps-chat",
    path: "/apps/chat",
    component: () => import('./index-DZFRLwPA.mjs')
  },
  {
    name: "user-grid",
    path: "/user/grid",
    component: () => import('./index-Dq6O-soa.mjs')
  },
  {
    name: "user-list",
    path: "/user/list",
    component: () => import('./index-D5on_Uk7.mjs')
  },
  {
    name: "apps-email",
    path: "/apps/email",
    component: () => import('./index-C43wQweQ.mjs')
  },
  {
    name: "apps-notes",
    path: "/apps/notes",
    component: () => import('./index-B4ELjHIj.mjs')
  },
  {
    name: "invoice-add",
    path: "/invoice/add",
    component: () => import('./index-eVQhpw1h.mjs')
  },
  {
    name: "faqs",
    path: "/faqs",
    component: () => import('./index-l-8HnNra.mjs')
  },
  {
    name: "dashboard-hr",
    path: "/dashboard/hr",
    component: () => import('./index-B4JaazjL.mjs')
  },
  {
    name: "invoice-list",
    path: "/invoice/list",
    component: () => import('./index-DfiF9eZq.mjs')
  },
  {
    name: "error",
    path: "/error",
    component: () => import('./index-CanoGULj.mjs')
  },
  {
    name: "apps-calendar",
    path: "/apps/calendar",
    component: () => import('./index-CoJCYddM.mjs')
  },
  {
    name: "ecommerce-cart",
    path: "/ecommerce/cart",
    component: () => import('./index-BF5YkXEy.mjs')
  },
  {
    name: "offline",
    path: "/offline",
    component: () => import('./index-D4V9-hN2.mjs')
  },
  {
    name: "pricing",
    path: "/pricing",
    component: () => import('./index-DCtoP_c1.mjs')
  },
  {
    name: "starter",
    path: "/starter",
    component: () => import('./index-BArbDkvH.mjs')
  },
  {
    name: "dashboard-email",
    path: "/dashboard/email",
    component: () => import('./index-Cr3U4i0P.mjs')
  },
  {
    name: "ecommerce-order",
    path: "/ecommerce/order",
    component: () => import('./index-BxNl9cYd.mjs')
  },
  {
    name: "landing-product",
    path: "/landing/product",
    component: () => import('./index-C8EPMBtM.mjs')
  },
  {
    name: "layout-rtl-mode",
    path: "/layout/rtl-mode",
    component: () => import('./index-DuGeGqWW.mjs')
  },
  {
    name: "timeline",
    path: "/timeline",
    component: () => import('./index-viKKnmLQ.mjs')
  },
  {
    name: "invoice-overview",
    path: "/invoice/overview",
    component: () => import('./index-B0-r0Ret.mjs')
  },
  {
    name: "landing-one-page",
    path: "/landing/one-page",
    component: () => import('./index-BYZ79PCX.mjs')
  },
  {
    name: "layout-dark-mode",
    path: "/layout/dark-mode",
    component: () => import('./index-DBuzfD3e.mjs')
  },
  {
    name: "ecommerce-product",
    path: "/ecommerce/product",
    component: () => import('./index-BDOiSptx.mjs')
  },
  {
    name: "ecommerce-sellers",
    path: "/ecommerce/sellers",
    component: () => import('./index-C73LRxJy.mjs')
  },
  {
    name: "ecommerce-checkout",
    path: "/ecommerce/checkout",
    component: () => import('./index-DfJ0ydy4.mjs')
  },
  {
    name: "coming-soon",
    path: "/coming-soon",
    component: () => import('./index-2RFqmPSJ.mjs')
  },
  {
    name: "maintenance",
    path: "/maintenance",
    component: () => import('./index-Di0OE5D3.mjs')
  },
  {
    name: "apps-email-components-data",
    path: "/apps/email/components/data",
    component: () => import('./data-CV52AJk1.mjs')
  },
  {
    name: "dashboard-analytics",
    path: "/dashboard/analytics",
    component: () => import('./index-CFRBiRUO.mjs')
  },
  {
    name: "dashboard-ecommerce",
    path: "/dashboard/ecommerce",
    component: () => import('./index-Bzi-VrnI.mjs')
  },
  {
    name: "layout-dark-sidebar",
    path: "/layout/dark-sidebar",
    component: () => import('./index-CqMKkwi2.mjs')
  },
  {
    name: "layout-hover-sidebar",
    path: "/layout/hover-sidebar",
    component: () => import('./index-BXjYIcJI.mjs')
  },
  {
    name: "layout-small-sidebar",
    path: "/layout/small-sidebar",
    component: () => import('./index-D-Sg0map.mjs')
  },
  {
    name: "faqs-components-Faq",
    path: "/faqs/components/Faq",
    component: () => import('./Faq-z1GUgCxK.mjs')
  },
  {
    name: "apps-notes-components-Notes",
    path: "/apps/notes/components/Notes",
    component: () => import('./Notes-C3rQkkED.mjs')
  },
  {
    name: "dashboard-hr-components-data",
    path: "/dashboard/hr/components/data",
    component: () => import('./data-DSw_rQcB.mjs')
  },
  {
    name: "ecommerce-product-add",
    path: "/ecommerce/product-add",
    component: () => import('./index-CFIPp3zu.mjs')
  },
  {
    name: "layout-hidden-sidebar",
    path: "/layout/hidden-sidebar",
    component: () => import('./index-D-tsah5N.mjs')
  },
  {
    name: "faqs-components-Hero",
    path: "/faqs/components/Hero",
    component: () => import('./Hero-CcRCzdMC.mjs')
  },
  {
    name: "apps-chat-components-Contact",
    path: "/apps/chat/components/Contact",
    component: () => import('./Contact-kjOTdM-b.mjs')
  },
  {
    name: "apps-chat-components-SideBar",
    path: "/apps/chat/components/SideBar",
    component: () => import('./SideBar-BcFpYquS.mjs')
  },
  {
    name: "ecommerce-order-detail",
    path: "/ecommerce/order-detail",
    component: () => import('./index-hl-ev2Nu.mjs')
  },
  {
    name: "ecommerce-product-grid",
    path: "/ecommerce/product-grid",
    component: () => import('./index-9vK044lQ.mjs')
  },
  {
    name: "hr-management-employee",
    path: "/hr-management/employee",
    component: () => import('./index-BQb4ZqMA.mjs')
  },
  {
    name: "hr-management-holidays",
    path: "/hr-management/holidays",
    component: () => import('./index-DkFsoSiV.mjs')
  },
  {
    name: "layout-compact-sidebar",
    path: "/layout/compact-sidebar",
    component: () => import('./index-C4mftGf4.mjs')
  },
  {
    name: "basic-auth-login",
    path: "/basic-auth/login",
    component: () => import('./index-Cc1seuJX.mjs')
  },
  {
    name: "boxed-auth-login",
    path: "/boxed-auth/login",
    component: () => import('./index-DmItq-1O.mjs')
  },
  {
    name: "cover-auth-login",
    path: "/cover-auth/login",
    component: () => import('./index-DPzzHaO8.mjs')
  },
  {
    name: "faqs-components-Video",
    path: "/faqs/components/Video",
    component: () => import('./Video-4dTzICdS.mjs')
  },
  {
    name: "apps-email-components-MailBox",
    path: "/apps/email/components/MailBox",
    component: () => import('./MailBox-C-ZssqVg.mjs')
  },
  {
    name: "apps-email-components-SideBar",
    path: "/apps/email/components/SideBar",
    component: () => import('./SideBar-CEydprmX.mjs')
  },
  {
    name: "layout-offcavas-sidebar",
    path: "/layout/offcavas-sidebar",
    component: () => import('./index-D-XPvTXJ.mjs')
  },
  {
    name: "user-grid-components-UserData",
    path: "/user/grid/components/UserData",
    component: () => import('./UserData-C_6p_XVk.mjs')
  },
  {
    name: "basic-auth-logout",
    path: "/basic-auth/logout",
    component: () => import('./index-BYqYuh-f.mjs')
  },
  {
    name: "boxed-auth-logout",
    path: "/boxed-auth/logout",
    component: () => import('./index-Drz3hG-h.mjs')
  },
  {
    name: "cover-auth-logout",
    path: "/cover-auth/logout",
    component: () => import('./index-AwqpO4Qg.mjs')
  },
  {
    name: "apps-calendar-components-Event",
    path: "/apps/calendar/components/Event",
    component: () => import('./Event-InhBoC-7.mjs')
  },
  {
    name: "dashboard-email-components-data",
    path: "/dashboard/email/components/data",
    component: () => import('./data-CrsmG9js.mjs')
  },
  {
    name: "ecommerce-order-components-data",
    path: "/ecommerce/order/components/data",
    component: () => import('./data-nxfC5Gfz.mjs')
  },
  {
    name: "ecommerce-product-detail",
    path: "/ecommerce/product-detail",
    component: () => import('./index-OEVjjXua.mjs')
  },
  {
    name: "hr-management-department",
    path: "/hr-management/department",
    component: () => import('./index-2mrD2Gmp.mjs')
  },
  {
    name: "landing-one-page-components-aa",
    path: "/landing/one-page/components/aa",
    component: () => import('./aa-BoYEZEqY.mjs')
  },
  {
    name: "landing-product-components-CTA",
    path: "/landing/product/components/CTA",
    component: () => import('./CTA-CU1krZhQ.mjs')
  },
  {
    name: "user-list-components-UserTable",
    path: "/user/list/components/UserTable",
    component: () => import('./UserTable-Bv7-CVFC.mjs')
  },
  {
    name: "mordern-auth-login",
    path: "/mordern-auth/login",
    component: () => import('./index-fv-GzFOb.mjs')
  },
  {
    name: "ecommerce-order-components-Stat",
    path: "/ecommerce/order/components/Stat",
    component: () => import('./Stat-B1iAj2NY.mjs')
  },
  {
    name: "landing-product-components-Hero",
    path: "/landing/product/components/Hero",
    component: () => import('./Hero-DFobginV.mjs')
  },
  {
    name: "user-grid-components-Pagination",
    path: "/user/grid/components/Pagination",
    component: () => import('./Pagination-D612E_ig.mjs')
  },
  {
    name: "basic-auth-register",
    path: "/basic-auth/register",
    component: () => import('./index-8oVKLOGY.mjs')
  },
  {
    name: "boxed-auth-register",
    path: "/boxed-auth/register",
    component: () => import('./index-_oXfXdiO.mjs')
  },
  {
    name: "cover-auth-register",
    path: "/cover-auth/register",
    component: () => import('./index-qHFZmBLD.mjs')
  },
  {
    name: "mordern-auth-logout",
    path: "/mordern-auth/logout",
    component: () => import('./index-hdQ1uR3d.mjs')
  },
  {
    name: "ecommerce-product-components-data",
    path: "/ecommerce/product/components/data",
    component: () => import('./data-BdXrrJH4.mjs')
  },
  {
    name: "landing-one-page-components-Hero",
    path: "/landing/one-page/components/Hero",
    component: () => import('./Hero-BI25pBRh.mjs')
  },
  {
    name: "landing-product-components-About",
    path: "/landing/product/components/About",
    component: () => import('./About-BlBlhsOt.mjs')
  },
  {
    name: "basic-auth-two-steps",
    path: "/basic-auth/two-steps",
    component: () => import('./index-CbaZBN6v.mjs')
  },
  {
    name: "boxed-auth-two-steps",
    path: "/boxed-auth/two-steps",
    component: () => import('./index-Bvy-wBzL.mjs')
  },
  {
    name: "cover-auth-two-steps",
    path: "/cover-auth/two-steps",
    component: () => import('./index-ChQ2s-fR.mjs')
  },
  {
    name: "apps-calendar-components-Calendar",
    path: "/apps/calendar/components/Calendar",
    component: () => import('./Calendar-0K6zshC7.mjs')
  },
  {
    name: "dashboard-hr-components-HRWelcome",
    path: "/dashboard/hr/components/HRWelcome",
    component: () => import('./HRWelcome-Dkob6Ndw.mjs')
  },
  {
    name: "invoice-add-components-CreateForm",
    path: "/invoice/add/components/CreateForm",
    component: () => import('./CreateForm-Cj_By_6u.mjs')
  },
  {
    name: "landing-one-page-components-About",
    path: "/landing/one-page/components/About",
    component: () => import('./About-BBAiVBTU.mjs')
  },
  {
    name: "landing-product-components-Footer",
    path: "/landing/product/components/Footer",
    component: () => import('./Footer-CUu1j6kb.mjs')
  },
  {
    name: "landing-product-components-Header",
    path: "/landing/product/components/Header",
    component: () => import('./Header-B2FtrREm.mjs')
  },
  {
    name: "layout-hover-active-sidebar",
    path: "/layout/hover-active-sidebar",
    component: () => import('./index-DgOWSHch.mjs')
  },
  {
    name: "basic-auth-reset-pass",
    path: "/basic-auth/reset-pass",
    component: () => import('./index-D1bneyJs.mjs')
  },
  {
    name: "boxed-auth-reset-pass",
    path: "/boxed-auth/reset-pass",
    component: () => import('./index-CNJMedMn.mjs')
  },
  {
    name: "cover-auth-reset-pass",
    path: "/cover-auth/reset-pass",
    component: () => import('./index-BWmfpc7E.mjs')
  },
  {
    name: "mordern-auth-register",
    path: "/mordern-auth/register",
    component: () => import('./index-kemEZdCj.mjs')
  },
  {
    name: "pricing-components-Pricing",
    path: "/pricing/components/Pricing",
    component: () => import('./Pricing-BO1zxclD.mjs')
  },
  {
    name: "dashboard-analytics-components-data",
    path: "/dashboard/analytics/components/data",
    component: () => import('./data-ClYJCV8_.mjs')
  },
  {
    name: "dashboard-ecommerce-components-data",
    path: "/dashboard/ecommerce/components/data",
    component: () => import('./data-IcsAWRil.mjs')
  },
  {
    name: "ecommerce-product-components-Table",
    path: "/ecommerce/product/components/Table",
    component: () => import('./Table-B32RqVUI.mjs')
  },
  {
    name: "landing-one-page-components-Footer",
    path: "/landing/one-page/components/Footer",
    component: () => import('./Footer-f2JGxKox.mjs')
  },
  {
    name: "landing-one-page-components-Header",
    path: "/landing/one-page/components/Header",
    component: () => import('./Header-B9HGbNzW.mjs')
  },
  {
    name: "landing-product-components-Feature",
    path: "/landing/product/components/Feature",
    component: () => import('./Feature-a1UsphVG.mjs')
  },
  {
    name: "landing-product-components-Product",
    path: "/landing/product/components/Product",
    component: () => import('./Product-B8zCR5wc.mjs')
  },
  {
    name: "basic-auth-create-pass",
    path: "/basic-auth/create-pass",
    component: () => import('./index-BKOoOYt1.mjs')
  },
  {
    name: "boxed-auth-create-pass",
    path: "/boxed-auth/create-pass",
    component: () => import('./index-D2US25p8.mjs')
  },
  {
    name: "cover-auth-create-pass",
    path: "/cover-auth/create-pass",
    component: () => import('./index-yITiPAcB.mjs')
  },
  {
    name: "mordern-auth-two-steps",
    path: "/mordern-auth/two-steps",
    component: () => import('./index-C2d2WMJc.mjs')
  },
  {
    name: "dashboard-analytics-components-Stat",
    path: "/dashboard/analytics/components/Stat",
    component: () => import('./Stat-CNC9MTnZ.mjs')
  },
  {
    name: "invoice-list-components-InvoiceForm",
    path: "/invoice/list/components/InvoiceForm",
    component: () => import('./InvoiceForm-C6BZFHoB.mjs')
  },
  {
    name: "invoice-list-components-InvoiceList",
    path: "/invoice/list/components/InvoiceList",
    component: () => import('./InvoiceList-CML76j2-.mjs')
  },
  {
    name: "landing-one-page-components-Contact",
    path: "/landing/one-page/components/Contact",
    component: () => import('./Contact-CHUVSpd-.mjs')
  },
  {
    name: "landing-one-page-components-Feature",
    path: "/landing/one-page/components/Feature",
    component: () => import('./Feature-lFxUsUSF.mjs')
  },
  {
    name: "landing-one-page-components-Pricing",
    path: "/landing/one-page/components/Pricing",
    component: () => import('./Pricing-6ri_xYfs.mjs')
  },
  {
    name: "landing-product-components-Feedback",
    path: "/landing/product/components/Feedback",
    component: () => import('./Feedback-DrmRlAbx.mjs')
  },
  {
    name: "basic-auth-verify-email",
    path: "/basic-auth/verify-email",
    component: () => import('./index-DXADcB5C.mjs')
  },
  {
    name: "boxed-auth-verify-email",
    path: "/boxed-auth/verify-email",
    component: () => import('./index-k1oFLTSO.mjs')
  },
  {
    name: "cover-auth-verify-email",
    path: "/cover-auth/verify-email",
    component: () => import('./index-BSAAniCz.mjs')
  },
  {
    name: "mordern-auth-reset-pass",
    path: "/mordern-auth/reset-pass",
    component: () => import('./index-CYGm_pTN.mjs')
  },
  {
    name: "timeline-components-TimeLine",
    path: "/timeline/components/TimeLine",
    component: () => import('./TimeLine-lWgCSpCa.mjs')
  },
  {
    name: "dashboard-ecommerce-components-Stats",
    path: "/dashboard/ecommerce/components/Stats",
    component: () => import('./Stats-CdpFaiFT.mjs')
  },
  {
    name: "dashboard-email-components-EmailData",
    path: "/dashboard/email/components/EmailData",
    component: () => import('./EmailData-BntB_EFw.mjs')
  },
  {
    name: "dashboard-hr-components-SummaryCards",
    path: "/dashboard/hr/components/SummaryCards",
    component: () => import('./SummaryCards-BqN8ggtq.mjs')
  },
  {
    name: "ecommerce-sellers-components-Sellers",
    path: "/ecommerce/sellers/components/Sellers",
    component: () => import('./Sellers-hWj3QJlO.mjs')
  },
  {
    name: "hr-management-expenses",
    path: "/hr-management/expenses",
    component: () => import('./index-_FlYtxr8.mjs')
  },
  {
    name: "hr-management-payments",
    path: "/hr-management/payments",
    component: () => import('./index-ChSatLno.mjs')
  },
  {
    name: "user-grid-components-UserTableHeader",
    path: "/user/grid/components/UserTableHeader",
    component: () => import('./UserTableHeader-Bp3V98FL.mjs')
  },
  {
    name: "mordern-auth-create-pass",
    path: "/mordern-auth/create-pass",
    component: () => import('./index-Bv8skBm7.mjs')
  },
  {
    name: "dashboard-email-components-Experience",
    path: "/dashboard/email/components/Experience",
    component: () => import('./Experience-64VtcNrX.mjs')
  },
  {
    name: "dashboard-hr-components-RecentPayroll",
    path: "/dashboard/hr/components/RecentPayroll",
    component: () => import('./RecentPayroll-DXkz792z.mjs')
  },
  {
    name: "dashboard-hr-components-TotalProjects",
    path: "/dashboard/hr/components/TotalProjects",
    component: () => import('./TotalProjects-OyjjOtfE.mjs')
  },
  {
    name: "ecommerce-cart-components-ShopingCart",
    path: "/ecommerce/cart/components/ShopingCart",
    component: () => import('./ShopingCart-CXlp7bqk.mjs')
  },
  {
    name: "ecommerce-order-components-OrderTable",
    path: "/ecommerce/order/components/OrderTable",
    component: () => import('./OrderTable-DQZBGulH.mjs')
  },
  {
    name: "ecommerce-product-grid-components-data",
    path: "/ecommerce/product-grid/components/data",
    component: () => import('./data-iHZOwHrl.mjs')
  },
  {
    name: "hr-management-payslip",
    path: "/hr-management/payslip",
    component: () => import('./index-BGhstyM6.mjs')
  },
  {
    name: "hr-management-estimates",
    path: "/hr-management/estimates",
    component: () => import('./index-DEJQL2wR.mjs')
  },
  {
    name: "landing-product-components-MobileMenu",
    path: "/landing/product/components/MobileMenu",
    component: () => import('./MobileMenu-BPMUeWRY.mjs')
  },
  {
    name: "mordern-auth-verify-email",
    path: "/mordern-auth/verify-email",
    component: () => import('./index-CnEKmYBE.mjs')
  },
  {
    name: "dashboard-analytics-components-Traffic",
    path: "/dashboard/analytics/components/Traffic",
    component: () => import('./Traffic-CHfLE56h.mjs')
  },
  {
    name: "ecommerce-cart-components-OrderSummary",
    path: "/ecommerce/cart/components/OrderSummary",
    component: () => import('./OrderSummary-bpoHZNuu.mjs')
  },
  {
    name: "ecommerce-checkout-components-Delivery",
    path: "/ecommerce/checkout/components/Delivery",
    component: () => import('./Delivery-BNVfixzQ.mjs')
  },
  {
    name: "ecommerce-order-detail-components-Stat",
    path: "/ecommerce/order-detail/components/Stat",
    component: () => import('./Stat-CnOgCIAH.mjs')
  },
  {
    name: "landing-one-page-components-MobileMenu",
    path: "/landing/one-page/components/MobileMenu",
    component: () => import('./MobileMenu-CBIgejJO.mjs')
  },
  {
    name: "dashboard-analytics-components-Location",
    path: "/dashboard/analytics/components/Location",
    component: () => import('./Location-Cs3ULkaV.mjs')
  },
  {
    name: "dashboard-ecommerce-components-Audience",
    path: "/dashboard/ecommerce/components/Audience",
    component: () => import('./Audience-KXxCGR-7.mjs')
  },
  {
    name: "ecommerce-sellers-components-Pagination",
    path: "/ecommerce/sellers/components/Pagination",
    component: () => import('./Pagination-E3DhALrY.mjs')
  },
  {
    name: "hr-management-holidays-components-Table",
    path: "/hr-management/holidays/components/Table",
    component: () => import('./Table-C07aVaiw.mjs')
  },
  {
    name: "user-list-components-StatusFilterHeader",
    path: "/user/list/components/StatusFilterHeader",
    component: () => import('./StatusFilterHeader-BYmNo7ee.mjs')
  },
  {
    name: "dashboard-ecommerce-components-OrderStat",
    path: "/dashboard/ecommerce/components/OrderStat",
    component: () => import('./OrderStat-DQ_ggRqa.mjs')
  },
  {
    name: "ecommerce-product-grid-components-Filter",
    path: "/ecommerce/product-grid/components/Filter",
    component: () => import('./Filter-C8hjGJQa.mjs')
  },
  {
    name: "dashboard-analytics-components-DailyVisit",
    path: "/dashboard/analytics/components/DailyVisit",
    component: () => import('./DailyVisit-DJgfuVBu.mjs')
  },
  {
    name: "dashboard-analytics-components-UserDevice",
    path: "/dashboard/analytics/components/UserDevice",
    component: () => import('./UserDevice-DU0WpO4-.mjs')
  },
  {
    name: "dashboard-ecommerce-components-SalesMonth",
    path: "/dashboard/ecommerce/components/SalesMonth",
    component: () => import('./SalesMonth-BimXaxuV.mjs')
  },
  {
    name: "dashboard-email-components-EmailMarketing",
    path: "/dashboard/email/components/EmailMarketing",
    component: () => import('./EmailMarketing-bxv-e2Sz.mjs')
  },
  {
    name: "dashboard-hr-components-UpcomingInterview",
    path: "/dashboard/hr/components/UpcomingInterview",
    component: () => import('./UpcomingInterview-CB0SZOhq.mjs')
  },
  {
    name: "dashboard-hr-components-UpcomingScheduled",
    path: "/dashboard/hr/components/UpcomingScheduled",
    component: () => import('./UpcomingScheduled-CT53x4Vd.mjs')
  },
  {
    name: "ecommerce-product-grid-components-Product",
    path: "/ecommerce/product-grid/components/Product",
    component: () => import('./Product-BiMz2a31.mjs')
  },
  {
    name: "hr-management-add-hr",
    path: "/hr-management/add-hr",
    component: () => import('./index-DjUqGNpU.mjs')
  },
  {
    name: "dashboard-analytics-components-Interaction",
    path: "/dashboard/analytics/components/Interaction",
    component: () => import('./Interaction-CGF6qikF.mjs')
  },
  {
    name: "dashboard-ecommerce-components-WelcomeCard",
    path: "/dashboard/ecommerce/components/WelcomeCard",
    component: () => import('./WelcomeCard-BwJBtvLI.mjs')
  },
  {
    name: "dashboard-analytics-components-Subscription",
    path: "/dashboard/analytics/components/Subscription",
    component: () => import('./Subscription-DYgdNqHC.mjs')
  },
  {
    name: "dashboard-ecommerce-components-ProductOrder",
    path: "/dashboard/ecommerce/components/ProductOrder",
    component: () => import('./ProductOrder-DXxPjLmH.mjs')
  },
  {
    name: "dashboard-email-components-EmailHealthStats",
    path: "/dashboard/email/components/EmailHealthStats",
    component: () => import('./EmailHealthStats-MjDni1V9.mjs')
  },
  {
    name: "dashboard-email-components-EmailPerformance",
    path: "/dashboard/email/components/EmailPerformance",
    component: () => import('./EmailPerformance-CbsBYJgA.mjs')
  },
  {
    name: "dashboard-hr-components-ApplicationReceived",
    path: "/dashboard/hr/components/ApplicationReceived",
    component: () => import('./ApplicationReceived-DVZOTYIS.mjs')
  },
  {
    name: "dashboard-hr-components-EmployeePerformance",
    path: "/dashboard/hr/components/EmployeePerformance",
    component: () => import('./EmployeePerformance-CflBm-Cc.mjs')
  },
  {
    name: "ecommerce-checkout-components-OrdersSummary",
    path: "/ecommerce/checkout/components/OrdersSummary",
    component: () => import('./OrdersSummary-0q4dFgyx.mjs')
  },
  {
    name: "ecommerce-order-detail-components-Documents",
    path: "/ecommerce/order-detail/components/Documents",
    component: () => import('./Documents-DItJ60N2.mjs')
  },
  {
    name: "ecommerce-order-detail-components-OrderInfo",
    path: "/ecommerce/order-detail/components/OrderInfo",
    component: () => import('./OrderInfo-B3SinEST.mjs')
  },
  {
    name: "hr-management-attendance",
    path: "/hr-management/attendance",
    component: () => import('./index-D0A2CNNr.mjs')
  },
  {
    name: "hr-management-leave-hr",
    path: "/hr-management/leave-hr",
    component: () => import('./index-C9h2AXKs.mjs')
  },
  {
    name: "pricing-components-HorizontalPricing",
    path: "/pricing/components/HorizontalPricing",
    component: () => import('./HorizontalPricing-Dpopj-f2.mjs')
  },
  {
    name: "dashboard-analytics-components-StatusofMonth",
    path: "/dashboard/analytics/components/StatusofMonth",
    component: () => import('./StatusofMonth-D-hRMGfl.mjs')
  },
  {
    name: "dashboard-ecommerce-components-SalesRevenue ",
    path: "/dashboard/ecommerce/components/SalesRevenue%20",
    component: () => import('./SalesRevenue -y3r8YoZG.mjs')
  },
  {
    name: "ecommerce-product-add-components-ProductCard",
    path: "/ecommerce/product-add/components/ProductCard",
    component: () => import('./ProductCard-DUt1pi4b.mjs')
  },
  {
    name: "hr-management-create-payslip",
    path: "/hr-management/create-payslip",
    component: () => import('./index-DS2QLyKb.mjs')
  },
  {
    name: "dashboard-ecommerce-components-SellingProduct",
    path: "/dashboard/ecommerce/components/SellingProduct",
    component: () => import('./SellingProduct-Bt_BqD42.mjs')
  },
  {
    name: "ecommerce-order-detail-components-OrderStatus",
    path: "/ecommerce/order-detail/components/OrderStatus",
    component: () => import('./OrderStatus-BbBAzrHz.mjs')
  },
  {
    name: "hr-management-employee-salary",
    path: "/hr-management/employee-salary",
    component: () => import('./index-BxHqlj1x.mjs')
  },
  {
    name: "timeline-components-TimelinewithAvatar",
    path: "/timeline/components/TimelinewithAvatar",
    component: () => import('./TimelinewithAvatar-CfRU4TCE.mjs')
  },
  {
    name: "dashboard-ecommerce-components-CustomerService",
    path: "/dashboard/ecommerce/components/CustomerService",
    component: () => import('./CustomerService-CLdXJIeG.mjs')
  },
  {
    name: "dashboard-email-components-EmailAnalyticsStats",
    path: "/dashboard/email/components/EmailAnalyticsStats",
    component: () => import('./EmailAnalyticsStats-BNgXZeXl.mjs')
  },
  {
    name: "ecommerce-order-detail-components-OrderSummary",
    path: "/ecommerce/order-detail/components/OrderSummary",
    component: () => import('./OrderSummary-DtkOW125.mjs')
  },
  {
    name: "ecommerce-product-add-components-CreateProduct",
    path: "/ecommerce/product-add/components/CreateProduct",
    component: () => import('./CreateProduct-Bo91boMn.mjs')
  },
  {
    name: "hr-management-employee-components-EmployeeList",
    path: "/hr-management/employee/components/EmployeeList",
    component: () => import('./EmployeeList-BktCez8W.mjs')
  },
  {
    name: "dashboard-analytics-components-AnalyticsReports",
    path: "/dashboard/analytics/components/AnalyticsReports",
    component: () => import('./AnalyticsReports-DdmRM9KX.mjs')
  },
  {
    name: "dashboard-ecommerce-components-TrafficResources",
    path: "/dashboard/ecommerce/components/TrafficResources",
    component: () => import('./TrafficResources-DkCc2bHc.mjs')
  },
  {
    name: "hr-management-add-employee",
    path: "/hr-management/add-employee",
    component: () => import('./index-DFRmbtVk.mjs')
  },
  {
    name: "dashboard-analytics-components-SatisfactionLevel",
    path: "/dashboard/analytics/components/SatisfactionLevel",
    component: () => import('./SatisfactionLevel-CiztMF8E.mjs')
  },
  {
    name: "ecommerce-checkout-components-PaymentInformation",
    path: "/ecommerce/checkout/components/PaymentInformation",
    component: () => import('./PaymentInformation-CC_Mvo_Q.mjs')
  },
  {
    name: "hr-management-attendance-main",
    path: "/hr-management/attendance-main",
    component: () => import('./index-a4fUkzqX.mjs')
  },
  {
    name: "dashboard-analytics-components-ProductsStatistics",
    path: "/dashboard/analytics/components/ProductsStatistics",
    component: () => import('./ProductsStatistics-D-HsqX1V.mjs')
  },
  {
    name: "ecommerce-checkout-components-ShoppingInformation",
    path: "/ecommerce/checkout/components/ShoppingInformation",
    component: () => import('./ShoppingInformation-fFyDHfMm.mjs')
  },
  {
    name: "hr-management-leave-employee",
    path: "/hr-management/leave-employee",
    component: () => import('./index-z94RRxhg.mjs')
  },
  {
    name: "dashboard-analytics-components-PlatformPerspective",
    path: "/dashboard/analytics/components/PlatformPerspective",
    component: () => import('./PlatformPerspective-DMh-MmzO.mjs')
  },
  {
    name: "ecommerce-product-detail-components-ProductDetails",
    path: "/ecommerce/product-detail/components/ProductDetails",
    component: () => import('./ProductDetails-oUhJOCTo.mjs')
  },
  {
    name: "ecommerce-product-detail-components-SidebarProduct",
    path: "/ecommerce/product-detail/components/SidebarProduct",
    component: () => import('./SidebarProduct-LVgbL15X.mjs')
  },
  {
    name: "hr-management-leave-hr-components-Stat",
    path: "/hr-management/leave-hr/components/Stat",
    component: () => import('./Stat-CH3shRBt.mjs')
  },
  {
    name: "hr-management-attendance-components-Table",
    path: "/hr-management/attendance/components/Table",
    component: () => import('./Table-0fA2GExy.mjs')
  },
  {
    name: "hr-management-attendance-components-Profile",
    path: "/hr-management/attendance/components/Profile",
    component: () => import('./Profile-4FsJR718.mjs')
  },
  {
    name: "hr-management-add-hr-components-ApplyLeave",
    path: "/hr-management/add-hr/components/ApplyLeave",
    component: () => import('./ApplyLeave-B7hKCgfX.mjs')
  },
  {
    name: "hr-management-attendance-main-components-Stat",
    path: "/hr-management/attendance-main/components/Stat",
    component: () => import('./Stat-zQiI2gNp.mjs')
  },
  {
    name: "hr-management-attendance-main-components-Table",
    path: "/hr-management/attendance-main/components/Table",
    component: () => import('./Table-CS69Eo1v.mjs')
  },
  {
    name: "hr-management-leave-hr-components-LeaveTable",
    path: "/hr-management/leave-hr/components/LeaveTable",
    component: () => import('./LeaveTable-C7PRQ38s.mjs')
  },
  {
    name: "hr-management-leave-employee-components-Table",
    path: "/hr-management/leave-employee/components/Table",
    component: () => import('./Table-DWu4q56b.mjs')
  },
  {
    name: "hr-management-employee-salary-components-SalaryCard",
    path: "/hr-management/employee-salary/components/SalaryCard",
    component: () => import('./SalaryCard-CKN6qEk2.mjs')
  },
  {
    name: "hr-management-employee-salary-components-SalaryTable",
    path: "/hr-management/employee-salary/components/SalaryTable",
    component: () => import('./SalaryTable-DPX0uTdd.mjs')
  },
  {
    name: "hr-management-add-employee-components-ApplyLeave",
    path: "/hr-management/add-employee/components/ApplyLeave",
    component: () => import('./ApplyLeave-DWQ-5W5_.mjs')
  },
  {
    name: "hr-management-add-hr-components-LeaveInformation",
    path: "/hr-management/add-hr/components/LeaveInformation",
    component: () => import('./LeaveInformation-BPCDdqip.mjs')
  },
  {
    name: "hr-management-leave-employee-components-StatCard",
    path: "/hr-management/leave-employee/components/StatCard",
    component: () => import('./StatCard--_lCoLI1.mjs')
  },
  {
    name: "hr-management-add-employee-components-LeaveInformation",
    path: "/hr-management/add-employee/components/LeaveInformation",
    component: () => import('./LeaveInformation-2zr-3Kxw.mjs')
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/",
    component: component_45stubrdZbwUjm1ZCoVHuGW0v5Ko4G9_86qz71beTwBqhuUDE
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[to.matched.length - 1]?.components?.default === from.matched[from.matched.length - 1]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies2 = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies2[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies2[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function hydrateStore(store, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit,
  beforeHydrate,
  afterHydrate
}, context, runHooks = true) {
  try {
    if (runHooks)
      beforeHydrate?.(context);
    const fromStorage = storage.getItem(key);
    if (fromStorage) {
      const deserialized = serializer.deserialize(fromStorage);
      const picked = pick ? deepPickUnsafe(deserialized, pick) : deserialized;
      const omitted = omit ? deepOmitUnsafe(picked, omit) : picked;
      store.$patch(omitted);
    }
    if (runHooks)
      afterHydrate?.(context);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function persistState(state, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit
}) {
  try {
    const picked = pick ? deepPickUnsafe(state, pick) : state;
    const omitted = omit ? deepOmitUnsafe(picked, omit) : picked;
    const toStorage = serializer.serialize(omitted);
    storage.setItem(key, toStorage);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function createPersistence(context, optionsParser, auto) {
  const { pinia, store, options: { persist = auto } } = context;
  if (!persist)
    return;
  if (!(store.$id in pinia.state.value)) {
    const originalStore = pinia._s.get(store.$id.replace("__hot:", ""));
    if (originalStore)
      void Promise.resolve().then(() => originalStore.$persist());
    return;
  }
  const persistenceOptions = Array.isArray(persist) ? persist : persist === true ? [{}] : [persist];
  const persistences = persistenceOptions.map(optionsParser);
  store.$hydrate = ({ runHooks = true } = {}) => {
    persistences.forEach((p) => {
      hydrateStore(store, p, context, runHooks);
    });
  };
  store.$persist = () => {
    persistences.forEach((p) => {
      persistState(store.$state, p);
    });
  };
  persistences.forEach((p) => {
    hydrateStore(store, p, context);
    store.$subscribe(
      (_mutation, state) => persistState(state, p),
      { detached: true }
    );
  });
}
function cookies(options) {
  return {
    getItem: (key) => useCookie(
      key,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        decode: options?.decode ?? decodeURIComponent,
        readonly: true
      }
    ).value,
    setItem: (key, value) => useCookie(
      key,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        encode: options?.encode ?? encodeURIComponent
      }
    ).value = value
  };
}
function localStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
function sessionStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
const storages = {
  cookies,
  localStorage,
  sessionStorage
};
function piniaPlugin(context) {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const options = config.public.piniaPluginPersistedstate;
  createPersistence(
    context,
    (p) => ({
      key: options.key ? options.key.replace(/%id/g, p.key ?? context.store.$id) : p.key ?? context.store.$id,
      debug: p.debug ?? options.debug ?? false,
      serializer: p.serializer ?? {
        serialize: (data) => JSON.stringify(data),
        deserialize: (data) => destr(data)
      },
      storage: p.storage ?? (options.storage ? options.storage === "cookies" ? storages.cookies(options.cookieOptions) : storages[options.storage]() : storages.cookies()),
      beforeHydrate: p.beforeHydrate,
      afterHydrate: p.afterHydrate,
      pick: p.pick,
      omit: p.omit
    }),
    options.auto ?? false
  );
}
const plugin_jjl2DFTrQxMG7TqNyE_rvcIV8r2uFVLO_Sius2B7lXg = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia-plugin-persistedstate",
  setup({ $pinia }) {
    $pinia.use(piniaPlugin);
  }
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8,
  plugin_jjl2DFTrQxMG7TqNyE_rvcIV8r2uFVLO_Sius2B7lXg
];
const layouts = {
  auth: defineAsyncComponent(() => import('./auth-DPb2JHW7.mjs').then((m) => m.default || m)),
  "components-customizer-data": defineAsyncComponent(() => import('./data-Co7zoAsh.mjs').then((m) => m.default || m)),
  "components-customizer": defineAsyncComponent(() => import('./index-S51mOWaK.mjs').then((m) => m.default || m)),
  "components-footer": defineAsyncComponent(() => import('./index-CrQieO5U.mjs').then((m) => m.default || m)),
  "components-mobile-menu": defineAsyncComponent(() => import('./index-C8a9Gwrn.mjs').then((m) => m.default || m)),
  "components-sidenav-components-app-menu": defineAsyncComponent(() => import('./AppMenu-wIVvB5t3.mjs').then((m) => m.default || m)),
  "components-sidenav-components-menu-item": defineAsyncComponent(() => import('./MenuItem-DRf2TIbN.mjs').then((m) => m.default || m)),
  "components-sidenav-components-menu-item-with-children": defineAsyncComponent(() => import('./MenuItemWithChildren-BV2E1r8c.mjs').then((m) => m.default || m)),
  "components-sidenav-components-data": defineAsyncComponent(() => import('./data-DUV_uuTB.mjs').then((m) => m.default || m)),
  "components-sidenav": defineAsyncComponent(() => import('./index-CgrDkO63.mjs').then((m) => m.default || m)),
  "components-topbar-components-customizer-toggler": defineAsyncComponent(() => import('./CustomizerToggler-CfuET3W0.mjs').then((m) => m.default || m)),
  "components-topbar-components-language-dropdown": defineAsyncComponent(() => import('./LanguageDropdown-BpE4DRuo.mjs').then((m) => m.default || m)),
  "components-topbar-components-notification-dropdown": defineAsyncComponent(() => import('./NotificationDropdown-9jVU8SDl.mjs').then((m) => m.default || m)),
  "components-topbar-components-theme-toggler": defineAsyncComponent(() => import('./ThemeToggler-gK4JAuSI.mjs').then((m) => m.default || m)),
  "components-topbar-components-user-profile": defineAsyncComponent(() => import('./UserProfile-jxbohxoO.mjs').then((m) => m.default || m)),
  "components-topbar": defineAsyncComponent(() => import('./index-0bc88ocl.mjs').then((m) => m.default || m)),
  vertical: defineAsyncComponent(() => import('./vertical-CZx33MWl.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route?.meta.layoutTransition ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const appFavicon = "/favicon.ico";
const appName = "Tailwick";
const appTitle = "Tailwick - Tailwind CSS 3 Admin Layout & UI Kit Template";
const appDescription = "A fully featured admin theme which can be used to build CRM, CMS, etc.";
const author = "Themesdesign";
const useSystemTheme = () => {
  const systemTheme = ref("light");
  return systemTheme;
};
const INIT_STATE = {
  theme: "light",
  sidenav: {
    size: "default",
    color: "light"
  },
  position: "ltr-mode",
  isMobileMenuOpen: false
};
const useLayout = defineStore(
  "layout",
  () => {
    const layout = ref({ ...INIT_STATE });
    const systemTheme = useSystemTheme();
    const isCustomizerOpen = ref(false);
    const setTheme = (nTheme, persist = true) => {
      nTheme === "system" ? systemTheme.value : nTheme;
      if (persist) layout.value.theme = nTheme;
    };
    const setSideNavColor = (nColor, persist = true) => {
      if (persist) layout.value.sidenav = { ...layout.value.sidenav, color: nColor };
    };
    const setSideNavSize = (nSize, persist = true) => {
      if (persist) layout.value.sidenav.size = nSize;
      const html = (void 0).documentElement;
      if (nSize === "offcanvas") {
        html.classList.add("sidenav-enable");
        showBackdrop();
      } else {
        if (!layout.value.isMobileMenuOpen) {
          html.classList.remove("sidenav-enable");
          hideBackdrop();
        }
      }
    };
    const toggleMobileMenu = () => {
      layout.value.isMobileMenuOpen = !layout.value.isMobileMenuOpen;
      const html = (void 0).documentElement;
      html.classList.toggle("sidenav-enable", layout.value.isMobileMenuOpen);
      if (layout.value.isMobileMenuOpen) showBackdrop();
      else hideBackdrop();
    };
    const setPosition = (nPosition, persist = true) => {
      if (persist) layout.value.position = nPosition;
    };
    const toggleCustomizer = () => {
      isCustomizerOpen.value = !isCustomizerOpen.value;
    };
    const customizer = { isCustomizerOpen, toggleCustomizer };
    const showBackdrop = () => {
      if (!(void 0).getElementById("custom-backdrop")) {
        const backdrop = (void 0).createElement("div");
        backdrop.id = "custom-backdrop";
        backdrop.className = "transition duration fixed inset-0 bg-default-900/50 z-40";
        (void 0).body.appendChild(backdrop);
        backdrop.addEventListener("click", () => {
          layout.value.sidenav.size = "default";
          (void 0).documentElement.classList.remove("sidenav-enable");
          hideBackdrop();
        });
      }
    };
    const hideBackdrop = () => {
      const backdrop = (void 0).getElementById("custom-backdrop");
      if (backdrop) (void 0).body.removeChild(backdrop);
    };
    const toggleHoverSidebar = () => {
      (void 0).documentElement;
      const current = layout.value.sidenav.size;
      const newSize = current === "hover-active" ? "hover" : "hover-active";
      setSideNavSize(newSize);
    };
    const init = () => {
      setTheme(layout.value.theme);
      setSideNavColor(layout.value.sidenav.color);
      setSideNavSize(layout.value.sidenav.size);
      setPosition(layout.value.position);
    };
    const reset = () => {
      setTheme(INIT_STATE.theme);
      setSideNavColor(INIT_STATE.sidenav.color);
      setSideNavSize(INIT_STATE.sidenav.size);
      setPosition(INIT_STATE.position);
    };
    return {
      layout,
      setTheme,
      setSideNavColor,
      setSideNavSize,
      toggleMobileMenu,
      setPosition,
      toggleHoverSidebar,
      isCustomizerOpen,
      toggleCustomizer,
      init,
      reset,
      customizer
    };
  },
  {
    persist: true
  }
);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { init } = useLayout();
    useHead({
      title: appTitle,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "author", content: author },
        { name: "description", content: appDescription }
      ],
      link: [{ rel: "shortcut icon", href: appFavicon }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-nLe7Ev_W.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-C9wTJCtA.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { __nuxt_component_0$1 as _, useLayout as a, useRouter as b, useNuxtApp as c, useRuntimeConfig as d, entry$1 as default, nuxtLinkDefaults as e, appTitle as f, currentYear as g, appName as h, author as i, navigateTo as n, resolveRouteObject as r, useHead as u };
//# sourceMappingURL=server.mjs.map
