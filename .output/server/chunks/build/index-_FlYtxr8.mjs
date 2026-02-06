import { defineComponent, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    usePageTitle("Expenses");
    const { inputRef: fromRef } = useFlatpickr({});
    useFlatpickr({});
    const estimates = [
      { date: "02 July, 2023", item: "Mac System", purchasedBy: "HR", paidBy: "HR", amount: "$5,478" },
      { date: "08 Nov, 2023", item: "HP Desktop", purchasedBy: "Louisa Howe", paidBy: "HR", amount: "$4,342" },
      { date: "11 Aug, 2023", item: "i5 PC", purchasedBy: "Everett Moore", paidBy: "Admin", amount: "$8,327" },
      { date: "20 Sep, 2023", item: "Decoration", purchasedBy: "Omari Welch", paidBy: "HR", amount: "$563" },
      { date: "07 Oct, 2023", item: "Cake", purchasedBy: "HR", paidBy: "Susana Dooley", amount: "$148" },
      { date: "18 Dec, 2023", item: "Salary to Employees", purchasedBy: "Omari Welch", paidBy: "Paula Keenan", amount: "$4,500" },
      { date: "21 Jan, 2024", item: "Salary to Employees", purchasedBy: "Everett Moore", paidBy: "Paula Keenan", amount: "$3,000" },
      { date: "02 Feb, 2023", item: "HP & Lenovo Desktop", purchasedBy: "HR", paidBy: "HR", amount: "$4,177" },
      { date: "11 Dec, 2023", item: "Birthday Party", purchasedBy: "HR", paidBy: "HR", amount: "$2,307" },
      { date: "01 Jan, 2023", item: "Festival Decoration", purchasedBy: "Lucie Beahan", paidBy: "HR", amount: "$543.99" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Estimates"
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="relative"${_scopeId}><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."${_scopeId}><div class="absolute inset-y-0 start-0 flex items-center ps-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:search",
              class: "size-4 flex items-center text-default-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><input type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true"${_scopeId}></div><a href="#" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="sales-expenses-add" data-hs-overlay="#sales-expenses-add"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:plus",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Add Estimate </a></div><div class="flex flex-col"${_scopeId}><div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-default-200"${_scopeId}><thead class="bg-default-150"${_scopeId}><tr class="text-sm font-normal text-default-500 whitespace-nowrap"${_scopeId}><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Purchase Date</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Item</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Purchased By</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Paid By</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Amount</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Action</th></tr></thead><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(estimates, (item, idx) => {
              _push2(`<tr class="text-default-800 font-normal"${_scopeId}><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.date)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.item)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.purchasedBy)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.paidBy)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.amount)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:ellipsis",
                class: "iconify size-4"
              }, null, _parent2, _scopeId));
              _push2(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm" role="menu"${_scopeId}><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:edit",
                class: "size-3"
              }, null, _parent2, _scopeId));
              _push2(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:trash-2",
                class: "size-3"
              }, null, _parent2, _scopeId));
              _push2(` Delete </a></div></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div><div class="card-footer"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>Showing <b${_scopeId}>10</b> of <b${_scopeId}>25</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"${_scopeId}><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>`);
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
                title: "Estimates"
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
                      createVNode("div", { class: "absolute inset-y-0 start-0 flex items-center ps-3" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:search",
                          class: "size-4 flex items-center text-default-500"
                        })
                      ])
                    ]),
                    createVNode("input", {
                      ref_key: "fromRef",
                      ref: fromRef,
                      type: "text",
                      id: "dateRangeFilterInput",
                      class: "form-input form-input-sm lg:w-52 w-full",
                      placeholder: "Select date",
                      "data-provider": "flatpickr",
                      "data-date-format": "d M, Y",
                      "data-range-date": "true"
                    }, null, 512)
                  ]),
                  createVNode("a", {
                    href: "#",
                    class: "btn btn-sm bg-primary text-white",
                    "aria-haspopup": "dialog",
                    "aria-expanded": "false",
                    "aria-controls": "sales-expenses-add",
                    "data-hs-overlay": "#sales-expenses-add"
                  }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:plus",
                      class: "size-4 me-1"
                    }),
                    createTextVNode(" Add Estimate ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("div", { class: "min-w-full inline-block align-middle" }, [
                      createVNode("div", { class: "overflow-hidden" }, [
                        createVNode("table", { class: "min-w-full divide-y divide-default-200" }, [
                          createVNode("thead", { class: "bg-default-150" }, [
                            createVNode("tr", { class: "text-sm font-normal text-default-500 whitespace-nowrap" }, [
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Purchase Date"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Item"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Purchased By"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Paid By"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Amount"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Action")
                            ])
                          ]),
                          createVNode("tbody", { class: "divide-y divide-default-200" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(estimates, (item, idx) => {
                              return createVNode("tr", {
                                class: "text-default-800 font-normal",
                                key: idx
                              }, [
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.date), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.item), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.purchasedBy), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.paidBy), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.amount), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, [
                                  createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                                      "aria-haspopup": "menu",
                                      "aria-expanded": "false",
                                      "aria-label": "Dropdown",
                                      "hs-dropdown-placement": "bottom-end"
                                    }, [
                                      createVNode(unref(Icon), {
                                        icon: "lucide:ellipsis",
                                        class: "iconify size-4"
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm",
                                      role: "menu"
                                    }, [
                                      createVNode("a", {
                                        class: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                                        href: "#"
                                      }, [
                                        createVNode(unref(Icon), {
                                          icon: "lucide:edit",
                                          class: "size-3"
                                        }),
                                        createTextVNode(" Edit ")
                                      ]),
                                      createVNode("a", {
                                        class: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                                        href: "#"
                                      }, [
                                        createVNode(unref(Icon), {
                                          icon: "lucide:trash-2",
                                          class: "size-3"
                                        }),
                                        createTextVNode(" Delete ")
                                      ])
                                    ])
                                  ])
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
                      createVNode("b", null, "10"),
                      createTextVNode(" of "),
                      createVNode("b", null, "25"),
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
      _push(`<div id="sales-expenses-add" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="sales-expenses-add-label2"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto"><div class="card-header"><h3 id="sales-expenses-add-label2" class="font-bold text-default-800 text-base">Add Expense</h3><div><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#sales-expenses-add"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div><div class="card-body"><div class="mb-4"><label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Purchase Date</label><input type="text" id="publishDateTime" class="form-input" placeholder="Purchase Date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" required readonly></div><div class="mb-4"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Purchased By</label><input type="text" id="invoiceNo" class="form-input" placeholder="Purchased By  " required></div><div class="mb-4"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Paid By</label><input type="text" id="invoiceNo" class="form-input" placeholder="Paid By  " required></div><div class="mb-4"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Item</label><input type="text" id="invoiceNo" class="form-input" placeholder="Item title" required></div><div class="mb-4"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Amount</label><input type="number" id="invoiceNo" class="form-input" placeholder="$00.00" required></div></div><div class="card-footer mt-4 flex gap-2 justify-end"><button class="bg-transparent text-danger btn border-0 hover:bg-danger/10">Cancel</button><button class="text-white btn bg-primary">Add Expense</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(sales)/expenses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_FlYtxr8.mjs.map
