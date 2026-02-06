import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "SummaryCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="grid md:grid-cols-2 grid-cols-1 gap-5"><div class="card"><div class="card-body"><div class="grid grid-cols-4"><div class="col-span-3"><p class="text-base text-default-500 font-medium">Total Employee</p><h5 class="text-3xl font-medium mt-4"><span data-target="615">615</span></h5></div><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="flex items-center justify-between gap-3 mt-8"><p class="font-medium text-sm text-default-600"><span class="font-medium text-success">15%</span> Increase</p><p class="font-semibold text-base text-default-400">This Month</p></div></div></div><div class="card"><div class="card-body"><div class="grid grid-cols-4"><div class="col-span-3"><p class="text-base text-default-500 font-medium">Total Application</p><h5 class="text-3xl font-medium mt-4"><span data-target="174">174</span></h5></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div id="totalApplication"></div></div><div class="flex items-center justify-between gap-3 mt-8"><p class="font-medium text-sm text-default-600"><span class="font-medium text-success">26%</span> Increase</p><p class="font-semibold text-base text-default-400">This Month</p></div></div></div><div class="card"><div class="card-body"><div class="grid grid-cols-4"><div class="col-span-3"><p class="text-base text-default-500 font-medium">Hired Candidates</p><h5 class="text-3xl font-medium mt-4"><span data-target="64">64</span></h5></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div id="hiredCandidates"></div></div><div class="flex items-center justify-between gap-3 mt-8"><p class="font-medium text-sm text-default-600"><span class="font-medium text-danger">0.5%</span> Increase</p><p class="font-semibold text-base text-default-400">This Month</p></div></div></div><div class="card"><div class="card-body"><div class="grid grid-cols-4"><div class="col-span-3"><p class="text-base text-default-500 font-medium">Rejected Candidates</p><h5 class="text-3xl font-medium mt-4"><span data-target="110">110</span></h5></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div id="rejectedCandidates"></div></div><div class="flex items-center justify-between gap-3 mt-8"><p class="font-medium text-sm text-default-600"><span class="font-medium text-danger">16%</span> Increase</p><p class="font-semibold text-base text-default-400">This Month</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/SummaryCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SummaryCards-BqN8ggtq.mjs.map
