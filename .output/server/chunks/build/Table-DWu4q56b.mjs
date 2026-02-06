import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  setup(__props) {
    const leaves = [
      { id: "01", type: "Medical Leave", reason: "Going to Hospital", days: 2, from: "11 Oct, 2023", to: "12 Oct, 2023", approvedBy: "Paula Keenan", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "02", type: "Casual Leave", reason: "Going to Family Function", days: 1, from: "07 Sept, 2023", to: "07 Sept, 2023", approvedBy: "Admin", status: "Pending", variant: "bg-warning/15 text-warning", icon: "lucide:pencil" },
      { id: "03", type: "Casual Leave", reason: "Going to Holiday", days: 6, from: "11 Jun, 2023", to: "16 Jun, 2023", approvedBy: "Admin", status: "Declined", variant: "bg-danger/10 text-danger" },
      { id: "04", type: "Sick Leave", reason: "Attend Birthday party", days: 1, from: "15 July, 2023", to: "15 July, 2023", approvedBy: "Paula Keenan", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "05", type: "Sick Leave", reason: "Personal", days: 2, from: "19 Aug, 2023", to: "20 Aug, 2023", approvedBy: "Paula Keenan", status: "Declined", variant: "bg-danger/10 text-danger" },
      { id: "06", type: "Casual Leave", reason: "Going to Family Function", days: 1, from: "14 Feb, 2022", to: "14 Feb, 2022", approvedBy: "Admin", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "07", type: "Medical Leave", reason: "Medical Emergency", days: 4, from: "23 Jan, 2023", to: "26 Jan, 2023", approvedBy: "Paula Keenan", status: "Pending", variant: "bg-warning/15 text-warning", icon: "lucide:pencil" },
      { id: "08", type: "Casual Leave", reason: "Personal", days: 2, from: "16 Dec, 2023", to: "17 Dec, 2023", approvedBy: "Paula Keenan", status: "Declined", variant: "bg-danger/10 text-danger" },
      { id: "09", type: "Casual Leave", reason: "Going to Holiday", days: 5, from: "29 Nov, 2023", to: "03 Dec, 2023", approvedBy: "Admin", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "10", type: "Sick Leave", reason: "Going to Hospital", days: 1, from: "15 Oct, 2023", to: "15 Oct, 2023", approvedBy: "Paula Keenan", status: "Approved", variant: "bg-success/15 text-success" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card"><div class="card-header"><div class="relative"><input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><button class="btn btn-sm bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:download",
        class: "size-3.5 me-1"
      }, null, _parent));
      _push(` Export</button></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal whitespace-nowrap text-default-500"><th scope="col" class="px-3.5 py-3 text-start">#</th><th scope="col" class="px-3.5 py-3 text-start">Leave Type</th><th scope="col" class="px-3.5 py-3 text-start">Reason</th><th scope="col" class="px-3.5 py-3 text-start">No Of Days</th><th scope="col" class="px-3.5 py-3 text-start">From</th><th scope="col" class="px-3.5 py-3 text-start">to</th><th scope="col" class="px-3.5 py-3 text-start">Approved By</th><th scope="col" class="px-3.5 py-3 text-start">Status</th><th scope="col" class="px-3.5 py-3 text-end">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(leaves, (item, idx) => {
        _push(`<tr class="text-default-800 font-normal whitespace-nowrap"><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.id)}</td><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.type)}</td><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.reason)}</td><td class="px-3.5 py-2.5 text-sm">0${ssrInterpolate(item.days)}</td><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.from)}</td><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.to)}</td><td class="px-3.5 py-2.5 text-sm">${ssrInterpolate(item.approvedBy)}</td><td class="px-3.5 py-2.5"><span class="${ssrRenderClass([item.variant, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}">${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-2.5 flex items-center justify-end gap-2">`);
        if (item.icon) {
          _push(`<a href="#" class="btn size-8 bg-default-200 hover:bg-default-600 hover:text-white transition-all text-default-600">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: item.icon,
            class: "size-4"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<a href="#" class="btn size-8 bg-primary/20 hover:bg-primary text-primary hover:text-white">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:info",
          class: "iconify lucide--info size-4"
        }, null, _parent));
        _push(`</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>10</b> of <b>17</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(leave-manage)/leave-employee/components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Table-DWu4q56b.mjs.map
