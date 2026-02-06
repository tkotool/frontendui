import { defineComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './Table-C07aVaiw.mjs';
import { Icon } from '@iconify/vue';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Holidays");
    const { inputRef } = useFlatpickr({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Holidays"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<div id="holidaysLeaveDeleteModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="holidaysLeaveDeleteModal-label"${_scopeId}><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center"${_scopeId}><div class="w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative"${_scopeId}><div class="absolute top-3 end-3"${_scopeId}><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#holidaysLeaveDeleteModal"${_scopeId}><span class="sr-only"${_scopeId}>Close</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:x",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><h3 class="font-semibold text-base text-default-800 text-center"${_scopeId}><img${ssrRenderAttr("src", unref(deleteIcon))} alt="" class="size-12 mx-auto"${_scopeId}><div class="mt-5 text-center"${_scopeId}><h5 class="mb-1 text-lg font-semibold text-default-800"${_scopeId}>Are you sure?</h5><p class="text-default-500 text-sm font-normal"${_scopeId}>Are you certain you want to delete this record?</p><div class="mt-5 flex gap-2 justify-center"${_scopeId}><button class="btn text-danger bg-transparent hover:bg-danger/10" aria-label="Close"${_scopeId}>Cancel</button><button class="btn bg-danger text-white"${_scopeId}>Yes,Delete It!</button></div></div></h3></div></div></div><div id="holidaysLeaveDeleteModal2" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="holidaysLeaveDeleteModal-label2"${_scopeId}><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"${_scopeId}><div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto"${_scopeId}><div class="card-header"${_scopeId}><h3 id="holidaysLeaveDeleteModal-label2" class="card-title"${_scopeId}>Add Holiday</h3><div${_scopeId}><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#holidaysLeaveDeleteModal2"${_scopeId}><span class="sr-only"${_scopeId}>Close</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:x",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><div class="card-body"${_scopeId}><div class="grid grid-cols-1 gap-4 lg:grid-cols-12"${_scopeId}><div class="lg:col-span-12"${_scopeId}><label for="typeSelect" class="inline-block mb-2 text-base font-medium"${_scopeId}>Type</label><select id="typeSelect" name="typeSelect" class="form-input" data-choices data-choices-search-false${_scopeId}><option value="Gazetted Holiday"${_scopeId}>Gazetted Holiday</option><option value="Observance"${_scopeId}>Observance</option><option value="Restricted Holiday" selected${_scopeId}>Restricted Holiday</option><option value="Season"${_scopeId}>Season</option></select></div><div class="lg:col-span-12"${_scopeId}><label for="holidayInput" class="inline-block mb-2 text-base font-medium"${_scopeId}>Holiday Name</label><input type="text" id="holidayInput" class="form-input bg-transparent border-default-200 focus:outline-none focus:border-primary placeholder:text-default-400" placeholder="Holiday name"${_scopeId}></div><div class="lg:col-span-12"${_scopeId}><label for="holidayDateInput" class="inline-block mb-2 text-base font-medium"${_scopeId}>Date</label><input type="text" placeholder="Select Date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly class="form-input"${_scopeId}></div></div></div><div class="flex justify-end items-center gap-x-2 py-3 px-4"${_scopeId}><button class="btn border-0 text-sm rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-danger/10" aria-label="Close"${_scopeId}>Cancel</button><button type="button" class="btn bg-primary text-white"${_scopeId}>Add Holiday</button></div></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Holidays"
              }),
              createVNode(_sfc_main$2),
              createVNode("div", {
                id: "holidaysLeaveDeleteModal",
                class: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
                role: "dialog",
                tabindex: "-1",
                "aria-labelledby": "holidaysLeaveDeleteModal-label"
              }, [
                createVNode("div", { class: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center" }, [
                  createVNode("div", { class: "w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative" }, [
                    createVNode("div", { class: "absolute top-3 end-3" }, [
                      createVNode("button", {
                        type: "button",
                        class: "size-5 text-default-800",
                        "aria-label": "Close",
                        "data-hs-overlay": "#holidaysLeaveDeleteModal"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close"),
                        createVNode(unref(Icon), {
                          icon: "lucide:x",
                          class: "size-5"
                        })
                      ])
                    ]),
                    createVNode("h3", { class: "font-semibold text-base text-default-800 text-center" }, [
                      createVNode("img", {
                        src: unref(deleteIcon),
                        alt: "",
                        class: "size-12 mx-auto"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "mt-5 text-center" }, [
                        createVNode("h5", { class: "mb-1 text-lg font-semibold text-default-800" }, "Are you sure?"),
                        createVNode("p", { class: "text-default-500 text-sm font-normal" }, "Are you certain you want to delete this record?"),
                        createVNode("div", { class: "mt-5 flex gap-2 justify-center" }, [
                          createVNode("button", {
                            class: "btn text-danger bg-transparent hover:bg-danger/10",
                            "aria-label": "Close"
                          }, "Cancel"),
                          createVNode("button", { class: "btn bg-danger text-white" }, "Yes,Delete It!")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "holidaysLeaveDeleteModal2",
                class: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
                role: "dialog",
                tabindex: "-1",
                "aria-labelledby": "holidaysLeaveDeleteModal-label2"
              }, [
                createVNode("div", { class: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center" }, [
                  createVNode("div", { class: "w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", {
                        id: "holidaysLeaveDeleteModal-label2",
                        class: "card-title"
                      }, "Add Holiday"),
                      createVNode("div", null, [
                        createVNode("button", {
                          type: "button",
                          class: "size-5 text-default-800",
                          "aria-label": "Close",
                          "data-hs-overlay": "#holidaysLeaveDeleteModal2"
                        }, [
                          createVNode("span", { class: "sr-only" }, "Close"),
                          createVNode(unref(Icon), {
                            icon: "lucide:x",
                            class: "size-5"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-4 lg:grid-cols-12" }, [
                        createVNode("div", { class: "lg:col-span-12" }, [
                          createVNode("label", {
                            for: "typeSelect",
                            class: "inline-block mb-2 text-base font-medium"
                          }, "Type"),
                          createVNode("select", {
                            id: "typeSelect",
                            name: "typeSelect",
                            class: "form-input",
                            "data-choices": "",
                            "data-choices-search-false": ""
                          }, [
                            createVNode("option", { value: "Gazetted Holiday" }, "Gazetted Holiday"),
                            createVNode("option", { value: "Observance" }, "Observance"),
                            createVNode("option", {
                              value: "Restricted Holiday",
                              selected: ""
                            }, "Restricted Holiday"),
                            createVNode("option", { value: "Season" }, "Season")
                          ])
                        ]),
                        createVNode("div", { class: "lg:col-span-12" }, [
                          createVNode("label", {
                            for: "holidayInput",
                            class: "inline-block mb-2 text-base font-medium"
                          }, "Holiday Name"),
                          createVNode("input", {
                            type: "text",
                            id: "holidayInput",
                            class: "form-input bg-transparent border-default-200 focus:outline-none focus:border-primary placeholder:text-default-400",
                            placeholder: "Holiday name"
                          })
                        ]),
                        createVNode("div", { class: "lg:col-span-12" }, [
                          createVNode("label", {
                            for: "holidayDateInput",
                            class: "inline-block mb-2 text-base font-medium"
                          }, "Date"),
                          createVNode("input", {
                            ref_key: "inputRef",
                            ref: inputRef,
                            type: "text",
                            placeholder: "Select Date",
                            "data-provider": "flatpickr",
                            "data-date-format": "d M, Y",
                            "data-range-date": "true",
                            readonly: "",
                            class: "form-input"
                          }, null, 512)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end items-center gap-x-2 py-3 px-4" }, [
                      createVNode("button", {
                        class: "btn border-0 text-sm rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-danger/10",
                        "aria-label": "Close"
                      }, "Cancel"),
                      createVNode("button", {
                        type: "button",
                        class: "btn bg-primary text-white"
                      }, "Add Holiday")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/holidays/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DkFsoSiV.mjs.map
