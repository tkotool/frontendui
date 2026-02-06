import { defineComponent, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
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
    usePageTitle("Estimates");
    const { inputRef } = useFlatpickr({});
    const estimates = [
      { id: "#TWE20015420", clientName: "Infra Teach", estimateBy: "HR", estimateDate: "02 July, 2023", expiryDate: "05 July, 2023", amount: "$2,403", status: "Accepted", color: "bg-success/15 text-success" },
      { id: "#TWE20015421", clientName: "Themesdesign", estimateBy: "Admin", estimateDate: "08 Nov, 2023", expiryDate: "08 Nov, 2023", amount: "$1,749", status: "Declined", color: "bg-danger/10 text-danger" },
      { id: "#TWE20015422", clientName: "Judil Fashion", estimateBy: "Admin", estimateDate: "11 Aug, 2023", expiryDate: "03 Aug, 2023", amount: "$816", status: "Expired", color: "bg-warning/15 text-warning" },
      { id: "#TWE20015423", clientName: "4xM Infotech", estimateBy: "HR", estimateDate: "20 Sep, 2023", expiryDate: "21 Sep, 2023", amount: "$1,184", status: "Accepted", color: "bg-success/15 text-success" },
      { id: "#TWE20015424", clientName: "Digitech Galaxy", estimateBy: "HR", estimateDate: "07 Oct, 2023", expiryDate: "09 Oct, 2023", amount: "$5,463", status: "Accepted", color: "bg-success/15 text-success" },
      { id: "#TWE20015425", clientName: "Zoetic Fashion", estimateBy: "HR", estimateDate: "18 Dec, 2023", expiryDate: "20 Dec, 2023", amount: "$3,463", status: "Declined", color: "bg-danger/10 text-danger" }
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
            _push2(`<div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="relative"${_scopeId}><input type="email" class="form-input form-input-sm ps-11" placeholder="Search for...."${_scopeId}><div class="absolute inset-y-0 start-0 flex items-center ps-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:search",
              class: "size-4 flex items-center text-default-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><select type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date"${_scopeId}><option value="Accepted" selected${_scopeId}>Accepted</option><option value="Declined"${_scopeId}>Declined</option><option value="Expired"${_scopeId}>Expired</option></select><input type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true"${_scopeId}></div><a href="#" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="sales-estimates-add" data-hs-overlay="#sales-estimates-add"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:plus",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Add Estimate </a></div><div class="flex flex-col"${_scopeId}><div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full"${_scopeId}><thead class="bg-default-150"${_scopeId}><tr class="text-sm font-normal text-default-500"${_scopeId}><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Estimate Number</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Client Name</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Estimate By</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Estimate Date</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Expiry Date</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Amount</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Status</th><th scope="col" class="px-3.5 py-3 text-start"${_scopeId}>Action</th></tr></thead><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(estimates, (item, idx) => {
              _push2(`<tr class="text-default-800 font-normal"${_scopeId}><td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary"${_scopeId}><a href="#"${_scopeId}>${ssrInterpolate(item.id)}</a></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.clientName)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.estimateBy)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.estimateDate)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.expiryDate)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(item.amount)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}><span class="${ssrRenderClass([item.color, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"${_scopeId}><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
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
            _push2(`<!--]--></tbody></table></div></div></div><div class="card-footer"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>Showing <b${_scopeId}>6</b> of <b${_scopeId}>8</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"${_scopeId}><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-left",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>1</button><button type="button" class="btn size-7.5 bg-primary text-white"${_scopeId}>2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}> Next `);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevreon-right",
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
                        class: "form-input form-input-sm ps-11",
                        placeholder: "Search for...."
                      }),
                      createVNode("div", { class: "absolute inset-y-0 start-0 flex items-center ps-3" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:search",
                          class: "size-4 flex items-center text-default-500"
                        })
                      ])
                    ]),
                    createVNode("select", {
                      type: "text",
                      id: "dateRangeFilterInput",
                      class: "form-input form-input-sm lg:w-52 w-full",
                      placeholder: "Select date"
                    }, [
                      createVNode("option", {
                        value: "Accepted",
                        selected: ""
                      }, "Accepted"),
                      createVNode("option", { value: "Declined" }, "Declined"),
                      createVNode("option", { value: "Expired" }, "Expired")
                    ]),
                    createVNode("input", {
                      ref_key: "inputRef",
                      ref: inputRef,
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
                    "aria-controls": "sales-estimates-add",
                    "data-hs-overlay": "#sales-estimates-add"
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
                        createVNode("table", { class: "min-w-full" }, [
                          createVNode("thead", { class: "bg-default-150" }, [
                            createVNode("tr", { class: "text-sm font-normal text-default-500" }, [
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Estimate Number"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Client Name"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Estimate By"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Estimate Date"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Expiry Date"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Amount"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 text-start"
                              }, "Status"),
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
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm text-primary" }, [
                                  createVNode("a", { href: "#" }, toDisplayString(item.id), 1)
                                ]),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.clientName), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.estimateBy), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.estimateDate), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.expiryDate), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, toDisplayString(item.amount), 1),
                                createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap text-sm" }, [
                                  createVNode("span", {
                                    class: ["inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium", item.color]
                                  }, toDisplayString(item.status), 3)
                                ]),
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
                      createVNode("b", null, "6"),
                      createTextVNode(" of "),
                      createVNode("b", null, "8"),
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
                          icon: "lucide:chevreon-right",
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
      _push(`<div id="sales-estimates-add" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto"><div class="card-header"><h3 class="font-bold text-default-800 text-base">Add Estimate</h3><div><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#sales-estimates-add"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div><div class="card-body"><div class="grid grid-cols-2 gap-4"><div class="col-span-2"><label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">User ID</label><input id="" type="text" class="form-input" placeholder="#TW1500004" disabled></div><div class="col-span-2"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Client Name</label><input type="text" id="invoiceNo" class="form-input" placeholder="Client name"></div><div class="col-span-2"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Estimate By</label><select type="date" id="invoiceNo" class="form-input"><option value="">Admin</option><option value="">Hr</option></select></div><div class="col-span-1"><label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Estimate Date</label><input type="text" id="publishDateTime" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" readonly></div><div class="col-span-1 mb-4"><label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Expiry Date</label><input type="text" id="publishDateTime" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" readonly></div><div class="col-span-2"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Amount</label><input type="number" id="invoiceNo" class="form-input" placeholder="$00.00"></div><div class="col-span-2"><label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Status</label><select type="date" id="invoiceNo" class="form-input"><option value="">Accepted</option><option value="">Declined</option><option value="">Expired</option></select></div></div></div><div class="card-footer flex gap-2 justify-end"><button data-hs-overlay="#sales-estimates-add" class="btn border-0 text-danger bg-transparent hover:bg-red-50">Cancel</button><button class="text-white btn bg-primary">Add Estimate</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(sales)/estimates/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DEJQL2wR.mjs.map
