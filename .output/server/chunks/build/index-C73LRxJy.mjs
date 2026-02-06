import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './Sellers-hWj3QJlO.mjs';
import _sfc_main$3 from './Pagination-E3DhALrY.mjs';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Sellers");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Sellers"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-between gap-3 flex-wrap items-center mb-5"${_scopeId}><div class="relative"${_scopeId}><input type="email" class="ps-11 form-input" placeholder="Search for..."${_scopeId}><div class="absolute inset-y-0 start-0 flex items-center ps-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:search",
              class: "size-4 flex items-center text-default-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><button type="button" class="btn bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="ecommerce-sellers-add" data-hs-overlay="#ecommerce-sellers-add"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:plus",
              class: "size-4 ms-1"
            }, null, _parent2, _scopeId));
            _push2(` Add Seller </button></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Sellers"
              }),
              createVNode("div", { class: "flex justify-between gap-3 flex-wrap items-center mb-5" }, [
                createVNode("div", { class: "relative" }, [
                  createVNode("input", {
                    type: "email",
                    class: "ps-11 form-input",
                    placeholder: "Search for..."
                  }),
                  createVNode("div", { class: "absolute inset-y-0 start-0 flex items-center ps-3" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:search",
                      class: "size-4 flex items-center text-default-500"
                    })
                  ])
                ]),
                createVNode("button", {
                  type: "button",
                  class: "btn bg-primary text-white",
                  "aria-haspopup": "dialog",
                  "aria-expanded": "false",
                  "aria-controls": "ecommerce-sellers-add",
                  "data-hs-overlay": "#ecommerce-sellers-add"
                }, [
                  createVNode(unref(Icon), {
                    icon: "lucide:plus",
                    class: "size-4 ms-1"
                  }),
                  createTextVNode(" Add Seller ")
                ])
              ]),
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/sellers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C73LRxJy.mjs.map
