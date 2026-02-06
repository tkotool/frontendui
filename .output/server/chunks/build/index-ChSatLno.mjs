import { defineComponent, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
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
    usePageTitle("Payments");
    const { inputRef } = useFlatpickr({});
    const payments = [
      {
        id: "#TWP10021320",
        plan: "Regular License",
        date: "02 July, 2023",
        type: "PayPal",
        username: "Infra Teach",
        amount: 2403,
        status: "Paid",
        variant: "bg-success",
        textcolor: "bg-success/15 text-success"
      },
      {
        id: "#TWP10021321",
        plan: "Extended License",
        date: "08 Nov, 2023",
        type: "Credit Card",
        username: "Kim Broberg",
        amount: 1341,
        status: "Pending",
        variant: "bg-warning",
        textcolor: "bg-warning/15 text-warning"
      },
      {
        id: "#TWP10021322",
        plan: "Extended License",
        date: "11 Aug, 2023",
        type: "Bank Transfer",
        username: "Everett Moore",
        amount: 816.21,
        status: "Failed",
        variant: "bg-danger",
        textcolor: "bg-danger/15 text-danger"
      },
      {
        id: "#TWP10021323",
        plan: "Regular License",
        date: "20 Sep, 2023",
        type: "PayPal",
        username: "Omari Welch",
        amount: 1184,
        status: "Paid",
        variant: "bg-success",
        textcolor: "bg-success/15 text-success"
      },
      {
        id: "#TWP10021324",
        plan: "Regular License",
        date: "07 Oct, 2023",
        type: "Debit Card",
        username: "Susana Dooley",
        amount: 5463,
        status: "Paid",
        variant: "bg-success",
        textcolor: "bg-success/15 text-success"
      },
      {
        id: "#TWP10021325",
        plan: "Regular License",
        date: "18 Dec, 2023",
        type: "PayPal",
        username: "Paul Gerhold",
        amount: 3463,
        status: "Pending",
        variant: "bg-warning",
        textcolor: "bg-warning/15 text-warning"
      },
      {
        id: "#TWP10021326",
        plan: "Extended License",
        date: "21 Jan, 2024",
        type: "Bank Transfer",
        username: "Lucie Beahan",
        amount: 1543,
        status: "Failed",
        variant: "bg-danger",
        textcolor: "bg-danger/15 text-danger"
      },
      {
        id: "#TWP10021327",
        plan: "Regular License",
        date: "02 Feb, 2023",
        type: "PayPal",
        username: "Jose White",
        amount: 4177,
        status: "Paid",
        variant: "bg-success",
        textcolor: "bg-success/15 text-success"
      },
      {
        id: "#TWP10021328",
        plan: "Extended License",
        date: "11 Dec, 2023",
        type: "Debit Card",
        username: "Jonas Frederiksen",
        amount: 2307,
        status: "Pending",
        variant: "bg-warning",
        textcolor: "bg-warning/15 text-warning"
      },
      {
        id: "#TWP10021329",
        plan: "Extended License",
        date: "01 Jan, 2023",
        type: "PayPal",
        username: "Stephen Tillman",
        amount: 543.99,
        status: "Paid",
        variant: "bg-success",
        textcolor: "bg-success/15 text-success"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Payments"
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="relative"${_scopeId}><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."${_scopeId}><div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:search",
              class: "size-4 flex items-center text-default-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><input type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true"${_scopeId}></div><div${_scopeId}><select type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date"${_scopeId}><option value="Accepted"${_scopeId}>Failed</option><option value="Declined" selected${_scopeId}>Paid</option><option value="Expired"${_scopeId}>Pending</option></select></div></div><div class="flex flex-col"${_scopeId}><div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-default-200"${_scopeId}><thead class="bg-default-150"${_scopeId}><tr class="text-sm font-normal text-default-500"${_scopeId}><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Payment ID</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Membership Plan</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Date</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Payment Type</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Username</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Amount</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Status</th></tr></thead><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(payments, (item, idx) => {
              _push2(`<tr class="text-default-800 font-normal"${_scopeId}><td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary"${_scopeId}><a href="#"${_scopeId}>${ssrInterpolate(item.id)}</a></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.plan)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.date)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.type)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.username)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>$${ssrInterpolate(item.amount)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}><span class="${ssrRenderClass([item.textcolor, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}"${_scopeId}><span class="${ssrRenderClass([item.variant, "size-1.5 me-1 rounded-full inline-block"])}"${_scopeId}></span>${ssrInterpolate(item.status)}</span></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div><div class="card-footer"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>Showing <b${_scopeId}>8</b> of <b${_scopeId}>10</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"${_scopeId}><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-left",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>1</button><button type="button" class="btn size-7.5 bg-primary text-white"${_scopeId}>2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}> Next `);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-right",
              class: "size-4 ms-1"
            }, null, _parent2, _scopeId));
            _push2(`</button></nav></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Payments"
              }),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode("input", {
                        type: "email",
                        class: "form-input form-input-sm ps-9",
                        placeholder: "Search for...."
                      }),
                      createVNode("div", { class: "absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:search",
                          class: "size-4 flex items-center text-default-500"
                        })
                      ])
                    ]),
                    createVNode("input", {
                      ref_key: "inputRef",
                      ref: inputRef,
                      type: "text",
                      id: "dateRangeFilterInput",
                      class: "form-input form-input-sm",
                      placeholder: "Select date",
                      "data-provider": "flatpickr",
                      "data-date-format": "d M, Y",
                      "data-range-date": "true"
                    }, null, 512)
                  ]),
                  createVNode("div", null, [
                    createVNode("select", {
                      type: "text",
                      id: "dateRangeFilterInput",
                      class: "form-input form-input-sm",
                      placeholder: "Select date"
                    }, [
                      createVNode("option", { value: "Accepted" }, "Failed"),
                      createVNode("option", {
                        value: "Declined",
                        selected: ""
                      }, "Paid"),
                      createVNode("option", { value: "Expired" }, "Pending")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("div", { class: "min-w-full inline-block align-middle" }, [
                      createVNode("div", { class: "overflow-hidden" }, [
                        createVNode("table", { class: "min-w-full divide-y divide-default-200" }, [
                          createVNode("thead", { class: "bg-default-150" }, [
                            createVNode("tr", { class: "text-sm font-normal text-default-500" }, [
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Payment ID"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Membership Plan"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Date"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Payment Type"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Username"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Amount"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Status")
                            ])
                          ]),
                          createVNode("tbody", { class: "divide-y divide-default-200" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(payments, (item, idx) => {
                              return createVNode("tr", {
                                class: "text-default-800 font-normal",
                                key: idx
                              }, [
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm text-primary" }, [
                                  createVNode("a", { href: "#" }, toDisplayString(item.id), 1)
                                ]),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.plan), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.date), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.type), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.username), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, "$" + toDisplayString(item.amount), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, [
                                  createVNode("span", {
                                    class: ["inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium", item.textcolor]
                                  }, [
                                    createVNode("span", {
                                      class: ["size-1.5 me-1 rounded-full inline-block", item.variant]
                                    }, null, 2),
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ], 2)
                                ])
                              ]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card-footer" }, [
                    createVNode("p", { class: "text-default-500 text-sm" }, [
                      createTextVNode("Showing "),
                      createVNode("b", null, "8"),
                      createTextVNode(" of "),
                      createVNode("b", null, "10"),
                      createTextVNode(" Results")
                    ]),
                    createVNode("nav", {
                      class: "flex items-center gap-2",
                      "aria-label": "Pagination"
                    }, [
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:chevron-left",
                          class: "size-4 me-1"
                        }),
                        createTextVNode(" Prev")
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, "1"),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-primary text-white"
                      }, "2"),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, "3"),
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, [
                        createTextVNode(" Next "),
                        createVNode(unref(Icon), {
                          icon: "lucide:chevron-right",
                          class: "size-4 ms-1"
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(sales)/payments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ChSatLno.mjs.map
