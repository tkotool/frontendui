import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 grid-cols-1 mb-5 gap-5" }, _attrs))}><div class="lg:col-span-2"><h5 class="mb-2 text-xl text-default-800 font-semibold">Welcome Paula Keenan 🎉</h5><p> The salary of <a href="#" class="underline text-default-900">Glennie Langosh</a>is pending since 05 Dec, 2023. the documentation of the tasks, workflows, and activities that make up a process managed by the HR or People Ops team. <a href="#" class="text-danger">Learn More</a></p></div><div class="lg:col-start-4"><div class="card"><div class="card-body"><div class="grid grid-cols-3"><div class="px-4 text-center border-e border-default-200 text-sm"><h6 class="mb-1 font-bold"><span class="counter-value text-default-800" data-target="36">36</span></h6><p class="text-default-500">Absent</p></div><div class="px-4 text-center border-e border-default-200 text-sm"><h6 class="mb-1 font-bold"><span class="counter-value text-default-800" data-target="465">465</span></h6><p class="text-default-500">Attendance</p></div><div class="px-4 text-center text-sm"><h6 class="mb-1 font-bold"><span class="counter-value text-default-800" data-target="50">50</span></h6><p class="text-default-500">Late</p></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/HRWelcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HRWelcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HRWelcome as default };
//# sourceMappingURL=HRWelcome-Dkob6Ndw.mjs.map
