import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';
import { a as avatar7 } from './avatar-7-CbAcGjRM.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "topbar-item hs-dropdown [--auto-close:inside] relative inline-flex" }, _attrs))}><button type="button" class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:bell-ring",
        class: "size-4.5"
      }, null, _parent));
      _push(`<span class="absolute end-0 top-0 size-1.5 bg-primary/90 rounded-full"></span></button><div class="hs-dropdown-menu max-w-100 p-0" role="menu"><div class="p-4 border-b border-default-200"><div class="flex items-center gap-2"><h3 class="text-base text-default-800">Notifications</h3><span class="size-5 font-semibold bg-orange-500 rounded text-white flex items-center justify-center text-xs">15</span></div></div><nav class="flex gap-x-1 bg-default-150 p-2 border-b border-default-200" aria-label="Tabs" role="tablist" aria-orientation="horizontal"><button data-hs-tab="#tabsViewall" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600 active" aria-selected="true" aria-controls="tabsViewall" role="tab">View all</button><button data-hs-tab="#tabsMentions" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsMentions" role="tab">Mentions</button><button data-hs-tab="#tabsFollowers" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsFollowers" role="tab">Followers</button><button data-hs-tab="#tabsInvites" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsInvites" role="tab">Invites</button></nav>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-80",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="tabsViewall" role="tabpanel" aria-labelledby="tabsViewall-item"${_scopeId}><a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-default-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar3))} alt="" class="rounded-md"${_scopeId}></div></div><div class="flex justify-between w-full text-sm"${_scopeId}><div${_scopeId}><h6 class="mb-2 font-medium text-default-800"${_scopeId}><b${_scopeId}>@willie_passem</b> followed you</h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Wednesday 03:42 PM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> 4 sec </div></div></div></a><a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-yellow-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-md"${_scopeId}></div></div><div class="flex justify-between w-full"${_scopeId}><div class="text-sm"${_scopeId}><h6 class="mb-2 font-medium text-default-800"${_scopeId}><b${_scopeId}>@caroline_jessica</b> commented <br${_scopeId}>on your post</h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Wednesday 03:42 PM</span></p><p class="p-2 bg-default-50 text-default-500 mt-2 rounded"${_scopeId}>Amazing! Fast, to the point, professional and really amazing to work with them!!!</p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div${_scopeId}><div class="size-1.5 bg-primary rounded-full"${_scopeId}></div></div> 15 min </div></div></div></a><a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-red-100 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:shopping-bag",
              class: "size-5 text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-between gap-2 w-full"${_scopeId}><div${_scopeId}><h6 class="mb-1 font-medium text-default-800 text-sm"${_scopeId}> Successfully purchased a business plan for <span class="text-danger"${_scopeId}>$199.99</span></h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Monday 11:26 AM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> yesterday </div></div></div></a><a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150"${_scopeId}><div class="relative"${_scopeId}><div class="size-10 rounded-md bg-pink-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="rounded-md"${_scopeId}></div><div class="absolute text-orange-500 bottom-0 -end-0.5 text-base"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:heart",
              class: "size-3.5 fill-orange-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-between w-full"${_scopeId}><div${_scopeId}><h6 class="mb-1 font-medium text-default-800 text-sm"${_scopeId}><b${_scopeId}>@scott</b> liked your post</h6><p class="flex gap-1 items-center text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Thursday 06:59 AM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> 1 Week </div></div></div></a></div><div id="tabsMentions" class="hidden" role="tabpanel" aria-labelledby="tabsMentions-item"${_scopeId}><a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-yellow-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-md"${_scopeId}></div></div><div class="flex justify-between w-full"${_scopeId}><div class="text-sm"${_scopeId}><h6 class="mb-2 font-medium text-default-800"${_scopeId}><b${_scopeId}>@caroline_jessica</b> commented <br${_scopeId}>on your post</h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Wednesday 03:42 PM</span></p><p class="p-2 bg-default-50 text-default-500 mt-2 rounded"${_scopeId}>Amazing! Fast, to the point, professional and really amazing to work with them!!!</p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div${_scopeId}><div class="size-1.5 bg-primary rounded-full"${_scopeId}></div></div> 15 min </div></div></div></a><a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150"${_scopeId}><div class="relative"${_scopeId}><div class="size-10 rounded-md bg-pink-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="rounded-md"${_scopeId}></div><div class="absolute text-orange-500 bottom-0 -end-0.5 text-base"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:heart",
              class: "size-3.5 fill-orange-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-between w-full"${_scopeId}><div${_scopeId}><h6 class="mb-1 font-medium text-default-800 text-sm"${_scopeId}><b${_scopeId}>@scott</b> liked your post</h6><p class="flex gap-1 items-center text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Thursday 06:59 AM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> 1 Week </div></div></div></a></div><div id="tabsFollowers" class="hidden" role="tabpanel" aria-labelledby="tabsFollowers-item"${_scopeId}><a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-default-100"${_scopeId}><img${ssrRenderAttr("src", unref(avatar3))} alt="" class="rounded-md"${_scopeId}></div></div><div class="flex justify-between w-full text-sm"${_scopeId}><div${_scopeId}><h6 class="mb-2 font-medium text-default-800"${_scopeId}><b${_scopeId}>@willie_passem</b> followed you</h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Wednesday 03:42 PM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> 4 sec </div></div></div></a></div><div id="tabsInvites" class="hidden" role="tabpanel" aria-labelledby="tabsInvites-item"${_scopeId}><a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150"${_scopeId}><div${_scopeId}><div class="size-10 rounded-md bg-red-100 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:shopping-bag",
              class: "size-5 text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-between gap-2 w-full"${_scopeId}><div${_scopeId}><h6 class="mb-1 font-medium text-default-800 text-sm"${_scopeId}> Successfully purchased a business plan for <span class="text-danger"${_scopeId}>$199.99</span></h6><p class="flex items-center gap-1 text-default-500 text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:clock",
              class: "align-middle size-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Monday 11:26 AM</span></p></div><div${_scopeId}><div class="flex items-center gap-2 text-xs text-default-500"${_scopeId}><div class="w-1.5 h-1.5 bg-primary rounded-full"${_scopeId}></div> yesterday </div></div></div></a></div>`);
          } else {
            return [
              createVNode("div", {
                id: "tabsViewall",
                role: "tabpanel",
                "aria-labelledby": "tabsViewall-item"
              }, [
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-center hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-default-100" }, [
                      createVNode("img", {
                        src: unref(avatar3),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full text-sm" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-2 font-medium text-default-800" }, [
                        createVNode("b", null, "@willie_passem"),
                        createTextVNode(" followed you")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Wednesday 03:42 PM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" 4 sec ")
                      ])
                    ])
                  ])
                ]),
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-start hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-yellow-100" }, [
                      createVNode("img", {
                        src: unref(avatar5),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode("div", { class: "text-sm" }, [
                      createVNode("h6", { class: "mb-2 font-medium text-default-800" }, [
                        createVNode("b", null, "@caroline_jessica"),
                        createTextVNode(" commented "),
                        createVNode("br"),
                        createTextVNode("on your post")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Wednesday 03:42 PM")
                      ]),
                      createVNode("p", { class: "p-2 bg-default-50 text-default-500 mt-2 rounded" }, "Amazing! Fast, to the point, professional and really amazing to work with them!!!")
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "size-1.5 bg-primary rounded-full" })
                        ]),
                        createTextVNode(" 15 min ")
                      ])
                    ])
                  ])
                ]),
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-start hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-red-100 flex justify-center items-center" }, [
                      createVNode(unref(Icon), {
                        icon: "lucide:shopping-bag",
                        class: "size-5 text-danger"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between gap-2 w-full" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 font-medium text-default-800 text-sm" }, [
                        createTextVNode(" Successfully purchased a business plan for "),
                        createVNode("span", { class: "text-danger" }, "$199.99")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Monday 11:26 AM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" yesterday ")
                      ])
                    ])
                  ])
                ]),
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-center hover:bg-default-150"
                }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "size-10 rounded-md bg-pink-100" }, [
                      createVNode("img", {
                        src: unref(avatar7),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "absolute text-orange-500 bottom-0 -end-0.5 text-base" }, [
                      createVNode(unref(Icon), {
                        icon: "lucide:heart",
                        class: "size-3.5 fill-orange-500"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 font-medium text-default-800 text-sm" }, [
                        createVNode("b", null, "@scott"),
                        createTextVNode(" liked your post")
                      ]),
                      createVNode("p", { class: "flex gap-1 items-center text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Thursday 06:59 AM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" 1 Week ")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "tabsMentions",
                class: "hidden",
                role: "tabpanel",
                "aria-labelledby": "tabsMentions-item"
              }, [
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-start hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-yellow-100" }, [
                      createVNode("img", {
                        src: unref(avatar5),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode("div", { class: "text-sm" }, [
                      createVNode("h6", { class: "mb-2 font-medium text-default-800" }, [
                        createVNode("b", null, "@caroline_jessica"),
                        createTextVNode(" commented "),
                        createVNode("br"),
                        createTextVNode("on your post")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Wednesday 03:42 PM")
                      ]),
                      createVNode("p", { class: "p-2 bg-default-50 text-default-500 mt-2 rounded" }, "Amazing! Fast, to the point, professional and really amazing to work with them!!!")
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "size-1.5 bg-primary rounded-full" })
                        ]),
                        createTextVNode(" 15 min ")
                      ])
                    ])
                  ])
                ]),
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-center hover:bg-default-150"
                }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "size-10 rounded-md bg-pink-100" }, [
                      createVNode("img", {
                        src: unref(avatar7),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "absolute text-orange-500 bottom-0 -end-0.5 text-base" }, [
                      createVNode(unref(Icon), {
                        icon: "lucide:heart",
                        class: "size-3.5 fill-orange-500"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 font-medium text-default-800 text-sm" }, [
                        createVNode("b", null, "@scott"),
                        createTextVNode(" liked your post")
                      ]),
                      createVNode("p", { class: "flex gap-1 items-center text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Thursday 06:59 AM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" 1 Week ")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "tabsFollowers",
                class: "hidden",
                role: "tabpanel",
                "aria-labelledby": "tabsFollowers-item"
              }, [
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-center hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-default-100" }, [
                      createVNode("img", {
                        src: unref(avatar3),
                        alt: "",
                        class: "rounded-md"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between w-full text-sm" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-2 font-medium text-default-800" }, [
                        createVNode("b", null, "@willie_passem"),
                        createTextVNode(" followed you")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Wednesday 03:42 PM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" 4 sec ")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "tabsInvites",
                class: "hidden",
                role: "tabpanel",
                "aria-labelledby": "tabsInvites-item"
              }, [
                createVNode("a", {
                  href: "#",
                  class: "flex gap-3 p-4 items-start hover:bg-default-150"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "size-10 rounded-md bg-red-100 flex justify-center items-center" }, [
                      createVNode(unref(Icon), {
                        icon: "lucide:shopping-bag",
                        class: "size-5 text-danger"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between gap-2 w-full" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 font-medium text-default-800 text-sm" }, [
                        createTextVNode(" Successfully purchased a business plan for "),
                        createVNode("span", { class: "text-danger" }, "$199.99")
                      ]),
                      createVNode("p", { class: "flex items-center gap-1 text-default-500 text-xs" }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:clock",
                          class: "align-middle size-3.5"
                        }),
                        createVNode("span", null, "Monday 11:26 AM")
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-default-500" }, [
                        createVNode("div", { class: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        createTextVNode(" yesterday ")
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
      _push(`<div class="flex items-center justify-between p-4 border-t border-default-200"><a href="" class="text-sm font-medium text-default-900">Manage Notification</a><button type="button" class="btn btn-sm text-white bg-primary"> View All `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:move-right",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/topbar/components/NotificationDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NotificationDropdown-9jVU8SDl.mjs.map
