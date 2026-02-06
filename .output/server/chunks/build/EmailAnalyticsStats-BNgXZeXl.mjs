import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmailAnalyticsStats",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}><div class="card"><div class="card-body"><div class="grid grid-cols-1 gap-5 divide-y md:divide-x md:divide-y-0 md:grid-cols-2 lg:grid-cols-4 divide-default-200"><div class="py-5 md:pe-5 pe-0 md:border-e md:border-b-0 border-b border-default-200"><div class="grid grid-cols-3 mb-4"><div class="text-default-500 text-sm w-36 shrink-0"><div class="flex items-center gap-1.5 mb-6">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:rocket",
        class: "size-4"
      }, null, _parent));
      _push(`<p class="uppercase">sent</p></div><h5 class="text-default-800 text-lg font-semibold"><span class="counter-value" data-target="1452">1,452</span></h5></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><span class="text-default-500">238 Emails (Monthly)</span></div><div class="md:p-5 px-0 py-5 md:border-e md:border-b-0 border-b border-default-200"><div class="grid grid-cols-3 mb-4"><div class="text-default-500 text-sm w-36 shrink-0"><div class="flex items-center gap-1.5 mb-6">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mouse-pointer-click",
        class: "size-4"
      }, null, _parent));
      _push(`<p class="uppercase">Open Rate</p></div><h5 class="text-default-800 text-lg font-semibold"><span data-target="92.74">92.74</span>%</h5></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><span class="text-default-500">60 Opened (Monthly)</span></div><div class="md:p-5 px-0 py-5 md:border-e md:border-b-0 border-b border-default-200"><div class="grid grid-cols-3 mb-4"><div class="text-default-500 text-sm w-36 shrink-0"><div class="flex items-center gap-1.5 mb-6">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:square-mouse-pointer",
        class: "size-4"
      }, null, _parent));
      _push(`<p class="uppercase">Open Rate</p></div><h5 class="text-default-800 text-lg font-semibold"><span data-target="3.79">3.79</span>%</h5></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><span class="text-default-500">29 Clicks (Monthly)</span></div><div class="py-5 md:ps-5 ps-0"><div class="grid grid-cols-3 mb-4"><div class="text-default-500 text-sm w-36 shrink-0"><div class="flex items-center gap-1.5 mb-6">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:goal",
        class: "size-4"
      }, null, _parent));
      _push(`<p class="uppercase">Clicks Through</p></div><h5 class="text-default-800 text-lg font-semibold"><span data-target="4.06">4.06</span>%</h5></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div id="clickThrough"></div></div></div><span class="text-default-500">29 Click Through (Monthly)</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/email/components/EmailAnalyticsStats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EmailAnalyticsStats-BNgXZeXl.mjs.map
