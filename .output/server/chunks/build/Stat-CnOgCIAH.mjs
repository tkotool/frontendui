import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="card"><div class="card-body"><div class="flex justify-between"><div><h6 class="mb-4 card-title">Shipping Details</h6><h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6><p class="mb-1 text-default-500 text-sm">1235 Crossing Meadows Dr, Onalaska</p><p class="text-default-500 text-sm">West Virginia, USA</p></div><div class="btn bg-secondary/10 text-secondary size-12 float-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:truck",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div></div></div><div class="card"><div class="card-body"><div class="flex justify-between"><div><h6 class="mb-4 card-title">Billing Details</h6><h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6><p class="mb-1 text-default-500 text-sm">1235 Crossing Meadows Dr, Onalaska</p><p class="text-default-500 text-sm">West Virginia, USA</p></div><div class="btn bg-danger/10 text-danger size-12 float-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:credit-card",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div></div></div><div class="card"><div class="card-body"><div class="flex justify-between"><div><h6 class="mb-4 card-title">Payment Details</h6><h6 class="mb-1 text-default-800 font-semibold text-sm">ID: #TSD456DF41SD5</h6><p class="mb-1 text-default-500 text-sm">Payment Method: <b>Credit Card</b></p><p class="mb-1 text-default-500 text-sm">Card Number: <b>xxxx xxxx xxxx 1501</b></p></div><div class="btn bg-info/10 text-info size-12 float-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:circle-dollar-sign",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div></div></div><div class="card"><div class="card-body"><div class="flex justify-between"><div><h6 class="mb-4 card-title">Customer Info</h6><h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6><p class="mb-1 text-default-500 text-sm">pauline@tailwick.com</p><p class="text-default-500 text-sm">+(78) 120 4843 4714</p></div><div class="btn bg-warning/20 text-info size-12 float-end"><img${ssrRenderAttr("src", unref(avatar4))} alt=""></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order-detail/components/Stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stat-CnOgCIAH.mjs.map
