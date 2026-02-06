import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><h6 class="card-title">Traffic Source</h6><a href="#" class="text-primary underline">See More</a></div><div class="card-body"><div class="flex flex-col gap-5"><div><div class="flex items-center justify-between gap-4 mb-2 text-sm"><h6 class="text-default-900">Google</h6><span class="text-default-500">54,963</span></div><div class="w-full h-3.5 rounded bg-default-200"><div class="h-3.5 rounded bg-primary" style="${ssrRenderStyle({ "width": "89%" })}"></div></div></div><div><div class="flex items-center justify-between gap-4 mb-2 text-sm"><h6 class="text-default-900">Meta</h6><span class="text-default-500">30,478</span></div><div class="w-full h-3.5 rounded bg-default-200"><div class="h-3.5 rounded bg-sky-500" style="${ssrRenderStyle({ "width": "55%" })}"></div></div></div><div><div class="flex items-center justify-between gap-4 mb-2 text-sm"><h6 class="text-default-900">Social Media</h6><span class="text-default-500">54,963</span></div><div class="w-full h-3.5 rounded bg-default-200"><div class="h-3.5 rounded bg-warning" style="${ssrRenderStyle({ "width": "81%" })}"></div></div></div><div><div class="flex items-center justify-between gap-4 mb-2 text-sm"><h6 class="text-default-900">Direct Message</h6><span class="text-default-500">54,963</span></div><div class="w-full h-3.5 rounded bg-default-200"><div class="h-3.5 rounded bg-success" style="${ssrRenderStyle({ "width": "63%" })}"></div></div></div><div><div class="flex items-center justify-between gap-4 mb-2 text-sm"><h6 class="text-default-900">Others</h6><span class="text-default-500">54,963</span></div><div class="w-full h-3.5 rounded bg-default-200"><div class="h-3.5 rounded bg-default-600" style="${ssrRenderStyle({ "width": "25%" })}"></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/analytics/components/Traffic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Traffic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Traffic as default };
//# sourceMappingURL=Traffic-CHfLE56h.mjs.map
