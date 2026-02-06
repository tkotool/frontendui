import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { products } from './data-BdXrrJH4.mjs';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
import './img-01-2zFQ0P8h.mjs';
import './img-02-Cy5363DM.mjs';
import './img-09-Ddyj6oCA.mjs';
import './img-08-BpiT8Rl3.mjs';
import './img-03-Ccs588TG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  setup(__props) {
    useFlatpickr({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card"><div class="card-header"><div class="md:flex md:space-y-0 space-y-3.5 gap-3 items-center"><div class="relative"><input type="email" class="ps-11 form-input form-input-sm w-full" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><input type="text" class="form-input form-input-sm w-full" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly placeholder="Select Date"></div><button class="btn btn-sm bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-4 me-1"
      }, null, _parent));
      _push(`Add Product</button></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal text-default-700"><th scope="col" class="px-3.5 py-3 text-start">Product Code</th><th scope="col" class="px-3.5 py-3 text-start">Product Name</th><th scope="col" class="px-3.5 py-3 text-start">Category</th><th scope="col" class="px-3.5 py-3 text-start">Price</th><th scope="col" class="px-3.5 py-3 text-start">Stock</th><th scope="col" class="px-3.5 py-3 text-start">Revenue</th><th scope="col" class="px-3.5 py-3 text-start">Status</th><th scope="col" class="px-3.5 py-3 text-start">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(unref(products), (item, idx) => {
        _push(`<tr class="text-default-800 font-normal"><td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">${ssrInterpolate(item.code)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"><a href="/ecommerce/product-detail" class="flex items-center gap-2"><img${ssrRenderAttr("src", item.image)} alt="Product images" class="h-6"><h6 class="text-default-800">${ssrInterpolate(item.name)}</h6></a></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"><div class="inline-flex py-0.5 px-2.5 rounded text-xs font-normal bg-default-100 border border-default-200 text-default-500">${ssrInterpolate(item.category)}</div></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.price)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.stock)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.revenue)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"><span class="${ssrRenderClass([item.variant, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}">${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-2.5"><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:ellipsis",
          class: "iconify size-4"
        }, null, _parent));
        _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(` Overview </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:edit",
          class: "size-3"
        }, null, _parent));
        _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-3"
        }, null, _parent));
        _push(` Delete </a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>07</b> of <b>19</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/product/components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Table-B32RqVUI.mjs.map
