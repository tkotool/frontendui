import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import simplebar from 'simplebar-vue';
import { a as avatar6 } from './avatar-6-Fu8xKLWl.mjs';
import { Icon } from '@iconify/vue';

const dash = "" + __buildAssetsURL("hr-dashboard.Xzw-mpDJ.png");
const brithday = "" + __buildAssetsURL("birthday.kmBbpwpd.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RecentPayroll",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="relative mb-5 bg-gradient-to-r to-primary/50 from-transparent rounded-md shadow-md"><div style="${ssrRenderStyle({ background: `url(${unref(dash)})` })}" class="absolute inset-0 bg-cover opacity-30"></div><div class="relative card-body"><div class="flex gap-3 mb-4"><div class="bg-purple-500/10 rounded-full size-10"><img${ssrRenderAttr("src", unref(avatar6))} alt="" class="h-10 rounded-full"></div><div><h6 class="mb-1 text-sm text-default-800">Nakisha Short</h6><p class="text-default-600">Her Birthday Today</p></div></div><button type="button" class="btn btn-sm bg-primary text-white">Wish Her</button></div><img${ssrRenderAttr("src", unref(brithday))} alt="" class="absolute bottom-0 right-0"></div><div class="card"><div class="card-header"><h6 class="card-title">Recent Payroll</h6><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis-vertical",
        class: "iconify size-4 text-default-500"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 bg-card shadow-md rounded-lg z-30 mt-2 p-2" role="menu"><div class="text-sm"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> Today </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> Yesterday </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> Thursday </a></div></div></div></div>`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "h-60",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-body"${_scopeId}><div class="flex flex-col gap-3.5"${_scopeId}><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-right",
              class: "text-danger size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Christopher Horn</h6><h6 class="text-default-900"${_scopeId}>$145.32</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success"${_scopeId}>Paid</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Richard Peters</h6><h6 class="text-default-900"${_scopeId}>$4512.99</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning"${_scopeId}>Pending</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>James Perez</h6><h6 class="text-default-900"${_scopeId}>$879.99</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success"${_scopeId}>Paid</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-right",
              class: "text-danger size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Myrtle Velez</h6><h6 class="text-default-900"${_scopeId}>$978.14</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger"${_scopeId}>Cancelled</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Brad Castillo</h6><h6 class="text-default-900"${_scopeId}>$412.59</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning"${_scopeId}>Pending</span></div></div><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Robert Jump</h6><h6 class="text-default-900"${_scopeId}>$666.99</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success"${_scopeId}>Paid</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-right",
              class: "text-danger size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Myrtle Velez</h6><h6 class="text-default-900"${_scopeId}>$978.14</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger"${_scopeId}>Cancelled</span></div></div><div class="flex flex-wrap items-center gap-3 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-up-right",
              class: "text-danger size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Christopher Horn</h6><h6 class="text-default-900"${_scopeId}>$145.32</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success"${_scopeId}>Paid</span></div></div><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-down-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>Richard Peters</h6><h6 class="text-default-900"${_scopeId}>$4512.99</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning"${_scopeId}>Pending</span></div></div><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:move-down-left",
              class: "text-success size-4"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-default-800 font-semibold grow"${_scopeId}>James Perez</h6><h6 class="text-default-900"${_scopeId}>$879.99</h6><div${_scopeId}><span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success"${_scopeId}>Paid</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-body" }, [
                createVNode("div", { class: "flex flex-col gap-3.5" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-right",
                      class: "text-danger size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Christopher Horn"),
                    createVNode("h6", { class: "text-default-900" }, "$145.32"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success" }, "Paid")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Richard Peters"),
                    createVNode("h6", { class: "text-default-900" }, "$4512.99"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning" }, "Pending")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "James Perez"),
                    createVNode("h6", { class: "text-default-900" }, "$879.99"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success" }, "Paid")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-right",
                      class: "text-danger size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Myrtle Velez"),
                    createVNode("h6", { class: "text-default-900" }, "$978.14"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger" }, "Cancelled")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Brad Castillo"),
                    createVNode("h6", { class: "text-default-900" }, "$412.59"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning" }, "Pending")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Robert Jump"),
                    createVNode("h6", { class: "text-default-900" }, "$666.99"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success" }, "Paid")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-right",
                      class: "text-danger size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Myrtle Velez"),
                    createVNode("h6", { class: "text-default-900" }, "$978.14"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger" }, "Cancelled")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 text-sm" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-up-right",
                      class: "text-danger size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Christopher Horn"),
                    createVNode("h6", { class: "text-default-900" }, "$145.32"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success" }, "Paid")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-down-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "Richard Peters"),
                    createVNode("h6", { class: "text-default-900" }, "$4512.99"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning" }, "Pending")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:move-down-left",
                      class: "text-success size-4"
                    }),
                    createVNode("h6", { class: "text-default-800 font-semibold grow" }, "James Perez"),
                    createVNode("h6", { class: "text-default-900" }, "$879.99"),
                    createVNode("div", null, [
                      createVNode("span", { class: "py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success" }, "Paid")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/RecentPayroll.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=RecentPayroll-DXkz792z.mjs.map
