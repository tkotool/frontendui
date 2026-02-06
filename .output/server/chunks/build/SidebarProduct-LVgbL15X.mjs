import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { p as product } from './img-01-2zFQ0P8h.mjs';
import { p as product09 } from './img-09-Ddyj6oCA.mjs';

const product12 = "" + __buildAssetsURL("img-12.CJXJ9cr9.png");
const product13 = "" + __buildAssetsURL("img-13.BzJBugpY.png");
const overview01 = "" + __buildAssetsURL("overview-01.B3rYGOML.png");
const overview02 = "" + __buildAssetsURL("overview-02.BggDxlBX.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SidebarProduct",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="sticky top-24"><div class="card mb-5"><div class="card-body"><div class="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5"><div class="md:col-span-2 grid-cols-1"><div class="rounded-md bg-default-100"><img${ssrRenderAttr("src", unref(overview01))} alt="" width="299" height="299"></div></div><div class="col-span-1"><div class="rounded-md bg-default-100 mb-5"><img${ssrRenderAttr("src", unref(overview02))} alt="" height="139" width="139"></div><div class="rounded-md bg-default-100"><img${ssrRenderAttr("src", unref(product))} alt=""></div></div></div><div class="grid md:grid-cols-3 grid-cols-1 gap-5"><div class="rounded-md bg-default-100"><img${ssrRenderAttr("src", unref(product09))} alt=""></div><div class="rounded-md bg-default-100"><img${ssrRenderAttr("src", unref(product12))} alt=""></div><div class="rounded-md bg-default-100"><img${ssrRenderAttr("src", unref(product13))} alt=""></div></div><div class="grid grid-cols-2 gap-2 mt-4"><a href="/ecommerce/cart" class="border border-primary w-full rounded btn text-primary hover:bg-primary/10 border-dashed">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:shopping-cart",
        class: "size-3"
      }, null, _parent));
      _push(` Add to Cart </a><button class="bg-danger/85 w-full rounded btn text-white hover:bg-danger">Buy Now</button></div><div class="flex items-center gap-3 mt-3 justify-evenly"><a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:repeat",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="align-middle">Compare</span></a><a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:help-circle",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="align-middle">Ask a Question</span></a><a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:share-2",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="align-middle">Share</span></a></div></div></div><div class="card"><div class="card-body border-b border-b-default-200"><div class="flex justify-between flex-wrap gap-5"><h6 class="text-default-800 font-semibold text-[15px] flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:store",
        class: "size-4"
      }, null, _parent));
      _push(` Themesdesign </h6><span class="flex items-center gap-1.25 text-default-700">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4 text-yellow-500"
      }, null, _parent));
      _push(` (4.8) </span></div></div><div class="card-body"><div class="flex gap-5 justify-between"><h6 class="text-default-800 font-semibold text-[15px] flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:store",
        class: "size-4 text-orange-500"
      }, null, _parent));
      _push(` California, USA </h6><button class="text-white btn btn-sm btn-primary">View Store</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/product-detail/components/SidebarProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SidebarProduct-LVgbL15X.mjs.map
