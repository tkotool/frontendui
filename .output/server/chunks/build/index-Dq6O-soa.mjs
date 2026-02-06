import { defineComponent, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './UserTableHeader-Bp3V98FL.mjs';
import _sfc_main$3 from './UserData-C_6p_XVk.mjs';
import _sfc_main$4 from './Pagination-D612E_ig.mjs';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
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
import './avatar-2-BDMEXCZB.mjs';
import './avatar-4-VVt-Y7Qo.mjs';
import './avatar-6-Fu8xKLWl.mjs';
import './avatar-8-uqgcPDkb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Grid View");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Grid View"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Grid View"
              }),
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$3),
              createVNode(_sfc_main$4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="addUserModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="addUserModal-label"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="card w-full flex flex-col border border-default-200 shadow-2xs rounded-xl pointer-events-auto"><div class="card-header"><h3 id="addUserModal-label" class="font-semibold text-base text-default-800 dark:text-white">Add User</h3><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#addUserModal"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "card-body h-130",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}><label class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>User ID</label><input type="text" class="block w-full border-default-200 bg-default-100 rounded-md text-sm text-default-500 placeholder:text-default-400" placeholder="#TW1500004" disabled${_scopeId}></div><div class="mb-4"${_scopeId}><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Joining Date</label><input type="date" id="invoiceNo" class="form-input" placeholder="Invoice Date" data-provider="flatpickr" data-date-format="d M, Y"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Name</label><input type="text" class="form-input" placeholder="Enter Name"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Email</label><input type="text" class="form-input" placeholder="Enter email"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Phone Number</label><input type="text" class="form-input" placeholder="12345 67890"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Status</label><select type="text" class="form-input"${_scopeId}><option value="" selected${_scopeId}>Select Status</option><option value="Verified"${_scopeId}>Verified</option><option value="Waiting"${_scopeId}>Waiting</option><option value="Rejected"${_scopeId}>Rejected</option></select></div><div class="mb-4"${_scopeId}><label for="" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Location</label><input id="" type="text" class="form-input" placeholder="Location"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "inline-block mb-2 text-sm text-default-800 font-medium" }, "User ID"),
                createVNode("input", {
                  type: "text",
                  class: "block w-full border-default-200 bg-default-100 rounded-md text-sm text-default-500 placeholder:text-default-400",
                  placeholder: "#TW1500004",
                  disabled: ""
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "invoiceNo",
                  class: "inline-block mb-2 text-sm text-default-800 font-medium"
                }, "Joining Date"),
                createVNode("input", {
                  type: "date",
                  id: "invoiceNo",
                  class: "form-input",
                  placeholder: "Invoice Date",
                  "data-provider": "flatpickr",
                  "data-date-format": "d M, Y"
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "inline-block mb-2 text-sm text-default-800 font-medium" }, "Name"),
                createVNode("input", {
                  type: "text",
                  class: "form-input",
                  placeholder: "Enter Name"
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "inline-block mb-2 text-sm text-default-800 font-medium" }, "Email"),
                createVNode("input", {
                  type: "text",
                  class: "form-input",
                  placeholder: "Enter email"
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "inline-block mb-2 text-sm text-default-800 font-medium" }, "Phone Number"),
                createVNode("input", {
                  type: "text",
                  class: "form-input",
                  placeholder: "12345 67890"
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "inline-block mb-2 text-sm text-default-800 font-medium" }, "Status"),
                createVNode("select", {
                  type: "text",
                  class: "form-input"
                }, [
                  createVNode("option", {
                    value: "",
                    selected: ""
                  }, "Select Status"),
                  createVNode("option", { value: "Verified" }, "Verified"),
                  createVNode("option", { value: "Waiting" }, "Waiting"),
                  createVNode("option", { value: "Rejected" }, "Rejected")
                ])
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "",
                  class: "inline-block mb-2 text-sm text-default-800 font-medium"
                }, "Location"),
                createVNode("input", {
                  id: "",
                  type: "text",
                  class: "form-input",
                  placeholder: "Location"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-footer mt-4 flex gap-2 md:justify-end"><button class="bg-transparent text-danger btn border-0 hover:bg-danger/10">Cancel</button><button class="btn bg-primary text-white">Add Order</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/grid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dq6O-soa.mjs.map
