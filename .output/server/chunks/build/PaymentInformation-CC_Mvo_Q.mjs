import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';

const img01 = "" + __buildAssetsURL("img-01.DxkzBWX2.png");
const img02 = "" + __buildAssetsURL("img-02.CJfB-CGZ.png");
const img03 = "" + __buildAssetsURL("img-03.aIZHq5lt.png");
const img04 = "" + __buildAssetsURL("img-04.D3m88Kv7.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PaymentInformation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card p-5 mb-5" }, _attrs))}><h6 class="card-title mb-4">Payment Information</h6><div class="mb-5"><label for="cardNumberInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Card Number</label><input type="text" pattern="\\d*" maxlength="16" id="cardNumberInput" class="form-input" placeholder="XXXX XXXX XXXX XXXX" style="${ssrRenderStyle({ "border": "1px solid oklch(92% 0.004 286.32)" })}"></div><div class="grid lg:grid-cols-2 grid-cols-1 gap-5"><div class="col-span-1"><label for="expiringInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Expiring (MM/YY)</label><input type="text" pattern="\\d*" maxlength="4" id="expiringInput" class="form-input" placeholder="MM/YY" style="${ssrRenderStyle({ "border": "1px solid oklch(92% 0.004 286.32)" })}"></div><div class="col-span-1"><label for="cvvInput" class="inline-block mb-2 text-sm text-default-800 font-medium">CVV Code</label><input type="text" pattern="\\d*" maxlength="3" id="cvvInput" class="form-input" placeholder="000" style="${ssrRenderStyle({ "border": "1px solid oklch(92% 0.004 286.32)" })}"></div></div><div class="mt-3"><h6 class="inline-block mb-2 text-sm text-default-800 font-medium">We accept the following cards</h6><div class="flex items-center gap-2"><img${ssrRenderAttr("src", unref(img01))} alt="" class="h-8"><img${ssrRenderAttr("src", unref(img02))} alt="" class="h-8"><img${ssrRenderAttr("src", unref(img03))} alt="" class="h-8"><img${ssrRenderAttr("src", unref(img04))} alt="" class="h-8"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/checkout/components/PaymentInformation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PaymentInformation-CC_Mvo_Q.mjs.map
