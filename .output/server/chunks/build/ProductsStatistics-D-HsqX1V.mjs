import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { products } from './data-ClYJCV8_.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><h6 class="card-title">Products Statistics</h6><div class="flex gap-3 items-center"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 text-default-500"
      }, null, _parent));
      _push(`</div></div><button class="btn btn-sm bg-transparent text-primary border border-dashed border-primary hover:bg-primary/20">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:download",
        class: "size-4 me-1"
      }, null, _parent));
      _push(`Export</button></div></div><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-default-600"><th scope="col" class="py-3 text-start ps-4"><input id="checkbox-all" type="checkbox" class="form-checkbox"></th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Products</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Price</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Income</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Sales</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">View</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Click</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium whitespace-nowrap">Click (%)</th><th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Status</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(unref(products), (item, idx) => {
        _push(`<tr class="text-default-800"><td class="py-2.5 ps-4"><input id="checkbox-all" type="checkbox" class="form-checkbox"></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.name)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.price)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.income)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.sales)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.view)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.click)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.clickPercent)}%</td><td class="px-3.5 py-2.5 whitespace-nowrap"><span class="${ssrRenderClass(["py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded", item.status === "Active" ? "bg-success/15 text-success" : "bg-danger/15 text-danger"])}">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: item.status === "Active" ? "lucide:check-circle-2" : "lucide:x-circle",
          class: "size-3"
        }, null, _parent));
        _push(` ${ssrInterpolate(item.status)}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>07</b> of <b>11</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/analytics/components/ProductsStatistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductsStatistics-D-HsqX1V.mjs.map
