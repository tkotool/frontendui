import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { d as delivery } from './delivery-1-CtLUxAfZ.mjs';

const delivery2 = "" + __buildAssetsURL("delivery-2.BhaYq7h3.png");
const delivery3 = "" + __buildAssetsURL("delivery-3.dsJ1kigj.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Delivery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 card mb-5" }, _attrs))}><h6 class="card-title mb-4">Delivery</h6><div class="grid lg:grid-cols-2 grid-cols-1 gap-5"><div class="flex gap-2.5 items-center"><input type="radio" class="peer form-radio" id="radio_1" name="level" checked value="1"><label class="flex lg:flex-nowrap flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_1"><div class="flex gap-4"><img${ssrRenderAttr("src", unref(delivery))} alt="" class="h-12" width="48"><span class="grow"><span class="block mb-1 font-semibold text-default-800 text-[15px]">Express Delivery</span><span class="text-default-500 text-sm">Expected delivery: 01 Nov, Wednesday</span></span></div><span class="text-lg text-default-800 font-semibold">$11.99 </span></label></div><div class="flex items-center gap-2.5"><input type="radio" class="peer form-radio" id="radio_2" name="level" value="2"><label class="flex flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_2"><div class="flex gap-4"><img${ssrRenderAttr("src", unref(delivery2))} alt="" class="h-12" width="48"><span class="grow"><span class="block mb-1 font-semibold text-[15px] text-default-800">Air Logistic Delivery</span><span class="text-default-500 text-sm">Expected delivery: 06 Nov, Monday</span></span></div><span class="text-lg text-default-800 font-semibold">$5</span></label></div><div class="flex gap-2.5 items-center"><input type="radio" class="peer form-radio" id="radio_3" name="level" value="3"><label class="flex flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_3"><div class="flex gap-4"><img${ssrRenderAttr("src", unref(delivery3))} alt="" class="h-12" width="48"><span class="grow"><span class="block mb-1 font-semibold text-default-800 text-[15px]">Free Delivery</span><span class="text-default-500 text-sm">Expected delivery: 11 Nov, Saturday</span></span></div><span class="text-lg text-default-800 font-semibold">$0 </span></label></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/checkout/components/Delivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Delivery-BNVfixzQ.mjs.map
