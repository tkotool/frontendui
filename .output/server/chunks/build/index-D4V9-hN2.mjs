import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import { Icon } from '@iconify/vue';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import './server.mjs';
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

const offline = "" + __buildAssetsURL("offline.CFWSC-eC.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Offline");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-default-50 rounded-lg w-lg relative"><div class="text-center px-10 py-12"><a href="/" class="flex justify-center"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a><div class="mt-10"><img${ssrRenderAttr("src", unref(offline))} alt="" class="h-72 mx-auto"></div><div class="mt-8 text-center"><h4 class="mb-2 text-purple-500 dark:text-white text-xl font-semibold">We&#39;re Temporarily Offline</h4><p class="mb-6 text-base text-default-500">We can&#39;t display these images as you&#39;re currently not connected to the internet. Once you&#39;re back online, please refresh the page or click the button below.</p><button type="button" onclick="window.location.href=window.location.href" class="bg-primary text-white hover:bg-blue-600 rounded text-[13px] py-2 px-4 inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:refresh-ccw",
        class: "size-3 me-1"
      }, null, _parent));
      _push(` Refresh </button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/offline/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D4V9-hN2.mjs.map
