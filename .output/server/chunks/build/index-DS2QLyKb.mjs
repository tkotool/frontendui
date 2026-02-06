import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { l as logo } from './logo-sm-RLKHF8Zf.mjs';
import { s as sign } from './signature-CvwW5gwy.mjs';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
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
    usePageTitle("Create Payslip");
    const { inputRef: fromRef } = useFlatpickr({});
    const { inputRef: toRef } = useFlatpickr({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Create Payslip"
            }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-5xl w-full mx-auto"${_scopeId}><div class="card relative"${_scopeId}><div class="card-body"${_scopeId}><div class="absolute top-0 end-0 opacity-30"${_scopeId}><img${ssrRenderAttr("src", unref(logo))} alt=""${_scopeId}></div><div class="text-center"${_scopeId}><h5 class="inline-block relative text-lg text-default-800 font-semibold"${_scopeId}> Salary Slip <span class="absolute start-0 end-0 -bottom-2 h-0.25 bg-gradient-to-r from-white via-primary to-white"${_scopeId}></span></h5></div><div class="mt-16 lg:max-w-md w-full"${_scopeId}><div class="mb-4"${_scopeId}><label for="employeeID" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Employee ID</label><input type="text" id="employeeID" class="form-input bg-default-100" value="#TWE1001524" disabled${_scopeId}></div><div class="mb-4"${_scopeId}><label for="employeeSelect" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Employee Name</label><select class="form-input"${_scopeId}><option value=""${_scopeId}>Select Employee</option><option value="Willie Torres"${_scopeId}>Willie Torres</option><option value="Patricia Garcia"${_scopeId}>Patricia Garcia</option><option value="Juliette Fecteau"${_scopeId}>Juliette Fecteau</option><option value="Thomas Hatfield"${_scopeId}>Thomas Hatfield</option><option value="Juliette Fecteau"${_scopeId}>Juliette Fecteau</option><option value="Nancy Reynolds"${_scopeId}>Nancy Reynolds</option><option value="Holly Kavanaugh"${_scopeId}>Holly Kavanaugh</option><option value="Jonas Frederiksen"${_scopeId}>Jonas Frederiksen</option></select></div><div class="mb-4"${_scopeId}><label for="ExperienceInput" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Experience</label><input type="text" id="ExperienceInput" class="form-input" placeholder="0.4 year"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="createDateInput" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Create Date</label><input type="text" id="createDateInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" readonly${_scopeId}></div></div><div class="mt-10 overflow-x-auto"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><thead class="bg-default-100 text-sm text-default-800"${_scopeId}><tr${_scopeId}><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Month</th><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Salary Amount</th><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Deductions(TDS)</th><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Professional Tax</th><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Provident Fund</th><th class="px-3.5 py-2.5 font-semibold"${_scopeId}>Net Payable</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td class="px-3.5 py-2.5"${_scopeId}><input type="text" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" readonly${_scopeId}></td><td class="px-3.5 py-2.5"${_scopeId}><input type="number" class="form-input" placeholder="$00.00"${_scopeId}></td><td class="px-3.5 py-2.5"${_scopeId}><input type="number" class="form-input" placeholder="$00.00"${_scopeId}></td><td class="px-3.5 py-2.5"${_scopeId}><input type="number" class="form-input" placeholder="$00.00"${_scopeId}></td><td class="px-3.5 py-2.5"${_scopeId}><input type="number" class="form-input" placeholder="$00.00"${_scopeId}></td><td class="px-3.5 py-2.5"${_scopeId}><input type="number" class="form-input" placeholder="$00.00"${_scopeId}></td></tr></tbody><tbody class="before:block before:h-4"${_scopeId}><tr${_scopeId}><td colspan="6"${_scopeId}><button type="button" class="btn bg-transparent border border-dashed border-primary text-primary hover:bg-primary/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:plus",
              class: "size-3 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Add Item </button></td></tr></tbody></table></div><div class="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-5"${_scopeId}><div class="text-sm"${_scopeId}><p class="mb-2 text-default-500"${_scopeId}>For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.in.</p><p class="mb-2 text-default-500"${_scopeId}>Best Regards,</p><p class="mb-2 text-default-500"${_scopeId}>Themesdesign</p><p class="text-default-500"${_scopeId}>Founder &amp; CEO: <span class="font-semibold text-default-800"${_scopeId}>Paula Keenan</span></p></div><div class="flex flex-col lg:justify-end text-center lg:items-end items-center"${_scopeId}><img${ssrRenderAttr("src", unref(sign))} alt="" class="h-12"${_scopeId}><h6 class="text-default-800 font-semibold text-sm"${_scopeId}>Authorized Sign</h6></div></div></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Create Payslip"
              }),
              createVNode("div", { class: "lg:w-5xl w-full mx-auto" }, [
                createVNode("div", { class: "card relative" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "absolute top-0 end-0 opacity-30" }, [
                      createVNode("img", {
                        src: unref(logo),
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h5", { class: "inline-block relative text-lg text-default-800 font-semibold" }, [
                        createTextVNode(" Salary Slip "),
                        createVNode("span", { class: "absolute start-0 end-0 -bottom-2 h-0.25 bg-gradient-to-r from-white via-primary to-white" })
                      ])
                    ]),
                    createVNode("div", { class: "mt-16 lg:max-w-md w-full" }, [
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "employeeID",
                          class: "inline-block mb-2 text-sm text-default-800 font-medium"
                        }, "Employee ID"),
                        createVNode("input", {
                          type: "text",
                          id: "employeeID",
                          class: "form-input bg-default-100",
                          value: "#TWE1001524",
                          disabled: ""
                        })
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "employeeSelect",
                          class: "inline-block mb-2 text-sm text-default-800 font-medium"
                        }, "Employee Name"),
                        createVNode("select", { class: "form-input" }, [
                          createVNode("option", { value: "" }, "Select Employee"),
                          createVNode("option", { value: "Willie Torres" }, "Willie Torres"),
                          createVNode("option", { value: "Patricia Garcia" }, "Patricia Garcia"),
                          createVNode("option", { value: "Juliette Fecteau" }, "Juliette Fecteau"),
                          createVNode("option", { value: "Thomas Hatfield" }, "Thomas Hatfield"),
                          createVNode("option", { value: "Juliette Fecteau" }, "Juliette Fecteau"),
                          createVNode("option", { value: "Nancy Reynolds" }, "Nancy Reynolds"),
                          createVNode("option", { value: "Holly Kavanaugh" }, "Holly Kavanaugh"),
                          createVNode("option", { value: "Jonas Frederiksen" }, "Jonas Frederiksen")
                        ])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "ExperienceInput",
                          class: "inline-block mb-2 text-sm text-default-800 font-medium"
                        }, "Experience"),
                        createVNode("input", {
                          type: "text",
                          id: "ExperienceInput",
                          class: "form-input",
                          placeholder: "0.4 year"
                        })
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "createDateInput",
                          class: "inline-block mb-2 text-sm text-default-800 font-medium"
                        }, "Create Date"),
                        createVNode("input", {
                          ref_key: "fromRef",
                          ref: fromRef,
                          type: "text",
                          id: "createDateInput",
                          class: "form-input",
                          placeholder: "Select date",
                          "data-provider": "flatpickr",
                          "data-date-format": "d M, Y",
                          readonly: ""
                        }, null, 512)
                      ])
                    ]),
                    createVNode("div", { class: "mt-10 overflow-x-auto" }, [
                      createVNode("table", { class: "w-full whitespace-nowrap" }, [
                        createVNode("thead", { class: "bg-default-100 text-sm text-default-800" }, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Month"),
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Salary Amount"),
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Deductions(TDS)"),
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Professional Tax"),
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Provident Fund"),
                            createVNode("th", { class: "px-3.5 py-2.5 font-semibold" }, "Net Payable")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                ref_key: "toRef",
                                ref: toRef,
                                type: "text",
                                class: "form-input",
                                placeholder: "Select date",
                                "data-provider": "flatpickr",
                                "data-date-format": "d M, Y",
                                readonly: ""
                              }, null, 512)
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                type: "number",
                                class: "form-input",
                                placeholder: "$00.00"
                              })
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                type: "number",
                                class: "form-input",
                                placeholder: "$00.00"
                              })
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                type: "number",
                                class: "form-input",
                                placeholder: "$00.00"
                              })
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                type: "number",
                                class: "form-input",
                                placeholder: "$00.00"
                              })
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5" }, [
                              createVNode("input", {
                                type: "number",
                                class: "form-input",
                                placeholder: "$00.00"
                              })
                            ])
                          ])
                        ]),
                        createVNode("tbody", { class: "before:block before:h-4" }, [
                          createVNode("tr", null, [
                            createVNode("td", { colspan: "6" }, [
                              createVNode("button", {
                                type: "button",
                                class: "btn bg-transparent border border-dashed border-primary text-primary hover:bg-primary/10"
                              }, [
                                createVNode(unref(Icon), {
                                  icon: "lucide:plus",
                                  class: "size-3 me-1"
                                }),
                                createTextVNode(" Add Item ")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid lg:grid-cols-2 grid-cols-1 mt-10 gap-5" }, [
                      createVNode("div", { class: "text-sm" }, [
                        createVNode("p", { class: "mb-2 text-default-500" }, "For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.in."),
                        createVNode("p", { class: "mb-2 text-default-500" }, "Best Regards,"),
                        createVNode("p", { class: "mb-2 text-default-500" }, "Themesdesign"),
                        createVNode("p", { class: "text-default-500" }, [
                          createTextVNode("Founder & CEO: "),
                          createVNode("span", { class: "font-semibold text-default-800" }, "Paula Keenan")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col lg:justify-end text-center lg:items-end items-center" }, [
                        createVNode("img", {
                          src: unref(sign),
                          alt: "",
                          class: "h-12"
                        }, null, 8, ["src"]),
                        createVNode("h6", { class: "text-default-800 font-semibold text-sm" }, "Authorized Sign")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(payroll)/create-payslip/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DS2QLyKb.mjs.map
