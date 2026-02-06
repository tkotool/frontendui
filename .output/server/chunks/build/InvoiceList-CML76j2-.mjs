import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InvoiceList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-1 col-span-1 card print:hidden" }, _attrs))}><div class="sticky top-24"><div class="card-body"><h6 class="mb-4 card-title">Invoice List</h6><div class="flex items-center gap-2"><div class="relative w-full"><input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for..."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center fill-default-100 text-default-500"
      }, null, _parent));
      _push(`</div></div><div><button type="button" class="btn size-7.5 bg-info/15 text-primary hover:text-white hover:bg-sky-600">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:sliders-horizontal",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "overflow-x-auto h-150",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="#" class="block border-t p-5 bg-default-100 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090251</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Paula Keenan</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$873.96</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`21 Jan, 2024</button></div></div></div><div${_scopeId}><span class="text-warning bg-warning/20 rounded text-xs py-0.5 px-2.5"${_scopeId}>Unpaid</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090252</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Jaqueline Hammes</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$1,203.74</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`27 Oct, 2023</button></div></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"${_scopeId}>Paid</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090253</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Akeem Paucek</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$1,423.10</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`04 Feb, 2024</button></div></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"${_scopeId}>Paid</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090254</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Stephon Trantow</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$1,420.99</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`14 July, 2023</button></div></div></div><div${_scopeId}><span class="text-danger bg-danger/10 rounded text-xs py-0.5 px-2.5"${_scopeId}>Cancel</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090255</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Domenic Tromp</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$247.18</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`11 April, 2023</button></div></div></div><div${_scopeId}><span class="text-default-600 bg-default-200 rounded text-xs py-0.5 px-2.5"${_scopeId}>Refund</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090256</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Marie Prohaska</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$559.32</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`03 Aug, 2023</button></div></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"${_scopeId}>Paid</span></div></div></a><a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="w-full"${_scopeId}><h6 class="font-semibold text-sm text-default-700"${_scopeId}>#TW15090257</h6><div${_scopeId}><h6 class="mt-3 mb-2 text-base font-semibold text-default-800"${_scopeId}>Ethel Corwin</h6><div class="flex items-center justify-between gap-6"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>$2,147.65</p><button type="button" class="inline-flex text-sm items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar-clock",
              class: "size-4 text-default-500 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`15 Dec, 2024</button></div></div></div><div${_scopeId}><span class="text-warning bg-warning/10 rounded text-xs py-0.5 px-2.5"${_scopeId}>Unpaid</span></div></div></a>`);
          } else {
            return [
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 bg-default-100 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090251"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Paula Keenan"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$873.96"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("21 Jan, 2024")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-warning bg-warning/20 rounded text-xs py-0.5 px-2.5" }, "Unpaid")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090252"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Jaqueline Hammes"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$1,203.74"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("27 Oct, 2023")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success" }, "Paid")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090253"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Akeem Paucek"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$1,423.10"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("04 Feb, 2024")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success" }, "Paid")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090254"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Stephon Trantow"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$1,420.99"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("14 July, 2023")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-danger bg-danger/10 rounded text-xs py-0.5 px-2.5" }, "Cancel")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090255"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Domenic Tromp"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$247.18"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("11 April, 2023")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-default-600 bg-default-200 rounded text-xs py-0.5 px-2.5" }, "Refund")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090256"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Marie Prohaska"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$559.32"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("03 Aug, 2023")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success" }, "Paid")
                  ])
                ])
              ]),
              createVNode("a", {
                href: "#",
                class: "block border-t p-5 border-default-200 hover:bg-default-100 active"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("h6", { class: "font-semibold text-sm text-default-700" }, "#TW15090257"),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mt-3 mb-2 text-base font-semibold text-default-800" }, "Ethel Corwin"),
                      createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                        createVNode("p", { class: "text-default-500 text-sm" }, "$2,147.65"),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex text-sm items-center"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:calendar-clock",
                            class: "size-4 text-default-500 me-1.5"
                          }),
                          createTextVNode("15 Dec, 2024")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-warning bg-warning/10 rounded text-xs py-0.5 px-2.5" }, "Unpaid")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/invoice/list/components/InvoiceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=InvoiceList-CML76j2-.mjs.map
