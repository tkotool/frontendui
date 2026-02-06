import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import ShoppingInformation from './ShoppingInformation-fFyDHfMm.mjs';
import _sfc_main$2 from './Delivery-BNVfixzQ.mjs';
import _sfc_main$3 from './PaymentInformation-CC_Mvo_Q.mjs';
import _sfc_main$4 from './OrdersSummary-0q4dFgyx.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import './server.mjs';
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
import './index-CrQieO5U.mjs';
import './index-C8a9Gwrn.mjs';
import './index-CgrDkO63.mjs';
import 'simplebar-vue';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './logo-sm-RLKHF8Zf.mjs';
import './AppMenu-wIVvB5t3.mjs';
import './data-DUV_uuTB.mjs';
import './MenuItem-DRf2TIbN.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import './MenuItemWithChildren-BV2E1r8c.mjs';
import './index-0bc88ocl.mjs';
import './CustomizerToggler-CfuET3W0.mjs';
import './LanguageDropdown-BpE4DRuo.mjs';
import './arebian-CDXbpKKs.mjs';
import './NotificationDropdown-9jVU8SDl.mjs';
import './avatar-3-DffBtZtQ.mjs';
import './avatar-5-DeNxQLba.mjs';
import './avatar-7-CbAcGjRM.mjs';
import './ThemeToggler-gK4JAuSI.mjs';
import './UserProfile-jxbohxoO.mjs';
import './avatar-1-so5nc_yQ.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './delivery-1-CtLUxAfZ.mjs';
import './img-08-BpiT8Rl3.mjs';
import './img-04-DeVAzRtv.mjs';
import './img-01-2zFQ0P8h.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Checkout");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Checkout"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex gap-1.25 px-4 py-3 mb-5 text-teal-700 border border-teal-200 rounded-md bg-teal-50"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:shopping-bag",
              class: "size-4 text-teal-700"
            }, null, _parent2, _scopeId));
            _push2(`  <p class="text-13xl"${_scopeId}>The minimum order requirement is <b${_scopeId}>$1,800</b>. To meet this threshold, please add additional products with a combined value of <b${_scopeId}>$300</b>.</p></div><div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5"${_scopeId}><div class="lg:col-span-2 col-span-1"${_scopeId}><div class="flex justify-between gap-5 mb-5 items-center"${_scopeId}><a href="#" class="flex gap-1.25 text-sm items-center text-primary"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-left",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(` Back to Cart </a><button type="button" class="text-[13px] py-2 px-4 rounded bg-primary text-white transition-all duration-300 hover:bg-blue-600 inline-flex items-center"${_scopeId}> Place Order `);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-right",
              class: "size-4 ms-1"
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
            _push2(ssrRenderComponent(ShoppingInformation, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Checkout"
              }),
              createVNode("div", { class: "flex gap-1.25 px-4 py-3 mb-5 text-teal-700 border border-teal-200 rounded-md bg-teal-50" }, [
                createVNode(unref(Icon), {
                  icon: "lucide:shopping-bag",
                  class: "size-4 text-teal-700"
                }),
                createTextVNode("  "),
                createVNode("p", { class: "text-13xl" }, [
                  createTextVNode("The minimum order requirement is "),
                  createVNode("b", null, "$1,800"),
                  createTextVNode(". To meet this threshold, please add additional products with a combined value of "),
                  createVNode("b", null, "$300"),
                  createTextVNode(".")
                ])
              ]),
              createVNode("div", { class: "grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5" }, [
                createVNode("div", { class: "lg:col-span-2 col-span-1" }, [
                  createVNode("div", { class: "flex justify-between gap-5 mb-5 items-center" }, [
                    createVNode("a", {
                      href: "#",
                      class: "flex gap-1.25 text-sm items-center text-primary"
                    }, [
                      createVNode(unref(Icon), {
                        icon: "lucide:chevron-left",
                        class: "size-4"
                      }),
                      createTextVNode(" Back to Cart ")
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "text-[13px] py-2 px-4 rounded bg-primary text-white transition-all duration-300 hover:bg-blue-600 inline-flex items-center"
                    }, [
                      createTextVNode(" Place Order "),
                      createVNode(unref(Icon), {
                        icon: "lucide:move-right",
                        class: "size-4 ms-1"
                      })
                    ])
                  ]),
                  createVNode(ShoppingInformation),
                  createVNode(_sfc_main$2),
                  createVNode(_sfc_main$3)
                ]),
                createVNode(_sfc_main$4)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DfJ0ydy4.mjs.map
