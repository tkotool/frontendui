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
  __name: "ApplicationReceived",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card"><div class="card-body"><div class="flex justify-between"><h6 class="card-title">Application Received</h6><div class="flex gap-2"><div class="btn size-7.5 bg-primary rounded text-white text-xs">All</div><div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">1M</div><div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">6M</div><div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">1Y</div></div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/ApplicationReceived.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ApplicationReceived-DVZOTYIS.mjs.map
