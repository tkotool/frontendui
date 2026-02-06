import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomerService",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><h6 class="card-title">Customer Service</h6><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 text-sm font-semibold rounded-lg hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis-vertical",
        class: "iconify size-4 text-default-500"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 1 Weekly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 1 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 3 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 6 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> This Yearly </a></div></div></div><div class="card-body"><div><div class="flex items-center justify-between mb-2"><p class="text-default-500 text-sm">28% of the Goal Reached ($25k)</p></div><div class="w-full h-2 rounded-full bg-default-200"><div class="h-2 bg-success rounded-full" style="${ssrRenderStyle({ "width": "28%" })}"></div></div><div class="flex mt-3"><div class="flex items-center gap-2"><div>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:calendar-days",
        class: "size-4 text-default-800"
      }, null, _parent));
      _push(`</div><p class="mb-0 text-default-600"> This Month: <span class="font-medium text-default-800">$13,741</span></p></div></div></div><div><h6 class="mt-4 mb-3 text-default-800 text-sm font-semibold">Top Customer</h6><div class="divide-y divide-default-200"><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-3 py-2.25"><div class="size-8 rounded-full bg-default-100"><img${ssrRenderAttr("src", unref(avatar2))} alt="" class="size-8 rounded-full"></div><div><h6 class="font-medium text-default-800 mb-1">Urrie Arthur</h6><p class="text-default-500 font-normal">arthur@tailwick.com</p></div></div><div><h6 class="font-semibold text-default-800">$2,452</h6></div></div><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-3 py-2.25"><div class="size-8 rounded-full bg-default-100"><img${ssrRenderAttr("src", unref(avatar3))} alt="" class="size-8 rounded-full"></div><div><h6 class="font-medium text-default-800 mb-1">Natalie Christy</h6><p class="text-default-500 font-normal">natalie@tailwick.com</p></div></div><h6 class="font-semibold text-default-800">$1,893</h6></div><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-3 py-2.25"><div class="size-8 rounded-full bg-default-100"><img${ssrRenderAttr("src", unref(avatar4))} alt="" class="size-8 rounded-full"></div><div><h6 class="font-medium text-default-800 mb-1">Laurie Jackson</h6><p class="text-default-500 font-normal">jackson@tailwick.com</p></div></div><h6 class="font-semibold text-default-800">$1,196</h6></div><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-3 pt-2"><div class="size-8 rounded-full bg-default-100"><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="size-8 rounded-full"></div><div><h6 class="font-medium text-default-800 mb-1">Michael Torres</h6><p class="text-default-500 font-normal">torres@tailwick.com</p></div></div><h6 class="font-semibold text-default-800">$976</h6></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ecommerce/components/CustomerService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CustomerService-CLdXJIeG.mjs.map
