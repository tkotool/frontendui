import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  setup(__props) {
    useFlatpickr({});
    const employees = [
      {
        name: "Patricia Garcia",
        days: ["absent", "absent", "none", "none", "present", "present", "present", "present", "absent", "none", "none", "present", "absent", "present", "present", "present", "none", "none", "absent", "present", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present"]
      },
      {
        name: "Tonya Johnson",
        days: ["present", "present", "none", "none", "present", "present", "present", "absent", "present", "none", "none", "absent", "present", "present", "present", "present", "none", "none", "present", "present", "absent", "present", "present", "none", "none", "present", "present", "present", "present", "absent"]
      },
      {
        name: "Willie Torres",
        days: ["present", "absent", "none", "none", "present", "absent", "absent", "present", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "present", "present", "absent", "present", "present"]
      },
      {
        name: "Jose White",
        days: ["present", "present", "none", "none", "present", "present", "present", "absent", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "present", "present", "present", "present", "absent", "none", "none", "present", "present", "present", "present", "present"]
      },
      {
        name: "Jose White",
        days: ["absent", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "absent", "absent", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present"]
      },
      {
        name: "Jonas Frederiksen",
        days: ["present", "present", "none", "none", "absent", "absent", "absent", "present", "present", "none", "none", "present", "present", "present", "present", "absent", "none", "none", "present", "present", "present", "present", "present", "none", "none", "absent", "present", "present", "present", "present"]
      },
      {
        name: "Kim Broberg",
        days: ["present", "present", "none", "none", "present", "present", "present", "absent", "present", "none", "none", "present", "present", "present", "present", "absent", "none", "none", "present", "absent", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present"]
      },
      {
        name: "Nancy Reynolds",
        days: ["present", "present", "none", "none", "absent", "present", "present", "present", "present", "none", "none", "present", "present", "present", "absent", "present", "none", "none", "present", "present", "present", "present", "present", "none", "none", "present", "present", "present", "present", "present"]
      },
      {
        name: "Thomas Hatfield",
        days: ["absent", "present", "none", "none", "present", "present", "absent", "present", "present", "none", "none", "present", "present", "absent", "present", "present", "none", "none", "present", "absent", "present", "present", "present", "none", "none", "present", "present", "absent", "present", "present"]
      },
      {
        name: "Holly Kavanaugh",
        days: ["present", "present", "none", "none", "present", "present", "present", "absent", "present", "none", "none", "present", "absent", "present", "present", "present", "none", "none", "absent", "present", "absent", "present", "present", "none", "none", "present", "present", "present", "absent", "present"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><div class="relative"><input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for..."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 text-default-500"
      }, null, _parent));
      _push(`</div></div><div class="relative"><input type="text" placeholder="Select Date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly class="form-input form-input-sm ps-10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:calendar",
        class: "absolute top-1.5 start-3 size-4 text-default-500"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-100 font-normal whitespace-nowrap"><tr class="text-sm text-default-800"><th class="px-3.5 py-3 font-medium">Employee Name</th><!--[-->`);
      ssrRenderList(30, (day) => {
        _push(`<th class="px-3.5 py-3 font-medium">${ssrInterpolate(day.toString().padStart(2, "0"))}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(employees, (employee, index) => {
        _push(`<tr class="text-default-800 font-normal whitespace-nowrap"><td class="px-3.5 py-3 text-sm">${ssrInterpolate(employee.name)}</td><!--[-->`);
        ssrRenderList(employee.days, (status, dayIndex) => {
          _push(`<td class="px-3.5 py-3 text-sm">`);
          if (status === "present") {
            _push(ssrRenderComponent(unref(Icon), {
              icon: "lucide:check",
              class: "size-4 text-success"
            }, null, _parent));
          } else if (status === "absent") {
            _push(ssrRenderComponent(unref(Icon), {
              icon: "lucide:x",
              class: "size-4 text-danger"
            }, null, _parent));
          } else {
            _push(`<!--[--> - <!--]-->`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(attendance)/attendance-main/components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Table-CS69Eo1v.mjs.map
