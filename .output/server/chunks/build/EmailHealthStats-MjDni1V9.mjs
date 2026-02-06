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
  __name: "EmailHealthStats",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card"><div class="card-body"><div class="flex items-center justify-between mb-3"><p class="text-default-500">Delivered Rate</p><div class="hs-tooltip [--placement:top]"><button type="button" class="hs-tooltip-toggle">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:info",
        class: "size-4 text-default-500 mt-2"
      }, null, _parent));
      _push(`<span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip">Taking the number of delivered emails and dividing it by the total number of emails sent </span></button></div></div><h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="100">100</span>%</h5>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="card"><div class="card-body"><div class="flex items-center justify-between mb-3"><p class="text-default-500">Hard Bounce Rate</p><div class="hs-tooltip [--placement:top]"><button type="button" class="hs-tooltip-toggle">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:info",
        class: "size-4 text-default-500 mt-2"
      }, null, _parent));
      _push(`<span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xl" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span></button></div></div><h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="89">89</span>%</h5>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="card"><div class="card-body"><div class="flex items-center justify-between mb-3"><p class="text-default-500">Unsubscribed Rate</p><div class="hs-tooltip [--placement:top]"><button type="button" class="hs-tooltip-toggle">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:info",
        class: "size-4 text-default-500 mt-2"
      }, null, _parent));
      _push(`<span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span></button></div></div><h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="33">33</span>%</h5>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="card"><div class="card-body"><div class="flex items-center justify-between mb-3"><p class="text-default-500">Spam Report Rate</p><div class="hs-tooltip [--placement:top]"><button type="button" class="hs-tooltip-toggle">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:info",
        class: "size-4 text-default-500 mt-2"
      }, null, _parent));
      _push(`<span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span></button></div></div><h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="11.8">11.8</span>%</h5>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/email/components/EmailHealthStats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EmailHealthStats-MjDni1V9.mjs.map
