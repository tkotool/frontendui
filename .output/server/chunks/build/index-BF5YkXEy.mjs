import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import { defineComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './ShopingCart-CXlp7bqk.mjs';
import _sfc_main$3 from './OrderSummary-bpoHZNuu.mjs';
import { Icon } from '@iconify/vue';
import { d as deleteIcon } from './delete-CsuzHDd1.mjs';
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
import './img-08-BpiT8Rl3.mjs';
import './img-04-DeVAzRtv.mjs';
import './img-01-2zFQ0P8h.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Shopping Cart");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = PageTitle;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageTitle, {
              subtitle: "Menu",
              title: "Shopping Cart"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid lg:grid-cols-4 grid-cols-1 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</div><div id="cart-item-delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="cart-item-delete-modal-label"${_scopeId}><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"${_scopeId}><div class="w-full flex flex-col bg-card border border-default-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 px-6 py-8 relative"${_scopeId}><div class="absolute top-3 end-3"${_scopeId}><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#cart-item-delete-modal"${_scopeId}><span class="sr-only"${_scopeId}>Close</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:x",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><h3 class="font-semibold text-base text-default-800 dark:text-white text-center"${_scopeId}><img${ssrRenderAttr("src", unref(deleteIcon))} alt="" class="size-12 mx-auto"${_scopeId}><div class="mt-5 text-center"${_scopeId}><h5 class="mb-1 text-lg font-semibold text-default-800"${_scopeId}>Are you sure?</h5><p class="text-default-500 text-sm font-normal"${_scopeId}>Are you certain you want to delete this record?</p><div class="mt-5 flex gap-2 md:justify-center"${_scopeId}><button data-hs-overlay="#cart-item-delete-modal" class="py-2 px-4 text-[13px] rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-red-50" aria-label="Close"${_scopeId}>Cancel</button><button class="btn bg-danger text-white"${_scopeId}>Yes,Delete It!</button></div></div></h3></div></div></div>`);
          } else {
            return [
              createVNode(_component_PageTitle, {
                subtitle: "Menu",
                title: "Shopping Cart"
              }),
              createVNode("div", { class: "grid lg:grid-cols-4 grid-cols-1 gap-5" }, [
                createVNode(_sfc_main$2),
                createVNode(_sfc_main$3)
              ]),
              createVNode("div", {
                id: "cart-item-delete-modal",
                class: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
                role: "dialog",
                tabindex: "-1",
                "aria-labelledby": "cart-item-delete-modal-label"
              }, [
                createVNode("div", { class: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center" }, [
                  createVNode("div", { class: "w-full flex flex-col bg-card border border-default-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 px-6 py-8 relative" }, [
                    createVNode("div", { class: "absolute top-3 end-3" }, [
                      createVNode("button", {
                        type: "button",
                        class: "size-5 text-default-800",
                        "aria-label": "Close",
                        "data-hs-overlay": "#cart-item-delete-modal"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close"),
                        createVNode(unref(Icon), {
                          icon: "lucide:x",
                          class: "size-5"
                        })
                      ])
                    ]),
                    createVNode("h3", { class: "font-semibold text-base text-default-800 dark:text-white text-center" }, [
                      createVNode("img", {
                        src: unref(deleteIcon),
                        alt: "",
                        class: "size-12 mx-auto"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "mt-5 text-center" }, [
                        createVNode("h5", { class: "mb-1 text-lg font-semibold text-default-800" }, "Are you sure?"),
                        createVNode("p", { class: "text-default-500 text-sm font-normal" }, "Are you certain you want to delete this record?"),
                        createVNode("div", { class: "mt-5 flex gap-2 md:justify-center" }, [
                          createVNode("button", {
                            "data-hs-overlay": "#cart-item-delete-modal",
                            class: "py-2 px-4 text-[13px] rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-red-50",
                            "aria-label": "Close"
                          }, "Cancel"),
                          createVNode("button", { class: "btn bg-danger text-white" }, "Yes,Delete It!")
                        ])
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BF5YkXEy.mjs.map
