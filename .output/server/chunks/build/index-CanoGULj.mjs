import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
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

const error = "" + __buildAssetsURL("error-404.BwHbbr1V.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Error");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-default-50 rounded-lg w-lg relative"><div class="text-center px-10 py-12"><a href="/" class="flex justify-center"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a><div class="mt-10"><img${ssrRenderAttr("src", unref(error))} alt="" class="h-64 mx-auto"></div><div class="mt-8 text-center"><h4 class="mb-2 text-purple-500 dark:text-white text-xl font-semibold">OPPS, PAGE NOT FOUND</h4><p class="mb-6 text-base text-default-500">It will be as straightforward as Occidental; in fact, it will be just like Occidental to an English speaker.</p><a href="/"><button type="button" class="bg-primary text-white hover:bg-blue-600 rounded text-[13px] py-2 px-4 inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:home",
        class: "size-3 me-1"
      }, null, _parent));
      _push(` Back to Home </button></a></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/error/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CanoGULj.mjs.map
