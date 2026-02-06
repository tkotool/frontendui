import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { employees } from './data-DSw_rQcB.mjs';
import './avatar-10-DjVkpQI6.mjs';
import './avatar-2-BDMEXCZB.mjs';
import './avatar-3-DffBtZtQ.mjs';
import './avatar-4-VVt-Y7Qo.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployeePerformance",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card mb-5" }, _attrs))}><div class="card-header"><h6 class="card-title">Employee Performance</h6><div class="flex gap-3 items-center"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 text-default-500"
      }, null, _parent));
      _push(`</div></div><button class="btn btn-sm border-dashed border-primary hover:bg-primary/20 text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:download",
        class: "size-4 me-1"
      }, null, _parent));
      _push(`Export</button></div></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-default-600"><th scope="col" class="py-3 px-4 text-start pe-0"><input id="checkbox-all" type="checkbox" class="form-checkbox"></th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">ID</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Name</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Designation</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Performance</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Status</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(unref(employees), (item, idx) => {
        _push(`<tr class="text-default-800 text-sm whitespace-nowrap"><td class="py-3.5 ps-4"><input id="checkbox-all" type="checkbox" class="form-checkbox"></td><td class="px-3.5 py-2">${ssrInterpolate(item.id)}</td><td class="px-3.5 py-2.5"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", item.avatar)} alt="" class="bg-green-100 size-10 rounded-full"><div class="text-sm"><h6 class="font-semibold mb-0.5">${ssrInterpolate(item.name)}</h6><p class="text-default-500">${ssrInterpolate(item.email)}</p></div></div></td><td class="px-3.5 py-2.5">${ssrInterpolate(item.designation)}</td><td class="${ssrRenderClass([item.textcolor, "px-3.5 py-2.5"])}">${ssrInterpolate(item.performance)}</td><td class="px-3.5 py-2.5"><span class="${ssrRenderClass([item.statusColor, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}">${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-2.5 text-start"><span class="inline-flex justify-start gap-2.5"><a href="#" class="btn size-8 bg-default-100 hover:bg-blue-100 text-default-600 hover:text-primary">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:pencil",
          class: "size-4"
        }, null, _parent));
        _push(`</a><a href="#" class="btn size-8 bg-default-100 hover:bg-red-100 text-default-600 hover:text-danger">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-4"
        }, null, _parent));
        _push(`</a></span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>10</b> of <b>19</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(`Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/hr/components/EmployeePerformance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EmployeePerformance-CflBm-Cc.mjs.map
