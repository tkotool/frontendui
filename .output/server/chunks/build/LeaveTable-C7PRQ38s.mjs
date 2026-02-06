import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LeaveTable",
  __ssrInlineRender: true,
  setup(__props) {
    const leaves = [
      { id: "01", name: "Willie Torres ", type: "Medical Leave", reason: "Going to Hospital", days: 2, from: "11 Oct, 2023", to: "12 Oct, 2023", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "02", name: "Patricia Garcia ", type: "Casual Leave", reason: "Going to Family Function", days: 1, from: "07 Sept, 2023", to: "07 Sept, 2023", status: "Pending", variant: "bg-warning/15 text-warning" },
      { id: "03", name: "Juliette Fecteau ", type: "Casual Leave", reason: "Going to Holiday", days: 6, from: "11 Jun, 2023", to: "16 Jun, 2023", status: "New", variant: "bg-secondary/10 text-secondary" },
      { id: "04", name: "Thomas Hatfield ", type: "Sick Leave", reason: "Attend Birthday party", days: 1, from: "15 July, 2023", to: "15 July, 2023", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "05", name: "Willie Torres ", type: "Sick Leave", reason: "Personal", days: 2, from: "19 Aug, 2023", to: "20 Aug, 2023", status: "Declined", variant: "bg-danger/10 text-danger" },
      { id: "06", name: "Juliette Fecteau ", type: "Casual Leave", reason: "Going to Family Function", days: 1, from: "14 Feb, 2022", to: "14 Feb, 2022", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "07", name: "Eugene Clifford ", type: "Parental Leave", reason: "Child Care", days: 5, from: "01 Mar, 2023", to: "05 Mar, 2023", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "08", name: "Laura Mendez ", type: "Annual Leave", reason: "Vacation Trip", days: 7, from: "10 Apr, 2023", to: "16 Apr, 2023", status: "Pending", variant: "bg-warning/15 text-warning" },
      { id: "09", name: "Marcus Lewis ", type: "Medical Leave", reason: "Hospitalization", days: 3, from: "20 May, 2023", to: "22 May, 2023", status: "Approved", variant: "bg-success/15 text-success" },
      { id: "10", name: "Sophie Turner ", type: "Casual Leave", reason: "Attending Wedding", days: 2, from: "05 Jun, 2023", to: "06 Jun, 2023", status: "Declined", variant: "bg-danger/10 text-danger" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card"><div class="card-header flex justify-between items-center"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><button class="btn btn-sm bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:download",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Export</button></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal text-default-500 whitespace-nowrap"><th scope="col" class="px-3.5 py-3 text-start">#</th><th scope="col" class="px-3.5 py-3 text-start">Employee Name</th><th scope="col" class="px-3.5 py-3 text-start">Leave Type</th><th scope="col" class="px-3.5 py-3 text-start">Reason</th><th scope="col" class="px-3.5 py-3 text-start">No Of Days</th><th scope="col" class="px-3.5 py-3 text-start">From</th><th scope="col" class="px-3.5 py-3 text-start">to</th><th scope="col" class="px-3.5 py-3 text-start">Status</th><th scope="col" class="px-3.5 py-3 text-start">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(leaves, (item, idx) => {
        _push(`<tr class="text-default-800 font-normal"><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.id)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.name)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.type)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.reason)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">0${ssrInterpolate(item.days)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.from)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.to)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"><span class="${ssrRenderClass([item.variant, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}">${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-2.5 whitespace-nowrap"><div class="flex items-center gap-2"><a href="" class="btn size-8 bg-default-200 hover:bg-default-600 hover:text-white text-default-600">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:pencil",
          class: "size-4"
        }, null, _parent));
        _push(`</a><a href="" class="btn size-8 bg-success/15 hover:bg-success hover:text-white text-success">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:check",
          class: "size-4"
        }, null, _parent));
        _push(`</a><a href="" class="btn size-8 bg-danger/10 hover:bg-danger hover:text-white text-danger" aria-haspopup="dialog" aria-expanded="false" aria-controls="hr-leave-delete-modal" data-hs-overlay="#hr-leave-delete-modal">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-4"
        }, null, _parent));
        _push(`</a></div></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(leave-manage)/leave-hr/components/LeaveTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=LeaveTable-C7PRQ38s.mjs.map
