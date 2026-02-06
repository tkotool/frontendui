import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';
import { emails } from './data-CV52AJk1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MailBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))}><div class="card-header"><div class="flex items-center gap-4.5"><button class="lg:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="mailBoxSidebar" aria-label="Toggle navigation" data-hs-overlay="#mailBoxSidebar">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:align-left",
        class: "size-6"
      }, null, _parent));
      _push(`</button><input id="checkAll" type="checkbox" class="form-checkbox checked:bg-primary"><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:refresh-cw",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><div class="w-px h-5 bg-default-200"></div><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:archive-restore",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:alert-octagon",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><div class="w-px h-5 bg-default-200"></div><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mail",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:tag",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:clock",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button></div><div class="flex items-center gap-2"><div class="relative flex-1"><input type="email" class="form-input form-input-sm ps-11" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 text-default-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" href=""> Show more message </a><a class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" href=""> Important &amp; Unread </a><a class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" href=""> Hide section when empty </a><a class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" href=""> All Delete </a></div></div></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-166",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="w-full mail-list"${_scopeId}><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(unref(emails), (item, idx) => {
              _push2(`<tr class="${ssrRenderClass([item.class, "text-sm"])}" data-hs-overlay="#emailOverview"${_scopeId}><td class="py-2.5 ps-5"${_scopeId}><div class="flex items-center gap-3 h-5"${_scopeId}><input id="checkbox-all" type="checkbox" class="form-checkbox checked:bg-primary"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:star",
                class: "iconify size-4 text-default-500 hover:text-yellow-500"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:step-forward",
                class: "iconify size-4 text-default-500 hover:text-yellow-500"
              }, null, _parent2, _scopeId));
              _push2(`</div></td><td class="px-3.5 py-2.5 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.sender)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.subject)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.time)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("div", { class: "min-w-full inline-block align-middle" }, [
                  createVNode("div", { class: "overflow-hidden" }, [
                    createVNode("table", { class: "w-full mail-list" }, [
                      createVNode("tbody", { class: "divide-y divide-default-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(emails), (item, idx) => {
                          return openBlock(), createBlock("tr", {
                            class: [item.class, "text-sm"],
                            "data-hs-overlay": "#emailOverview",
                            key: idx
                          }, [
                            createVNode("td", { class: "py-2.5 ps-5" }, [
                              createVNode("div", { class: "flex items-center gap-3 h-5" }, [
                                createVNode("input", {
                                  id: "checkbox-all",
                                  type: "checkbox",
                                  class: "form-checkbox checked:bg-primary"
                                }),
                                createVNode(unref(Icon), {
                                  icon: "lucide:star",
                                  class: "iconify size-4 text-default-500 hover:text-yellow-500"
                                }),
                                createVNode(unref(Icon), {
                                  icon: "lucide:step-forward",
                                  class: "iconify size-4 text-default-500 hover:text-yellow-500"
                                })
                              ])
                            ]),
                            createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap" }, toDisplayString(item.sender), 1),
                            createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap" }, toDisplayString(item.subject), 1),
                            createVNode("td", { class: "px-3.5 py-2.5 whitespace-nowrap" }, toDisplayString(item.time), 1)
                          ], 2);
                        }), 128))
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
      _push(`<div id="emailOverview" class="card shadow-none hs-overlay [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 hidden translate-x-full absolute top-0 end-0 transition-all duration-300 transform h-full max-w-full w-full z-80 bg-card" role="dialog" tabindex="-1" aria-labelledby="emailOverview-label"><div class="card-header py-4"><button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-default-100 text-default-800 hover:bg-default-150 focus:outline-hidden focus:bg-default-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#emailOverview"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevrons-left",
        class: "size-4"
      }, null, _parent));
      _push(`</button><div class="flex-grow"><h3 id="emailOverview-label" class="font-bold text-default-800 mb-1.5">How Custom Software Can Solve Your Business Challenges</h3><p class="text-default-500 dark:text-zink-200"><a href="#!">infrateach@tailwick.com</a> (Aug 6, 2023, 9:04 PM)</p></div><div class="flex gap-3 shrink-0"><a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-primary dark:hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:archive-restore",
        class: "size-4"
      }, null, _parent));
      _push(`</a><a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:printer",
        class: "size-4"
      }, null, _parent));
      _push(`</a><a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-yellow-500 dark:hover:text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4"
      }, null, _parent));
      _push(`</a><a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-danger dark:hover:text-danger">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-4"
      }, null, _parent));
      _push(`</a></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "max-h-150",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 space-y-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-full h-9"${_scopeId}></div><div class="grow"${_scopeId}><div class="flex items-center"${_scopeId}><div class="grow"${_scopeId}><h6${_scopeId}>Infra Teach</h6><p class="text-default-500 dark:text-zink-200"${_scopeId}><a href="#!"${_scopeId}>infrateach@tailwick.com</a></p></div><div class="shrink-0"${_scopeId}>Aug 6, 2023, 9:04 PM</div></div><div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600"${_scopeId}><p class="mb-2 last:mb-0"${_scopeId}>Hi,</p><p class="mb-2 last:mb-0"${_scopeId}>Custom software solutions are tailor-made software applications designed to meet the unique needs of a specific business or organization. Unlike off-the-shelf software, which offers a standardized solution for a broad range of users, custom software is precisely crafted to align with the workflows, processes, and objectives of a particular business.</p><p class="mb-2 last:mb-0"${_scopeId}>The key advantage of custom software lies in its ability to be scalable and flexible. It can evolve alongside the business, accommodating changing requirements and supporting expansion. By adapting to the specific needs of the organization, custom software empowers businesses to gain a competitive edge, differentiate themselves in the market, and deliver enhanced experiences to their customers.</p><p class="mb-2 last:mb-0"${_scopeId}>Thank You</p></div></div></div><div class="flex gap-3"${_scopeId}><div class="relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-default-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="rounded-full h-9"${_scopeId}></div><div class="grow"${_scopeId}><div class="flex items-center"${_scopeId}><div class="grow"${_scopeId}><h6${_scopeId}>Me</h6><p class="text-default-500 dark:text-zink-200"${_scopeId}><a href="#!"${_scopeId}>paulakeenan@tailwick.com</a></p></div><div class="shrink-0"${_scopeId}>07 Nov, 2023, 10:14 PM</div></div><div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600"${_scopeId}><p class="mb-2 last:mb-0"${_scopeId}>Hi,</p><p class="mb-2 last:mb-0"${_scopeId}>I hope this email finds you well. Let me start by saying that I am a big fan of your work and it has inspired me to push myself beyond what I thought were my limits!</p><p class="mb-2 last:mb-0"${_scopeId}>After taking a good look at [target company] I realize that you could improve in [improvement area]. I have helped many others improve in the same area and I‘d be more than happy to talk with you about it!</p><p class="mb-2 last:mb-0"${_scopeId}>Would you be available for a quick call to discuss how our [product/service] could help you?</p><p class="mb-2 last:mb-0"${_scopeId}>Regards,</p><p class="mb-2 last:mb-0"${_scopeId}>Themesdesign</p></div></div></div><div class="flex gap-3"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-full h-9"${_scopeId}></div><div class="grow"${_scopeId}><div class="flex items-center"${_scopeId}><div class="grow"${_scopeId}><h6${_scopeId}>Infra Teach</h6><p class="text-default-500 dark:text-zink-200"${_scopeId}><a href="#!"${_scopeId}>infrateach@tailwick.com</a></p></div><div class="shrink-0"${_scopeId}>07 Nov, 2023, 10:42 PM</div></div><div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600"${_scopeId}><p class="mb-2 last:mb-0"${_scopeId}>Hello, Themesdesign</p><p class="mb-2 last:mb-0"${_scopeId}>You are probably very busy, I totally understand that!</p><p class="mb-2 last:mb-0"${_scopeId}>It would be great to hear back from you. So, please let me know when you find some time.</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 space-y-6" }, [
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600" }, [
                    createVNode("img", {
                      src: unref(avatar5),
                      alt: "",
                      class: "rounded-full h-9"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "grow" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "grow" }, [
                        createVNode("h6", null, "Infra Teach"),
                        createVNode("p", { class: "text-default-500 dark:text-zink-200" }, [
                          createVNode("a", { href: "#!" }, "infrateach@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "shrink-0" }, "Aug 6, 2023, 9:04 PM")
                    ]),
                    createVNode("div", { class: "p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600" }, [
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Hi,"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Custom software solutions are tailor-made software applications designed to meet the unique needs of a specific business or organization. Unlike off-the-shelf software, which offers a standardized solution for a broad range of users, custom software is precisely crafted to align with the workflows, processes, and objectives of a particular business."),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "The key advantage of custom software lies in its ability to be scalable and flexible. It can evolve alongside the business, accommodating changing requirements and supporting expansion. By adapting to the specific needs of the organization, custom software empowers businesses to gain a competitive edge, differentiate themselves in the market, and deliver enhanced experiences to their customers."),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Thank You")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode("div", { class: "relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-default-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200" }, [
                    createVNode("img", {
                      src: unref(avatar1),
                      alt: "",
                      class: "rounded-full h-9"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "grow" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "grow" }, [
                        createVNode("h6", null, "Me"),
                        createVNode("p", { class: "text-default-500 dark:text-zink-200" }, [
                          createVNode("a", { href: "#!" }, "paulakeenan@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "shrink-0" }, "07 Nov, 2023, 10:14 PM")
                    ]),
                    createVNode("div", { class: "p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600" }, [
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Hi,"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "I hope this email finds you well. Let me start by saying that I am a big fan of your work and it has inspired me to push myself beyond what I thought were my limits!"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "After taking a good look at [target company] I realize that you could improve in [improvement area]. I have helped many others improve in the same area and I‘d be more than happy to talk with you about it!"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Would you be available for a quick call to discuss how our [product/service] could help you?"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Regards,"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Themesdesign")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600" }, [
                    createVNode("img", {
                      src: unref(avatar5),
                      alt: "",
                      class: "rounded-full h-9"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "grow" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "grow" }, [
                        createVNode("h6", null, "Infra Teach"),
                        createVNode("p", { class: "text-default-500 dark:text-zink-200" }, [
                          createVNode("a", { href: "#!" }, "infrateach@tailwick.com")
                        ])
                      ]),
                      createVNode("div", { class: "shrink-0" }, "07 Nov, 2023, 10:42 PM")
                    ]),
                    createVNode("div", { class: "p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600" }, [
                      createVNode("p", { class: "mb-2 last:mb-0" }, "Hello, Themesdesign"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "You are probably very busy, I totally understand that!"),
                      createVNode("p", { class: "mb-2 last:mb-0" }, "It would be great to hear back from you. So, please let me know when you find some time.")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-footer py-4"><div class="grow"><input type="text" id="inputText" class="form-input" placeholder="Enter Message" required autocomplete="off"></div><div class="flex gap-2 shrink-0"><button type="button" class="btn hover:bg-default-100">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mic",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="btn hover:bg-default-100">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:image",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="btn bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:send",
        class: "inline-block mr-1 align-middle size-4"
      }, null, _parent));
      _push(` <span class="align-middle">Send</span></button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/email/components/MailBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MailBox-C-ZssqVg.mjs.map
