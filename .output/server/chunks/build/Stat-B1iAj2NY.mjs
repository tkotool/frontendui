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
  __name: "Stat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="col-span-1"><div class="grid md:grid-cols-2 grid-cols-1 gap-5"><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-primary/10 text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:boxes",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="15101">15,101</h5><p class="text-default-500 text-sm">Total Orders</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-secondary/10 text-secondary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:truck",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="9,543">9,543</h5><p class="text-default-500 text-sm">Shipping Orders</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-warning/15 text-warning">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:loader",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="1,548">1,548</h5><p class="text-default-500 text-sm">Pending Orders</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-primary/10 text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-plus",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="3,874">3,874</h5><p class="text-default-500 text-sm">New Orders</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-success/10 text-success">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-check",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="30,914">30,914</h5><p class="text-default-500 text-sm">Delivered Orders</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn size-12 text-15 bg-danger/10 text-danger">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-x",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base font-semibold text-default-800" data-target="3,863">3,863</h5><p class="text-default-500 text-sm">Cancelled Orders</p></div></div></div></div></div></div><div class="lg:col-span-2 col-span-1"><div class="card"><div class="card-header"><h6 class="car-title">Orders Overview</h6></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order/components/Stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stat-B1iAj2NY.mjs.map
