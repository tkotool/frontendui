import { defineComponent, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import { s as sign } from './signature-CvwW5gwy.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import '@iconify/vue';
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
    usePageTitle("Payslip");
    const payslips = [
      {
        month: "Oct, 2023",
        salaryAmount: "$25,000",
        deductions: "$800",
        professionalTax: "$150",
        providentFund: "$500",
        netPayable: "$23,550",
        status: "Paid"
      },
      {
        month: "Nov, 2023",
        salaryAmount: "$25,000",
        deductions: "$800",
        professionalTax: "$150",
        providentFund: "$500",
        netPayable: "$23,550",
        status: "Paid"
      },
      {
        month: "Dec, 2023",
        salaryAmount: "$25,000",
        deductions: "$800",
        professionalTax: "$150",
        providentFund: "$500",
        netPayable: "$23,550",
        status: "Paid"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Payslip"
            }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-5xl w-full mx-auto"${_scopeId}><div class="card relative"${_scopeId}><div class="card-body"${_scopeId}><div class="absolute top-0 end-0 opacity-30"${_scopeId}></div><div class="text-center"${_scopeId}><h5 class="inline-block relative text-lg text-default-800 font-semibold"${_scopeId}> Salary Slip <span class="absolute start-0 end-0 -bottom-2 h-0.25 bg-gradient-to-r from-white via-primary to-white"${_scopeId}></span></h5></div><div class="mt-16 text-sm"${_scopeId}><p class="mb-2 text-default-500"${_scopeId}>Employee ID: <span class="font-semibold text-default-800"${_scopeId}>#TWE1001524</span></p><p class="mb-2 text-default-500"${_scopeId}>Employee Name: <span class="font-semibold text-default-800"${_scopeId}>Patricia Garcia</span></p><p class="mb-2 text-default-500"${_scopeId}>Experience: <span class="font-semibold text-default-800"${_scopeId}>2 Year</span></p><p class="text-default-500"${_scopeId}>Create Date: <span class="font-semibold text-default-800"${_scopeId}>08 Oct 2023</span></p></div><div class="flex flex-col mt-10"${_scopeId}><div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-default-200"${_scopeId}><thead class="bg-default-150"${_scopeId}><tr class="text-sm font-normal text-default-800 whitespace-nowrap"${_scopeId}><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Month</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Salary Amount</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Deductions(TDS)</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Professional Tax</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Provident Fund</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Net Payable</th><th scope="col" class="px-3.5 py-2.5 text-start"${_scopeId}>Status</th></tr></thead><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(payslips, (item, idx) => {
              _push2(`<tr class="text-default-800 font-normal"${_scopeId}><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.month)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.salaryAmount)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.deductions)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.professionalTax)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.providentFund)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.netPayable)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/20"${_scopeId}>${ssrInterpolate(item.status)}</span></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div><div class="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-5"${_scopeId}><div class="text-sm"${_scopeId}><p class="mb-2 text-default-500"${_scopeId}>For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.in.</p><p class="mb-2 text-default-500"${_scopeId}>Best Regards,</p><p class="mb-2 text-default-500"${_scopeId}>Themesdesign</p><p class="text-default-500"${_scopeId}>Founder &amp; CEO: <span class="font-semibold text-default-800"${_scopeId}>Paula Keenan</span></p></div><div class="flex flex-col lg:justify-end text-center lg:items-end items-center"${_scopeId}><img${ssrRenderAttr("src", unref(sign))} alt="" class="h-12"${_scopeId}><h6 class="text-default-800 font-semibold text-sm"${_scopeId}>Authorized Sign</h6></div></div></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Payslip"
              }),
              createVNode("div", { class: "lg:w-5xl w-full mx-auto" }, [
                createVNode("div", { class: "card relative" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "absolute top-0 end-0 opacity-30" }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h5", { class: "inline-block relative text-lg text-default-800 font-semibold" }, [
                        createTextVNode(" Salary Slip "),
                        createVNode("span", { class: "absolute start-0 end-0 -bottom-2 h-0.25 bg-gradient-to-r from-white via-primary to-white" })
                      ])
                    ]),
                    createVNode("div", { class: "mt-16 text-sm" }, [
                      createVNode("p", { class: "mb-2 text-default-500" }, [
                        createTextVNode("Employee ID: "),
                        createVNode("span", { class: "font-semibold text-default-800" }, "#TWE1001524")
                      ]),
                      createVNode("p", { class: "mb-2 text-default-500" }, [
                        createTextVNode("Employee Name: "),
                        createVNode("span", { class: "font-semibold text-default-800" }, "Patricia Garcia")
                      ]),
                      createVNode("p", { class: "mb-2 text-default-500" }, [
                        createTextVNode("Experience: "),
                        createVNode("span", { class: "font-semibold text-default-800" }, "2 Year")
                      ]),
                      createVNode("p", { class: "text-default-500" }, [
                        createTextVNode("Create Date: "),
                        createVNode("span", { class: "font-semibold text-default-800" }, "08 Oct 2023")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col mt-10" }, [
                      createVNode("div", { class: "overflow-x-auto" }, [
                        createVNode("div", { class: "min-w-full inline-block align-middle" }, [
                          createVNode("div", { class: "overflow-hidden" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-default-200" }, [
                              createVNode("thead", { class: "bg-default-150" }, [
                                createVNode("tr", { class: "text-sm font-normal text-default-800 whitespace-nowrap" }, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Month"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Salary Amount"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Deductions(TDS)"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Professional Tax"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Provident Fund"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Net Payable"),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3.5 py-2.5 text-start"
                                  }, "Status")
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-default-200" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(payslips, (item, idx) => {
                                  return createVNode("tr", {
                                    class: "text-default-800 font-normal",
                                    key: idx
                                  }, [
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.month), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.salaryAmount), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.deductions), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.professionalTax), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.providentFund), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.netPayable), 1),
                                    createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap" }, [
                                      createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/20" }, toDisplayString(item.status), 1)
                                    ])
                                  ]);
                                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(payroll)/payslip/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BGhstyM6.mjs.map
