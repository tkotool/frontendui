import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { products } from './data-iHZOwHrl.mjs';
import './img-02-Cy5363DM.mjs';
import './img-01-2zFQ0P8h.mjs';
import './img-03-Ccs588TG.mjs';
import './img-04-DeVAzRtv.mjs';
import './img-05-Dk9gumKl.mjs';
import './img-08-BpiT8Rl3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 col-span-1" }, _attrs))}><div class="flex justify-between gap-2 flex-wrap items-center"><p class="text-default-700 text-sm">Showing all <b>7,410</b> items results</p><div class="flex gap-2 items-center"><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle inline-flex items-center btn btn-sm bg-transparent border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"> Sort by:<b class="font-medium">Highest Price</b>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-down",
        class: "size-4 ms-2"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm" role="menu"><a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Lowest Price </a><a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Highest Price </a><a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> High to Low </a><hr class="border-t border-default-200 my-2 -mx-2"><a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Low to High </a></div></div><nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal"><button type="button" class="hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600" id="items-1" aria-selected="false" data-hs-tab="#item-1" aria-controls="item-1" role="tab">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:list",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600 active" id="items-2" aria-selected="true" data-hs-tab="#item-2" aria-controls="item-2" role="tab">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:layout-grid",
        class: "size-4"
      }, null, _parent));
      _push(`</button></nav></div></div><div class="flex items-center mt-3 gap-3"><span class="flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs"> High to Low <a href="#" class="align-middle transition-al duration-300">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-3"
      }, null, _parent));
      _push(`</a></span><span class="flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs"> New <a href="#" class="align-middle transition-al duration-300">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-3"
      }, null, _parent));
      _push(`</a></span><a href="#" class="py-0.75 px-2.5 text-xs rounded-md transition-all duration-300 hover:bg-default-150"> All Clear </a></div><div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5"><!--[-->`);
      ssrRenderList(unref(products), (item, idx) => {
        _push(`<div class="card"><div class="card-body relative"><img${ssrRenderAttr("src", item.image)} alt="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:heart",
          class: "size-5 text-danger fill-danger/15 absolute top-6 end-6"
        }, null, _parent));
        _push(`</div><div class="pb-5 px-5"><h6 class="text-base text-default-800 font-semibold hover:text-primary transition-all mb-2"><a href="#">${ssrInterpolate(item.name)}</a></h6><div class="flex items-center gap-1"><div class="flex items-center gap-0.25 text-yellow-500">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star",
          class: "size-4 fill-yellow-500"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star",
          class: "size-4 fill-yellow-500"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star",
          class: "size-4 fill-yellow-500"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star",
          class: "size-4 fill-yellow-500"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star-half",
          class: "size-4 fill-yellow-500"
        }, null, _parent));
        _push(`</div><span class="text-default-500">(${ssrInterpolate(item.reviewCount)})</span></div><h5 class="mt-4 text-base font-semibold text-default-800">${ssrInterpolate(item.price)} <small class="line-through font-medium text-default-500">${ssrInterpolate(item.originalPrice)}</small></h5><div class="flex items-center gap-2 mt-4"><button class="border border-default-600 w-full text-default-500 border-dashed btn">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:shopping-cart",
          class: "size-3"
        }, null, _parent));
        _push(` Add to Cart </button><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-9 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:ellipsis",
          class: "iconify size-4"
        }, null, _parent));
        _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(` Overview </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:edit",
          class: "size-3"
        }, null, _parent));
        _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-3"
        }, null, _parent));
        _push(` Delete </a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap md:justify-between justify-center md:gap-0 gap-4 mt-5"><p class="text-default-500 text-sm">Showing <b>07</b> of <b>19</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/product-grid/components/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Product-BiMz2a31.mjs.map
