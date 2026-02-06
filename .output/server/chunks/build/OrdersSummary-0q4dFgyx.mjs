import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { i as img08 } from './img-08-BpiT8Rl3.mjs';
import { i as img04 } from './img-04-DeVAzRtv.mjs';
import { p as product } from './img-01-2zFQ0P8h.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrdersSummary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="p-5 card mb-5"><h6 class="card-title mb-4">Orders Summary</h6><div class="px-4 py-3 mb-4 text-danger rounded-md bg-red-50">These products are limited, checkout within <span class="font-bold">03m 21s</span></div><div class=""><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="flex items-center justify-center rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(img08))} alt="" class="h-8"></div><div class=""><h6 class="mb-1 text-[15px] text-default-800 font-semibold"><a href="/ecommerce/product-grid" class="transition-all duration-300 ease-linear hover:text-primary">Roar Twill Blue Baseball Cap</a></h6><p class="text-default-500 text-sm">$149.99 x 02</p></div></div><span class="text-default-500 text-sm">$299.98</span></div><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="flex items-center justify-center rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(img04))} alt="" class="h-8"></div><div class=""><h6 class="mb-1 text-[15px] text-default-800 font-semibold"><a href="/ecommerce/product-grid" class="transition-all duration-300 ease-linear hover:text-primary">Mesh Ergonomic Green Chair</a></h6><p class="text-default-500 text-sm">$362.21 x 1</p></div></div><span class="text-default-500 text-sm">$362.21</span></div><div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200"><div class="flex items-center gap-3"><div class="flex items-center justify-center rounded-md size-12 bg-default-100"><img${ssrRenderAttr("src", unref(product))} alt="" class="h-8"></div><div class=""><h6 class="mb-1 text-[15px] text-default-800 font-semibold"><a href="/ecommerce/product-grid" class="transition-all duration-300 ease-linear hover:text-primary">Smartest Printed T-shirt</a></h6><p class="text-default-500 text-sm">$89.99 x 03</p></div></div><span class="text-default-500 text-sm">$269.97</span></div></div><div class="flex justify-between items-center gap-5 py-3"><span class="text-default-500 text-sm">Sub Total </span><span class="text-default-800 text-sm">$932.16</span></div><div class="flex justify-between items-center gap-5 py-3"><span class="text-default-500 text-sm">Estimated Tax (18%) </span><span class="text-default-800 text-sm">$167.79</span></div><div class="flex justify-between items-center gap-5 py-3"><span class="text-default-500 text-sm">Item Discounts (12%)</span><span class="text-default-800 text-sm">-$111.86</span></div><div class="flex justify-between items-center gap-5 py-3"><span class="text-default-500 text-sm">Shipping Charge </span><span class="text-default-800 text-sm">$0</span></div><div class="flex justify-between items-center gap-5 font-semibold pt-3"><span class="text-default-500 text-sm">Total Amount (USD) </span><span class="text-default-800 text-sm">$988.09</span></div><div class="mt-4"><button type="button" class="text-[13px] py-2 px-4 rounded bg-primary text-white transition-all duration-300 hover:bg-blue-600 inline-flex justify-center w-full items-center"> Place Order `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:move-right",
        class: "size-4 ms-1.5"
      }, null, _parent));
      _push(`</button></div></div><div class="mb-5"><h6 class="mb-4 underline text-base text-default-800 font-semibold">Additional Service</h6><div class="p-5 card mb-5"><div class="flex justify-between flex-wrap items-center gap-3"><div><div class=""><h6 class="mb-1 text-[15px] text-default-800 font-semibold">Care + Package</h6><p class="text-default-500 text-sm">2 year of additional care</p></div></div><div class="flex items-center gap-3"><label class="text-default-800 font-semibold text-sm" for="switchPrice1">$24.99</label><input type="checkbox" id="switchPrice1" class="form-switch"></div></div></div><div class="p-5 card"><div class="flex justify-between flex-wrap items-center gap-3"><div><div class=""><h6 class="mb-1 text-[15px] text-default-800 font-semibold">Environment Friendly</h6><p class="text-default-500 text-sm">The primary goal of eco-warriors is creating</p></div></div><div class="flex items-center gap-3"><label class="text-default-800 font-semibold text-sm" for="switchPrice2">$19.99</label><input type="checkbox" id="switchPrice2" class="form-switch"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/checkout/components/OrdersSummary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=OrdersSummary-0q4dFgyx.mjs.map
