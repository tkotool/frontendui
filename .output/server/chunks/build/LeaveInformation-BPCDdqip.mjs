import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card"><div class="card-header"><h6 class="card-title">Leave Information (2023)</h6></div><div class="card-body"><table class="w-full mb-0 text-sm"><tbody><tr><td class="py-2.5 text-default-800">Medical Leave</td><th class="py-2.5 text-default-800 font-semibold">04</th></tr><tr><td class="py-2.5 text-default-800">Casual Leave</td><th class="py-2.5 text-default-800 font-semibold">08</th></tr><tr><td class="py-2.5 text-default-800">Sick Leave</td><th class="py-2.5 text-default-800 font-semibold">03</th></tr><tr><td class="py-2.5 text-default-800">Annual Leave</td><th class="py-2.5 text-default-800 font-semibold">12</th></tr><tr><td class="py-2.5 text-default-800">Use Leave</td><th class="py-2.5 text-default-800 font-semibold">09</th></tr><tr><td class="py-2.5 text-default-800">Remaining Leave</td><th class="py-2.5 text-default-800 font-semibold">18</th></tr></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(leave-manage)/add-hr/components/LeaveInformation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LeaveInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LeaveInformation as default };
//# sourceMappingURL=LeaveInformation-BPCDdqip.mjs.map
