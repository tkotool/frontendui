import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar7 } from './avatar-7-CbAcGjRM.mjs';

const avatar3 = "" + __buildAssetsURL("img-3.CeUwSgrY.jpg");
const avatar5 = "" + __buildAssetsURL("img-5.CgAVynZd.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full border-e border-default-200 rounded" }, _attrs))}><div class="card-body"><div class="gap-3 flex justify-between"><div class="flex gap-3.5 items-center"><button class="lg:hidden size-8 rounded-md flex justify-center items-center bg-default-100" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-left" data-hs-overlay="#hs-offcanvas-left">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevrons-left",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button><div class="rounded-full size-10 bg-default-100"><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="h-10 rounded-full"></div><div><h6 class="text-default-800 mb-1 font-bold text-sm">William Heineman</h6><p class="text-xs text-default-500">NextJS Developer</p></div></div><div class="flex gap-3"><button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:phone",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:video",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:panel-right-open",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-[calc(100vh-340px)]",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-body bg-default-50"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}><div class="flex gap-3 items-end"${_scopeId}><a href="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a><div class="p-4 card text-default-700 text-sm"${_scopeId}>Sure, I have my pen and paper ready.</div></div><div class="flex gap-3 justify-end items-end"${_scopeId}><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>Great. Please read the notes of our last meeting for us.</div><a href="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a></div><div class="flex gap-3 items-end"${_scopeId}><div${_scopeId}><a href="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a></div><div class="flex flex-col gap-3"${_scopeId}><div class="w-92 p-4 card"${_scopeId}><div class="text-default-700 text-sm"${_scopeId}>Okay. First, we talked about the budget for next year.</div><div class="grid grid-cols-3 gap-4 mt-4"${_scopeId}><a href=""${_scopeId}><img${ssrRenderAttr("src", unref(avatar3))} alt="" class="rounded-md"${_scopeId}></a><a href=""${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-md"${_scopeId}></a></div></div><div class="w-77 p-4 card text-default-700 text-sm"${_scopeId}>I will budget is getting smaller every year.</div><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>Second, we talked about the new products we are going to selling.</div><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.</div></div></div><div class="flex gap-3 justify-end items-end"${_scopeId}><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>Sorry, William. O.K. We have a few things to talk about today. would you like to give your report.</div><a href="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a></div><div class="flex gap-3 items-end"${_scopeId}><a href="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar7))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year.</div></div><div class="flex gap-3 justify-end items-end"${_scopeId}><div class="w-92 p-4 card text-default-700 text-sm"${_scopeId}>Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone.</div><a href="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="object-cover rounded-full h-9"${_scopeId}></a></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-body bg-default-50" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex gap-3 items-end" }, [
                    createVNode("a", {
                      href: "#",
                      class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                    }, [
                      createVNode("img", {
                        src: unref(avatar7),
                        alt: "",
                        class: "object-cover rounded-full h-9"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "p-4 card text-default-700 text-sm" }, "Sure, I have my pen and paper ready.")
                  ]),
                  createVNode("div", { class: "flex gap-3 justify-end items-end" }, [
                    createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "Great. Please read the notes of our last meeting for us."),
                    createVNode("a", {
                      href: "",
                      class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                    }, [
                      createVNode("img", {
                        src: unref(avatar1),
                        alt: "",
                        class: "object-cover rounded-full h-9"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-3 items-end" }, [
                    createVNode("div", null, [
                      createVNode("a", {
                        href: "",
                        class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                      }, [
                        createVNode("img", {
                          src: unref(avatar7),
                          alt: "",
                          class: "object-cover rounded-full h-9"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", { class: "w-92 p-4 card" }, [
                        createVNode("div", { class: "text-default-700 text-sm" }, "Okay. First, we talked about the budget for next year."),
                        createVNode("div", { class: "grid grid-cols-3 gap-4 mt-4" }, [
                          createVNode("a", { href: "" }, [
                            createVNode("img", {
                              src: unref(avatar3),
                              alt: "",
                              class: "rounded-md"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("a", { href: "" }, [
                            createVNode("img", {
                              src: unref(avatar5),
                              alt: "",
                              class: "rounded-md"
                            }, null, 8, ["src"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "w-77 p-4 card text-default-700 text-sm" }, "I will budget is getting smaller every year."),
                      createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "Second, we talked about the new products we are going to selling."),
                      createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.")
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-3 justify-end items-end" }, [
                    createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "Sorry, William. O.K. We have a few things to talk about today. would you like to give your report."),
                    createVNode("a", {
                      href: "",
                      class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                    }, [
                      createVNode("img", {
                        src: unref(avatar1),
                        alt: "",
                        class: "object-cover rounded-full h-9"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-3 items-end" }, [
                    createVNode("a", {
                      href: "",
                      class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                    }, [
                      createVNode("img", {
                        src: unref(avatar7),
                        alt: "",
                        class: "object-cover rounded-full h-9"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year.")
                  ]),
                  createVNode("div", { class: "flex gap-3 justify-end items-end" }, [
                    createVNode("div", { class: "w-92 p-4 card text-default-700 text-sm" }, "Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone."),
                    createVNode("a", {
                      href: "",
                      class: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200"
                    }, [
                      createVNode("img", {
                        src: unref(avatar1),
                        alt: "",
                        class: "object-cover rounded-full h-9"
                      }, null, 8, ["src"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-body"><div class="flex gap-2 items-center"><input type="text" class="form-input w-full" placeholder="Type your message here..."><div class="flex items-center gap-2"><button class="btn size-9 bg-danger/10 text-danger hover:bg-danger hover:text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mic",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button class="btn size-9 bg-primary/10 text-primary hover:bg-primary hover:text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:image",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button class="btn bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:send",
        class: "size-4"
      }, null, _parent));
      _push(`Send</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/chat/components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-kjOTdM-b.mjs.map
