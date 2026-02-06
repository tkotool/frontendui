import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { u as user1, a as user2 } from './user-2-5dZEDRal.mjs';
import { u as user3 } from './user-3-uBIKIubb.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpcomingInterview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card z-10"><div class="card-header"><h6 class="card-title">Upcoming Interview</h6></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-98",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-body"${_scopeId}><div class="flex flex-col gap-3"${_scopeId}><div class="border rounded-md border-default-200"${_scopeId}><div class="flex justify-between items-center p-2 border-b border-default-200"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><div class="rounded-full size-10"${_scopeId}><img${ssrRenderAttr("src", unref(user1))} alt="" class="rounded-full"${_scopeId}></div><div class="text-sm"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold"${_scopeId}><a href="#"${_scopeId}>James Krogman</a></h6><p class="text-default-500"${_scopeId}>james@tailwick.com</p></div></div><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:ellipsis-vertical",
              class: "iconify size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-60 mt-2 p-2" role="menu"${_scopeId}><div class="flex flex-col gap-y-1 text-sm"${_scopeId}><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Overview </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Edit </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Delete </a></div></div></div></div><div class="p-2"${_scopeId}><div class="flex justify-between items-center gap-3 text-sm"${_scopeId}><div class="flex gap-3 items-center text-default-500"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>25 Nov</span></div><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="uppercase"${_scopeId}>02:41 pm</span></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-success/40 text-success"${_scopeId}>Confirm</span></div></div></div></div><div class="border rounded-md border-default-200"${_scopeId}><div class="flex justify-between items-center p-2 border-b border-default-200"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><div class="rounded-full size-10"${_scopeId}><img${ssrRenderAttr("src", unref(user2))} alt="" class="rounded-full"${_scopeId}></div><div class="text-sm"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold"${_scopeId}><a href="#"${_scopeId}>Michael Scott</a></h6><p class="text-default-500"${_scopeId}>michaelScott@tailwick.com</p></div></div><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:ellipsis-vertical",
              class: "iconify size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu"${_scopeId}><div class="flex flex-col gap-y-1 text-sm"${_scopeId}><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Overview </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Edit </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Delete </a></div></div></div></div><div class="p-2"${_scopeId}><div class="flex justify-between items-center gap-3 text-sm"${_scopeId}><div class="flex gap-3 items-center"${_scopeId}><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>05 Dec</span></div><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="uppercase"${_scopeId}>01:23 pm</span></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-primary/40 text-primary"${_scopeId}>Re-scheduled</span></div></div></div></div><div class="border rounded-md border-default-200"${_scopeId}><div class="flex justify-between items-center p-2 border-b border-default-200"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><div class="rounded-full size-10"${_scopeId}><img${ssrRenderAttr("src", unref(user3))} alt="" class="rounded-full"${_scopeId}></div><div class="text-sm"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold"${_scopeId}><a href="#"${_scopeId}>Denise Ledford</a></h6><p class="text-default-500"${_scopeId}>ledford@tailwick.com</p></div></div><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:ellipsis-vertical",
              class: "iconify size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu"${_scopeId}><div class="flex flex-col gap-y-1 text-sm"${_scopeId}><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Overview </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Edit </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Delete </a></div></div></div></div><div class="p-2"${_scopeId}><div class="flex justify-between items-center gap-3 text-sm"${_scopeId}><div class="flex gap-3 items-center"${_scopeId}><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}> 27 Nov</span></div><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="uppercase"${_scopeId}>11:59 pm</span></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-secondary/40 text-secondary"${_scopeId}>Scheduled</span></div></div></div></div><div class="border rounded-md border-default-200"${_scopeId}><div class="flex justify-between items-center p-2 border-b border-default-200"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><div class="rounded-full size-10"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-full"${_scopeId}></div><div${_scopeId}><h6 class="mb-1 text-default-800 font-semibold"${_scopeId}><a href="#"${_scopeId}>Gladys Smith</a></h6><p class="text-default-500"${_scopeId}>gap-4@tailwick.com</p></div></div><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:ellipsis-vertical",
              class: "iconify size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu"${_scopeId}><div class="flex flex-col gap-y-1 text-sm"${_scopeId}><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Overview </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Edit </a><a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""${_scopeId}> Delete </a></div></div></div></div><div class="p-2"${_scopeId}><div class="flex justify-between items-center gap-3 text-sm"${_scopeId}><div class="flex gap-3 items-center"${_scopeId}><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:calendar",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}> 07 Dec</span></div><div class="flex items-center text-default-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "size-4 me-1.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="uppercase"${_scopeId}>05:19 pm</span></div></div><div${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-danger/40 text-danger"${_scopeId}>Cancelled</span></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-body" }, [
                createVNode("div", { class: "flex flex-col gap-3" }, [
                  createVNode("div", { class: "border rounded-md border-default-200" }, [
                    createVNode("div", { class: "flex justify-between items-center p-2 border-b border-default-200" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "rounded-full size-10" }, [
                          createVNode("img", {
                            src: unref(user1),
                            alt: "",
                            class: "rounded-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("h6", { class: "mb-1 text-default-800 font-semibold" }, [
                            createVNode("a", { href: "#" }, "James Krogman")
                          ]),
                          createVNode("p", { class: "text-default-500" }, "james@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                        createVNode("button", {
                          type: "button",
                          class: "hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500",
                          "aria-haspopup": "menu",
                          "aria-expanded": "false",
                          "aria-label": "Dropdown",
                          "hs-dropdown-placement": "bottom-end"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:ellipsis-vertical",
                            class: "iconify size-4"
                          })
                        ]),
                        createVNode("div", {
                          class: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-60 mt-2 p-2",
                          role: "menu"
                        }, [
                          createVNode("div", { class: "flex flex-col gap-y-1 text-sm" }, [
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Overview "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Edit "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Delete ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("div", { class: "flex justify-between items-center gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3 items-center text-default-500" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:calendar",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", null, "25 Nov")
                          ]),
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:clock",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", { class: "uppercase" }, "02:41 pm")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-success/40 text-success" }, "Confirm")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border rounded-md border-default-200" }, [
                    createVNode("div", { class: "flex justify-between items-center p-2 border-b border-default-200" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "rounded-full size-10" }, [
                          createVNode("img", {
                            src: unref(user2),
                            alt: "",
                            class: "rounded-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("h6", { class: "mb-1 text-default-800 font-semibold" }, [
                            createVNode("a", { href: "#" }, "Michael Scott")
                          ]),
                          createVNode("p", { class: "text-default-500" }, "michaelScott@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                        createVNode("button", {
                          type: "button",
                          class: "hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500",
                          "aria-haspopup": "menu",
                          "aria-expanded": "false",
                          "aria-label": "Dropdown",
                          "hs-dropdown-placement": "bottom-end"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:ellipsis-vertical",
                            class: "iconify size-4"
                          })
                        ]),
                        createVNode("div", {
                          class: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2",
                          role: "menu"
                        }, [
                          createVNode("div", { class: "flex flex-col gap-y-1 text-sm" }, [
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Overview "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Edit "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Delete ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("div", { class: "flex justify-between items-center gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:calendar",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", null, "05 Dec")
                          ]),
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:clock",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", { class: "uppercase" }, "01:23 pm")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-primary/40 text-primary" }, "Re-scheduled")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border rounded-md border-default-200" }, [
                    createVNode("div", { class: "flex justify-between items-center p-2 border-b border-default-200" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "rounded-full size-10" }, [
                          createVNode("img", {
                            src: unref(user3),
                            alt: "",
                            class: "rounded-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("h6", { class: "mb-1 text-default-800 font-semibold" }, [
                            createVNode("a", { href: "#" }, "Denise Ledford")
                          ]),
                          createVNode("p", { class: "text-default-500" }, "ledford@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                        createVNode("button", {
                          type: "button",
                          class: "hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500",
                          "aria-haspopup": "menu",
                          "aria-expanded": "false",
                          "aria-label": "Dropdown",
                          "hs-dropdown-placement": "bottom-end"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:ellipsis-vertical",
                            class: "iconify size-4"
                          })
                        ]),
                        createVNode("div", {
                          class: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2",
                          role: "menu"
                        }, [
                          createVNode("div", { class: "flex flex-col gap-y-1 text-sm" }, [
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Overview "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Edit "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Delete ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("div", { class: "flex justify-between items-center gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:calendar",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", null, " 27 Nov")
                          ]),
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:clock",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", { class: "uppercase" }, "11:59 pm")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-secondary/40 text-secondary" }, "Scheduled")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border rounded-md border-default-200" }, [
                    createVNode("div", { class: "flex justify-between items-center p-2 border-b border-default-200" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "rounded-full size-10" }, [
                          createVNode("img", {
                            src: unref(avatar5),
                            alt: "",
                            class: "rounded-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", null, [
                          createVNode("h6", { class: "mb-1 text-default-800 font-semibold" }, [
                            createVNode("a", { href: "#" }, "Gladys Smith")
                          ]),
                          createVNode("p", { class: "text-default-500" }, "gap-4@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                        createVNode("button", {
                          type: "button",
                          class: "hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500",
                          "aria-haspopup": "menu",
                          "aria-expanded": "false",
                          "aria-label": "Dropdown",
                          "hs-dropdown-placement": "bottom-end"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:ellipsis-vertical",
                            class: "iconify size-4"
                          })
                        ]),
                        createVNode("div", {
                          class: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2",
                          role: "menu"
                        }, [
                          createVNode("div", { class: "flex flex-col gap-y-1 text-sm" }, [
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Overview "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Edit "),
                            createVNode("a", {
                              class: "py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                              href: ""
                            }, " Delete ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("div", { class: "flex justify-between items-center gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:calendar",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", null, " 07 Dec")
                          ]),
                          createVNode("div", { class: "flex items-center text-default-500" }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:clock",
                              class: "size-4 me-1.5"
                            }),
                            createVNode("span", { class: "uppercase" }, "05:19 pm")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-danger/40 text-danger" }, "Cancelled")
                        ])
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/UpcomingInterview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UpcomingInterview-CB0SZOhq.mjs.map
