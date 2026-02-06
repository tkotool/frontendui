import { defineComponent, ref, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { a as useLayout } from './server.mjs';
import { sidenavSizes, themeOptions, setPositionOptions, sidenavColorOptions } from './data-Co7zoAsh.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';

const toPascalCase = (value) => value.replace(/[-_ ]+/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
const toLabelCase = (value) => {
  return value.replace(/[-_]+/g, " ").trim().split(" ").map((word) => {
    if (word.toLowerCase() === "ltr" || word.toLowerCase() === "rtl") {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setTheme, layout, customizer, setSideNavColor, setPosition, setSideNavSize, reset } = useLayout();
    const isFullscreen = ref(false);
    (void 0).addEventListener("fullscreenchange", () => {
      isFullscreen.value = !!(void 0).fullscreenElement;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="theme-customization" class="hs-overlay hs-overlay-open:translate-x-0 hidden bg-card dark:bg-default-100 hs-overlay-open:flex flex-col translate-x-full rtl:-translate-x-full fixed inset-y-0 end-0 bottom-0 transition-all duration-300 transform max-w-sm w-full z-80 overflow-hidden"><div class="min-h-16 flex items-center text-default-600 border-b border-dashed border-default-900/10 px-6 gap-3"><h5 class="text-base grow">Theme Settings</h5><button class="${ssrRenderClass([{ "fullscreen-active": isFullscreen.value }, "btn size-9 rounded-full btn-sm hover:bg-default-150 group"])}" id="fullscreenBtn" data-toggle="fullscreen" aria-label="Full Screen">`);
      if (!isFullscreen.value) {
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:fullscreen",
          class: "iconify size-5 group-[.fullscreen-active]:hidden"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:minimize",
          class: "iconify size-5 hidden group-[.fullscreen-active]:inline-block"
        }, null, _parent));
      }
      _push(`</button><button type="button" data-hs-overlay="#theme-customization" class="btn size-9 rounded-full btn-sm hover:bg-default-150">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:x",
        class: "iconify text-xl"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-full flex-grow overflow-y-auto",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="divide-y divide-dashed divide-default-200"${_scopeId}><div class="p-6"${_scopeId}><h5 class="font-semibold text-sm mb-3"${_scopeId}>Sidenav View</h5><div class="grid grid-cols-3 gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(sidenavSizes), (item, idx) => {
              _push2(`<div class="card-radio"${_scopeId}><input class="hidden" type="radio" name="sidenav-size"${ssrRenderAttr("id", `sidenav-size-${item.size}`)}${ssrRenderAttr("value", item.size)}${ssrIncludeBooleanAttr(unref(layout).sidenav.size === item.size) ? " checked" : ""}${_scopeId}><label${ssrRenderAttr("for", `sidenav-size-${item.size}`)} class="form-label cursor-pointer"${_scopeId}><span${_scopeId}>${item.preview ?? ""}</span></label><div class="mt-1 text-md font-medium text-center text-default-600"${_scopeId}>${ssrInterpolate(unref(toPascalCase)(item.label))}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="p-6"${_scopeId}><h5 class="font-semibold text-sm mb-3"${_scopeId}>Theme Mode</h5><div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(themeOptions), (item, idx) => {
              _push2(`<div${_scopeId}><input class="hidden" type="radio" name="" data-theme${ssrRenderAttr("id", `theme-${item.theme}`)}${ssrRenderAttr("value", item.theme)}${ssrIncludeBooleanAttr(unref(layout).theme === item.theme) ? " checked" : ""}${_scopeId}><label class="form-label btn bg-default-150"${ssrRenderAttr("for", `theme-${item.theme}`)}${_scopeId}>${ssrInterpolate(unref(toPascalCase)(item.theme))}</label></div>`);
            });
            _push2(`<!--]--></div></div><div class="p-6"${_scopeId}><h5 class="font-semibold text-sm mb-3"${_scopeId}>Direction</h5><div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(setPositionOptions), (item, idx) => {
              _push2(`<div${_scopeId}><input type="radio" class="hidden"${ssrRenderAttr("id", `dir-${item.dir}`)}${ssrRenderAttr("value", item.dir)}${ssrIncludeBooleanAttr(unref(layout).position === item.dir) ? " checked" : ""} name="dir"${_scopeId}><label class="form-label btn bg-default-150"${ssrRenderAttr("for", `dir-${item.dir}`)}${_scopeId}>${ssrInterpolate(unref(toLabelCase)(item.dir.replace("-mode", "")))} Mode </label></div>`);
            });
            _push2(`<!--]--></div></div><div class="p-6"${_scopeId}><h5 class="font-semibold text-sm mb-3"${_scopeId}>Sidenav Color</h5><div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(sidenavColorOptions), (item, idx) => {
              _push2(`<div${_scopeId}><input${ssrRenderAttr("id", `sidenav-color-${item.color}`)} class="hidden" type="radio" name="data-sidenav-color"${ssrRenderAttr("value", item.color)}${ssrIncludeBooleanAttr(unref(layout).sidenav.color === item.color) ? " checked" : ""}${_scopeId}><label${ssrRenderAttr("for", `sidenav-color-${item.color}`)} class="form-label btn bg-default-150"${_scopeId}>${ssrInterpolate(unref(toPascalCase)(item.color))}</label></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "divide-y divide-dashed divide-default-200" }, [
                createVNode("div", { class: "p-6" }, [
                  createVNode("h5", { class: "font-semibold text-sm mb-3" }, "Sidenav View"),
                  createVNode("div", { class: "grid grid-cols-3 gap-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sidenavSizes), (item, idx) => {
                      return openBlock(), createBlock("div", {
                        class: "card-radio",
                        key: idx
                      }, [
                        createVNode("input", {
                          class: "hidden",
                          type: "radio",
                          name: "sidenav-size",
                          id: `sidenav-size-${item.size}`,
                          value: item.size,
                          checked: unref(layout).sidenav.size === item.size,
                          onChange: () => unref(setSideNavSize)(item.size)
                        }, null, 40, ["id", "value", "checked", "onChange"]),
                        createVNode("label", {
                          for: `sidenav-size-${item.size}`,
                          class: "form-label cursor-pointer"
                        }, [
                          createVNode("span", {
                            innerHTML: item.preview
                          }, null, 8, ["innerHTML"])
                        ], 8, ["for"]),
                        createVNode("div", { class: "mt-1 text-md font-medium text-center text-default-600" }, toDisplayString(unref(toPascalCase)(item.label)), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("h5", { class: "font-semibold text-sm mb-3" }, "Theme Mode"),
                  createVNode("div", { class: "flex gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(themeOptions), (item, idx) => {
                      return openBlock(), createBlock("div", { key: idx }, [
                        createVNode("input", {
                          class: "hidden",
                          type: "radio",
                          name: "",
                          "data-theme": "",
                          id: `theme-${item.theme}`,
                          value: item.theme,
                          checked: unref(layout).theme === item.theme,
                          onChange: () => unref(setTheme)(item.theme)
                        }, null, 40, ["id", "value", "checked", "onChange"]),
                        createVNode("label", {
                          class: "form-label btn bg-default-150",
                          for: `theme-${item.theme}`
                        }, toDisplayString(unref(toPascalCase)(item.theme)), 9, ["for"])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("h5", { class: "font-semibold text-sm mb-3" }, "Direction"),
                  createVNode("div", { class: "flex gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(setPositionOptions), (item, idx) => {
                      return openBlock(), createBlock("div", { key: idx }, [
                        createVNode("input", {
                          type: "radio",
                          class: "hidden",
                          id: `dir-${item.dir}`,
                          value: item.dir,
                          checked: unref(layout).position === item.dir,
                          onChange: () => unref(setPosition)(item.dir),
                          name: "dir"
                        }, null, 40, ["id", "value", "checked", "onChange"]),
                        createVNode("label", {
                          class: "form-label btn bg-default-150",
                          for: `dir-${item.dir}`
                        }, toDisplayString(unref(toLabelCase)(item.dir.replace("-mode", ""))) + " Mode ", 9, ["for"])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("h5", { class: "font-semibold text-sm mb-3" }, "Sidenav Color"),
                  createVNode("div", { class: "flex gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sidenavColorOptions), (item, idx) => {
                      return openBlock(), createBlock("div", { key: idx }, [
                        createVNode("input", {
                          id: `sidenav-color-${item.color}`,
                          class: "hidden",
                          type: "radio",
                          name: "data-sidenav-color",
                          value: item.color,
                          checked: unref(layout).sidenav.color === item.color,
                          onChange: () => unref(setSideNavColor)(item.color)
                        }, null, 40, ["id", "value", "checked", "onChange"]),
                        createVNode("label", {
                          for: `sidenav-color-${item.color}`,
                          class: "form-label btn bg-default-150"
                        }, toDisplayString(unref(toPascalCase)(item.color)), 9, ["for"])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-4 flex border-t border-dashed border-default-900/10"><div class="flex w-full gap-4"><button type="button" class="btn bg-default-150 grow" id="reset-layout">Reset</button><a href="https://1.envato.market/tailwick-tailwind" target="_blank" class="btn bg-primary text-white grow">Buy Now</a></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/customizer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-S51mOWaK.mjs.map
