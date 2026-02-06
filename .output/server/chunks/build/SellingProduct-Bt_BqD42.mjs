import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { products } from './data-IcsAWRil.mjs';
import './img-02-Cy5363DM.mjs';
import './img-03-Ccs588TG.mjs';
import './img-04-DeVAzRtv.mjs';
import './img-05-Dk9gumKl.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SellingProduct",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><h6 class="card-title">Top Selling Products</h6><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle bt size-7.5 text-sm font-semibold rounded-lg hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis-vertical",
        class: "iconify size-4 text-default-500"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Weekly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 3 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 6 Monthly </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> This Yearly </a></div></div></div><div class="card-body"><div class="flex flex-col gap-5"><!--[-->`);
      ssrRenderList(unref(products), (item, idx) => {
        _push(`<div class="flex items-center justify-between"><div class="flex items-center gap-3 whitespace-nowrap"><div class="flex items-center justify-center rounded-md size-10 bg-default-100"><img${ssrRenderAttr("src", item.image)} alt="" class="h-6"></div><div><h6 class="font-semibold text-default-800 md:w-full truncate w-43 mb-1 text-sm">${ssrInterpolate(item.name)}</h6><div class="flex items-center text-yellow-500 gap-0.5"><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(ssrRenderComponent(unref(Icon), {
            key: n,
            icon: n <= item.rating ? "lucide:star" : "lucide:star-half",
            class: "fill-yellow-500 size-3.5"
          }, null, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:star-half",
          class: "fill-yellow-500 size-3.5"
        }, null, _parent));
        _push(`</div></div></div><div class="flex gap-1.5 items-center">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:shopping-cart",
          class: "size-4 text-default-500"
        }, null, _parent));
        _push(`<h6 class="font-semibold text-default-800 text-sm">${ssrInterpolate(item.sales)}</h6></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ecommerce/components/SellingProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SellingProduct-Bt_BqD42.mjs.map
