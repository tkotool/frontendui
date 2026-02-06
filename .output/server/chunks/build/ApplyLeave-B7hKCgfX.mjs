import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplyLeave",
  __ssrInlineRender: true,
  setup(__props) {
    useFlatpickr({});
    useFlatpickr({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 col-span-1" }, _attrs))}><div class="card"><div class="card-header"><h6 class="card-title">Add Leave</h6></div><div class="card-body"><div class="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5"><div><label for="employeeName" class="inline-block mb-2 text-sm text-default-800 font-medium">Employee</label><select class="form-input" style="${ssrRenderStyle({ "padding": "0 12px" })}"><option value="">Select Employee</option><option value="Willie Torres">Willie Torres</option><option value="Patricia Garcia">Patricia Garcia</option><option value="Juliette Fecteau">Juliette Fecteau</option><option value="Thomas Hatfield">Thomas Hatfield</option><option value="Willie Torres">Willie Torres</option><option value="Juliette Fecteau">Juliette Fecteau</option><option value="Nancy Reynolds">Nancy Reynolds</option><option value="Holly Kavanaugh">Holly Kavanaugh</option><option value="Jonas Frederiksen">Jonas Frederiksen</option></select></div><div><label for="employeeId" class="inline-block mb-2 text-sm text-default-800 font-medium">Employee ID</label><input type="text" id="employeeId" class="form-input" value="#TWE1001501" disabled style="${ssrRenderStyle({ "padding": "0 12px" })}"></div><div><label for="employeeName" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Type</label><select class="form-input" style="${ssrRenderStyle({ "padding": "0 12px" })}"><option value="">Select Leave Type</option><option value="Medical Leave">Medical Leave</option><option value="Casual Leave">Casual Leave</option><option value="Sick Leave">Sick Leave</option><option value="Annual Leave">Annual Leave</option></select></div><div><label for="remainingLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Remaining Leaves</label><input type="text" id="remainingLeaves" class="form-input" value="18" disabled style="${ssrRenderStyle({ "padding": "0 12px" })}"></div><div><label for="fromInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Form</label><input type="text" id="fromInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" style="${ssrRenderStyle({ "padding": "0 12px" })}"></div><div><label for="toInput" class="inline-block mb-2 text-sm text-default-800 font-medium">To</label><input type="text" id="toInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" style="${ssrRenderStyle({ "padding": "0 12px" })}"></div><div><label for="numberOfDayLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Number of Days</label><input type="text" id="numberOfDayLeaves" class="form-input" value="01" disabled style="${ssrRenderStyle({ "padding": "0 12px" })}"></div><div><label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Day</label><select class="form-input" style="${ssrRenderStyle({ "padding": "0 12px" })}"><option value="">Select Leave Day</option><option value="Full Day">Full Day</option><option value="Half Day">Half Day</option></select></div></div><div class="grid grid-cols-1 gap-5"><div><label for="reasonInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Reason</label><textarea class="form-input" id="reasonInput" rows="3"></textarea></div></div><div class="flex justify-end gap-2 mt-5"><button class="btn border-0 text-danger bg-transparent hover:bg-danger/10">Reset</button><button class="btn bg-primary text-white">Apply Leave</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(leave-manage)/add-hr/components/ApplyLeave.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ApplyLeave-B7hKCgfX.mjs.map
