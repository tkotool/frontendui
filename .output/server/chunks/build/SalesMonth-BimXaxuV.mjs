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
  __name: "SalesMonth",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><h6 class="card-title">Sales This Month</h6><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 text-sm font-semibold rounded-lg hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis-vertical",
        class: "iconify size-4 text-default-500"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Weekly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 3 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 6 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> This Yearly </a></div></div></div><div class="card-body"><div class="flex items-center gap-3"><div class="flex items-center justify-center rounded-md size-12 bg-success/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trending-up",
        class: "size-6 text-success"
      }, null, _parent));
      _push(`</div><div class="text-sm"><p class="mb-1 text-default-500">Total Profit</p><h5 class="font-semibold text-default-800">$<span data-target="746.84">746.84</span>k</h5></div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ecommerce/components/SalesMonth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SalesMonth-BimXaxuV.mjs.map
