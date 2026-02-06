import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './CreateForm-Cj_By_6u.mjs';
import { Icon } from '@iconify/vue';
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
import './useFlatpickr-DmUG61-x.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Add New");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Add New"
            }, null, _parent2, _scopeId));
            _push2(`<div class="lg:flex justify-between items-center mb-5"${_scopeId}><div${_scopeId}><h6 class="mb-1 card-title"${_scopeId}>New Invoice</h6></div><div class="flex flex-wrap items-center md:justify-end gap-2 md:mt-0 mt-4"${_scopeId}><button class="bg-default-200 text-default-500 text-nowrap btn border-0 hover:bg-default-300"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:eye",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(`Preview</button><button class="bg-info/90 text-white btn text-nowrap border-0 hover:bg-info" onclick="window.print()"${_scopeId}>Save Draft</button><button class="btn bg-primary text-white text-nowrap border-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:save",
              class: "size-4 text-white me-1"
            }, null, _parent2, _scopeId));
            _push2(`Save &amp; Download</button></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Add New"
              }),
              createVNode("div", { class: "lg:flex justify-between items-center mb-5" }, [
                createVNode("div", null, [
                  createVNode("h6", { class: "mb-1 card-title" }, "New Invoice")
                ]),
                createVNode("div", { class: "flex flex-wrap items-center md:justify-end gap-2 md:mt-0 mt-4" }, [
                  createVNode("button", { class: "bg-default-200 text-default-500 text-nowrap btn border-0 hover:bg-default-300" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:eye",
                      class: "size-4 me-1"
                    }),
                    createTextVNode("Preview")
                  ]),
                  createVNode("button", {
                    class: "bg-info/90 text-white btn text-nowrap border-0 hover:bg-info",
                    onclick: "window.print()"
                  }, "Save Draft"),
                  createVNode("button", { class: "btn bg-primary text-white text-nowrap border-0" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:save",
                      class: "size-4 text-white me-1"
                    }),
                    createTextVNode("Save & Download")
                  ])
                ])
              ]),
              createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/invoice/add/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eVQhpw1h.mjs.map
