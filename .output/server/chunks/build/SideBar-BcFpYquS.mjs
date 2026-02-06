import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { l as logo } from './logo-sm-RLKHF8Zf.mjs';
import { u as user1, a as user2 } from './user-2-5dZEDRal.mjs';
import { u as user3 } from './user-3-uBIKIubb.mjs';
import { i as img4 } from './user-4-DKGiaxzZ.mjs';
import { a as avatar10 } from './avatar-10-DjVkpQI6.mjs';
import { a as avatar8 } from './avatar-8-uqgcPDkb.mjs';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:border-e border-default-200" }, _attrs))}><div id="hs-offcanvas-left" class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-96 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60" role="dialog" tabindex="-1" aria-label="Sidebar"><div class="card rounded-none shadow-none relative flex flex-row h-full max-h-full overflow-hidden divide-x divide-default-200"><div class="card-body flex flex-col justify-between"><a href=""><img${ssrRenderAttr("src", unref(logo))} alt="logo" class="h-8 mx-auto"></a><div class="flex flex-col items-center gap-6 pt-10"><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:messages-square",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:user-square",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:bot",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:user-2",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:scroll-text",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><div class="flex flex-col items-center gap-4"><button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:settings",
        class: "size-5"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown relative"><button type="button" class="hs-dropdown-toggle flex justify-center items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="top-end"><img${ssrRenderAttr("src", unref(avatar1))} alt="avatar" class="rounded-md bg-pink-500/10 size-12 object-cover"></button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" href=""> Logout </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" href=""> Switch Account </a></div></div></div></div><div class="w-80"><div class="card-body"><div class="flex justify-between"><div class="flex gap-3 items-center"><h6 class="card-title">Chats</h6></div><button class="size-8 btn bg-default-150">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-4 text-default-500 hover:text-primary"
      }, null, _parent));
      _push(`</button></div><div class="mt-5 relative"><input type="email" class="ps-11 block w-full form-input form-input-sm" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "lg:h-[calc(100vh-310px)] h-[calc(100vh-125px)]",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-5 mb-1"${_scopeId}><p class="mb-1 text-default-500 text-sm"${_scopeId}>Recent Chats</p></div><a href="" class="flex gap-3 py-2 px-4 bg-default-200"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"${_scopeId}></span></div><div class="flex-grow"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Marie Prohaska</h6><p class="text-xs truncate text-default-500"${_scopeId}>I will purchase it for support</p></div><small class="text-xs text-default-500"${_scopeId}>2min ago</small></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(user1))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger"${_scopeId}></span></div><div class="flex-grow"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Kara Miller</h6><p class="text-xs truncate text-default-500"${_scopeId}>Hey, how&#39;s it going?</p></div><small class="text-xs text-default-500"${_scopeId}>02:57 PM</small></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"${_scopeId}></span></div><div class="flex-grow"${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Mark Walton</h6><p class="text-xs truncate text-default-500"${_scopeId}>Hey, how&#39;s it going?</p></div><small class="text-xs text-default-500"${_scopeId}>Yesterday</small></a><div class="px-5 pt-2"${_scopeId}><p class="mb-1 text-default-500 text-sm"${_scopeId}>All Conversion</p></div><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(user2))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Aurore Maggio</h6><p class="text-xs truncate text-default-500"${_scopeId}>React Developer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}> LP <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Mark Walton</h6><p class="text-xs truncate text-default-500"${_scopeId}>UI / UX Designer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Daniel Miller</h6><p class="text-xs truncate text-default-500"${_scopeId}>ASP.Net Developer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(user3))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Jaqueline Hammes</h6><p class="text-xs truncate text-default-500"${_scopeId}>Angular Developer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar8))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Andrea Pesina</h6><p class="text-xs truncate text-default-500"${_scopeId}>Laravel Developer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(avatar10))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Bernard Pereira</h6><p class="text-xs truncate text-default-500"${_scopeId}>Web Designer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(img4))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>William Jones</h6><p class="text-xs truncate text-default-500"${_scopeId}>Project Manager</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}><img${ssrRenderAttr("src", unref(user2))} alt="" class="rounded-full w-9 h-9"${_scopeId}><span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Aurore Maggio</h6><p class="text-xs truncate text-default-500"${_scopeId}>React Developer</p></div></a><a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150"${_scopeId}><div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200"${_scopeId}> LP <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"${_scopeId}></span></div><div class=""${_scopeId}><h6 class="mb-1 text-default-800 font-semibold text-sm"${_scopeId}>Mark Walton</h6><p class="text-xs truncate text-default-500"${_scopeId}>UI / UX Designer</p></div></a>`);
          } else {
            return [
              createVNode("div", { class: "px-5 mb-1" }, [
                createVNode("p", { class: "mb-1 text-default-500 text-sm" }, "Recent Chats")
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 bg-default-200"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(avatar5),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500" })
                ]),
                createVNode("div", { class: "flex-grow" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Marie Prohaska"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "I will purchase it for support")
                ]),
                createVNode("small", { class: "text-xs text-default-500" }, "2min ago")
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(user1),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger" })
                ]),
                createVNode("div", { class: "flex-grow" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Kara Miller"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Hey, how's it going?")
                ]),
                createVNode("small", { class: "text-xs text-default-500" }, "02:57 PM")
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(avatar1),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500" })
                ]),
                createVNode("div", { class: "flex-grow" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Mark Walton"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Hey, how's it going?")
                ]),
                createVNode("small", { class: "text-xs text-default-500" }, "Yesterday")
              ]),
              createVNode("div", { class: "px-5 pt-2" }, [
                createVNode("p", { class: "mb-1 text-default-500 text-sm" }, "All Conversion")
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(user2),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Aurore Maggio"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "React Developer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createTextVNode(" LP "),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Mark Walton"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "UI / UX Designer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(avatar5),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Daniel Miller"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "ASP.Net Developer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(user3),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Jaqueline Hammes"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Angular Developer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(avatar8),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Andrea Pesina"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Laravel Developer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(avatar10),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Bernard Pereira"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Web Designer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(img4),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "William Jones"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "Project Manager")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createVNode("img", {
                    src: unref(user2),
                    alt: "",
                    class: "rounded-full w-9 h-9"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Aurore Maggio"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "React Developer")
                ])
              ]),
              createVNode("a", {
                href: "",
                class: "flex gap-3 py-2 px-4 hover:bg-default-150"
              }, [
                createVNode("div", { class: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200" }, [
                  createTextVNode(" LP "),
                  createVNode("span", { class: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500" })
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h6", { class: "mb-1 text-default-800 font-semibold text-sm" }, "Mark Walton"),
                  createVNode("p", { class: "text-xs truncate text-default-500" }, "UI / UX Designer")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/chat/components/SideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SideBar-BcFpYquS.mjs.map
