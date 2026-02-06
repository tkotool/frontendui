import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card text-center"><div class="card-body"><h6 class="mb-1 text-default-800 font-semibold text-sm">#TWT5015100366</h6><p class="uppercase text-default-500 text-sm">Order ID</p></div></div><div class="card text-center"><div class="card-body"><h6 class="mb-1 text-default-800 font-semibold text-sm">02 Nov, 2023</h6><p class="uppercase text-default-500 text-sm">Order Date</p></div></div><div class="card text-center"><div class="card-body"><h6 class="mb-1 text-default-800 font-semibold text-sm">09 Nov, 2023</h6><p class="uppercase text-default-500 text-sm">Delivery Date</p></div></div><div class="card text-center"><div class="card-body"><h6 class="mb-1 text-default-800 font-semibold text-sm">$843.49</h6><p class="uppercase text-default-500 text-sm">Order Amount</p></div></div><div class="card text-center"><div class="card-body"><span class="py-0.5 px-2.5 font-semibold uppercase border border-secondary/30 text text-secondary rounded inline-block mb-2 text-xs bg-secondary/10">Shipping</span><p class="uppercase text-default-500 text-sm">Order Status</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order-detail/components/OrderInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OrderInfo as default };
//# sourceMappingURL=OrderInfo-B3SinEST.mjs.map
