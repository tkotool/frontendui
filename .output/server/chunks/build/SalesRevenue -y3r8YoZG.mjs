import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
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
  __name: "SalesRevenue ",
  __ssrInlineRender: true,
  setup(__props) {
    useFlatpickr({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-2 col-span-1" }, _attrs))}><div class="card"><div class="card-header"><h6 class="card-title">Sales Revenue Overview</h6><div class="relative"><input type="text" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" placeholder="Select Date" class="form-input form-input-sm ps-9"><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:calendar-range",
        class: "size-4 text-default-500"
      }, null, _parent));
      _push(`</div></div></div><div class="card-body"><div class="grid md:grid-cols-4 grid-cols-1 mb-3 gap-4"><div class="col-span-1"><div class="flex items-center gap-3"><div class="btn size-12 bg-secondary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:bar-chart",
        class: "text-secondary size-6"
      }, null, _parent));
      _push(`</div><div><p class="mb-1.5 text-default-500 text-sm">Total Sales</p><h5 class="text-base font-semibold text-default-800">$<span data-target="1517.36">1,517.36</span>k</h5></div></div></div><div class="col-span-1"><div class="flex items-center gap-3"><div class="btn size-12 bg-success/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trending-up",
        class: "text-success size-6"
      }, null, _parent));
      _push(`</div><div><p class="mb-1.5 text-default-500 text-sm">Total Profit</p><h5 class="text-base font-semibold text-default-800">$<span data-target="746.84">746.84</span>k</h5></div></div></div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ecommerce/components/SalesRevenue .vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SalesRevenue -y3r8YoZG.mjs.map
