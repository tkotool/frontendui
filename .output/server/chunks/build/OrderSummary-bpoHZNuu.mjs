import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderSummary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="sticky top-20"><div class="p-5 card mb-5"><h6 class="card-title mb-4">Order Summary</h6><div class="overflow-x-auto"><table class="w-full"><tbody class="table-total"><tr class="text-sm"><td class="py-2 text-default-500">Sub Total</td><td class="py-2 text-default-500 cart-subtotal">$932.16</td></tr><tr class="text-sm"><td class="py-2 text-default-500">Estimated Tax (18%)</td><td class="py-2 text-default-500 cart-tax">$167.79</td></tr><tr class="text-sm"><td class="py-2 text-default-500">Item Discounts (12%)</td><td class="py-2 text-default-500 cart-discount">-$111.86</td></tr><tr class="text-sm"><td class="py-2 text-default-500">Shipping Charge</td><td class="py-2 text-default-500 cart-shipping">$0</td></tr><tr class="font-semibold text-sm text-default-800"><td class="pt-2">Total Amount (USD)</td><td class="pt-2 cart-total">$988.09</td></tr></tbody></table></div></div><div class="grid grid-cols-2 gap-2 mb-5"><button type="button" class="btn bg-danger/90 text-white transition-all duration-300 hover:bg-danger">Continue to Shopping</button><button type="button" class="btn bg-primary/90 text-white transition-all duration-300 hover:bg-primary">Checkout</button></div><div class="p-5 card mb-5"><div class="flex items-center gap-5"><div class="btn bg-default-200 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:truck",
        class: "size-6 text-default-500 fill-default-200"
      }, null, _parent));
      _push(`</div><div><h6 class="mb-1 text-default-800 font-semibold text-sm">Estimated Delivery</h6><p class="text-default-500 text-sm">01 - 07 Dec, 2023</p></div></div></div><div class="p-5 card"><div class="flex items-center gap-5"><div class="btn bg-default-200 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:container",
        class: "size-6 text-default-500 fill-default-200"
      }, null, _parent));
      _push(`</div><div><h6 class="mb-1 text-default-800 font-semibold text-sm">Free Shipping &amp; Returns</h6><p class="text-default-500 text-sm">On all orders over $200.00</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/cart/components/OrderSummary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=OrderSummary-bpoHZNuu.mjs.map
