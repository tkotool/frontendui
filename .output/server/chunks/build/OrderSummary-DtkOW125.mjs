import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as product } from './img-01-2zFQ0P8h.mjs';
import { i as img04 } from './img-04-DeVAzRtv.mjs';
import { i as img08 } from './img-08-BpiT8Rl3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderSummary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card mt-5" }, _attrs))}><div class="card-body"><div class="flex justify-between gap-5 items-center"><h6 class="mb-4 card-title">Orders Summary</h6><a href="#" class="text-danger text-sm underline">Cancelled Order</a></div><div><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="btn rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(img08))} alt="" class="h-8"></div><div><h6 class="mb-1 card-title"><a href="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Roar Twill Blue Baseball Cap</a></h6><p class="text-default-500 text-sm">$149.99 x 02</p></div></div><span class="text-sm">$299.98</span></div><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="btn rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(img04))} alt="" class="h-8"></div><div><h6 class="mb-1 card-title"><a href="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Mesh Ergonomic Green Chair</a></h6><p class="text-default-500 text-sm">$362.21 x 1</p></div></div><span class="text-sm">$362.21</span></div><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="btn rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(product))} alt="" class="h-8"></div><div><h6 class="mb-1 card-title"><a href="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Smartest Printed T-shirt</a></h6><p class="text-default-500 text-sm">$89.99 x 03</p></div></div><span class="text-sm">$269.97</span></div><div class="flex justify-between items-center gap-5 py-3 text-sm"><span class="text-default-500">Sub Total </span><span class="text-default-800">$932.16</span></div><div class="flex justify-between items-center gap-5 py-3 text-sm"><span class="text-default-500">Estimated Tax (18%) </span><span class="text-default-800">$167.79</span></div><div class="flex justify-between items-center gap-5 py-3 text-sm"><span class="text-default-500">Item Discounts (12%)</span><span class="text-default-800">-$111.86</span></div><div class="flex justify-between items-center gap-5 py-3 text-sm"><span class="text-default-500">Shipping Charge </span><span class="text-default-800">$0</span></div><div class="flex justify-between items-center gap-5 pt-4 font-semibold text-sm"><span class="text-default-500">Total Amount (USD) </span><span class="text-default-800">$988.09</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order-detail/components/OrderSummary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=OrderSummary-DtkOW125.mjs.map
