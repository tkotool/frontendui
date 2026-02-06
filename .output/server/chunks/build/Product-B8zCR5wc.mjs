import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const img16 = "" + __buildAssetsURL("img-16.DYychhMb.png");
const img17 = "" + __buildAssetsURL("img-17.C3jLcvV-.png");
const img18 = "" + __buildAssetsURL("img-18.DbrXbkHq.png");
const img19 = "" + __buildAssetsURL("img-19.BKPQf7hi.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "product",
        class: "relative lg:py-32 py-20"
      }, _attrs))}><div class="container"><div class="lg:w-3xl mx-auto text-center"><h1 class="leading-normal capitalize text-4xl font-semibold text-default-800">Our Latest Product</h1></div><div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12"><div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md"><div class="card-body"><img${ssrRenderAttr("src", unref(img16))} alt="" class="mx-auto h-52"><div class="mt-3"><p class="mb-3 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "text-amber-500 size-4"
      }, null, _parent));
      _push(` (4.8)</p><h5 class="text-lg font-semibold text-default-800"><a href="#">Green Sneakers Skate</a></h5><div class="flex justify-between items-center mt-3"><h6 class="text-base font-semibold text-default-800">$299.99</h6><div><button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button></div></div></div></div></div><div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md"><div class="card-body"><img${ssrRenderAttr("src", unref(img17))} alt="" class="mx-auto h-52"><div class="mt-3"><p class="mb-3 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "text-amber-500 size-4"
      }, null, _parent));
      _push(` (4.4)</p><h5 class="text-lg font-semibold text-default-800"><a href="#">Nike Running Shoes</a></h5><div class="flex justify-between items-center mt-3"><h6 class="text-base font-semibold text-default-800">$129.49</h6><div><button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button></div></div></div></div></div><div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md"><div class="card-body"><img${ssrRenderAttr("src", unref(img18))} alt="" class="mx-auto h-52"><div class="mt-3"><p class="mb-3 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "text-amber-500 size-4"
      }, null, _parent));
      _push(` (4.9)</p><h5 class="text-lg font-semibold text-default-800"><a href="#">Nike Air Max Sneakers Shoe</a></h5><div class="flex justify-between items-center mt-3"><h6 class="text-base font-semibold text-default-800">$149.99</h6><div><button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button></div></div></div></div></div><div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md"><div class="card-body"><img${ssrRenderAttr("src", unref(img19))} alt="" class="mx-auto h-52"><div class="mt-3"><p class="mb-3 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "text-amber-500 size-4"
      }, null, _parent));
      _push(` (4.6)</p><h5 class="text-lg font-semibold text-default-800"><a href="#">Dunk Sneakers Skate shoe</a></h5><div class="flex justify-between items-center mt-3"><h6 class="text-base font-semibold text-default-800">$174.65</h6><div><button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Product-B8zCR5wc.mjs.map
