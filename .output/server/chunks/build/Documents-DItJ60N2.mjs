import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { d as delivery } from './delivery-1-CtLUxAfZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Documents",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card mb-5"><div class="card-body"><h6 class="mb-3 card-title">Documents</h6><div class="overflow-x-auto"><table class="w-full"><tbody><tr><td class="pe-3.5 py-2 text-default-500 text-sm">Invoice No.</td><td class="ps-3.5 py-2 text-sm"><a href="/invoice/overview" class="text-primary">#TWI154203</a></td></tr><tr><td class="pe-3.5 py-2 text-sm text-default-500">Shipping No</td><td class="ps-3.5 py-2 text-sm"><a href="#" class="text-primary">#TWS987102301</a></td></tr></tbody></table></div></div></div><div class="card"><div class="card-body"><div class="flex items-center justify-between gap-3 mb-4"><h6 class="card-title">Logistics Details</h6><a href="#" class="underline text-primary">Track Order</a></div><div class="gap-4 flex"><img${ssrRenderAttr("src", unref(delivery))} alt="" class="h-10"><div><h6 class="mb-1 card-title">Express Delivery</h6><p class="text-default-500 text-sm">ID: EDTW1400457854</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order-detail/components/Documents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Documents-DItJ60N2.mjs.map
