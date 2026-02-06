import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const home = "" + __buildAssetsURL("product-home.5CNATOlC.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "relative lg:pb-24 md:pt-48 pt-40"
      }, _attrs))}><div class="absolute top-0 start-0 size-64 bg-primary/10 blur-3xl"></div><div class="absolute bottom-0 end-0 size-64 bg-purple-500/10 blur-3xl"></div><div class="container"><div class="grid lg:grid-cols-12 items-center gap-5"><div class="lg:col-span-5"><h1 class="mb-4 leading-relaxed lg:text-6xl md:text-4xl text-4xl font-semibold text-default-800">Exclusive Collections 2024</h1><p class="mb-6 text-lg text-default-500">In 2024, metallics will be taking over the sneaker world. I love this trend because there are so many different ways to wear it. You can wear sequined sneakers, white sneakers with metallic accents, or all-over silver.</p><div><a href="#"><button type="button" class="btn border-0 bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white rounded-md">Shop Now`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:shopping-cart",
        class: "size-4"
      }, null, _parent));
      _push(`</button></a></div></div><div class="lg:col-span-6"><div class="relative"><div class="absolute text-center -z-20 -top-20 -end-64 md:text-[10rem] lg:text-[14rem] text-default-100/50 font-normal font-tourney lg:block hidden">Unique Fashion</div><div class="hs-tooltip [--placement:top] inline-block z-40"><button type="button" class="hs-tooltip-toggle size-10 justify-center items-center rounded-full absolute lg:flex hidden bottom-20 bg-card text-black left-60">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-5"
      }, null, _parent));
      _push(`<span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible py-1 px-2 bg-default-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700" role="tooltip"> $199.99 </span></button><img${ssrRenderAttr("src", unref(home))} alt="" class="lg:ms-40 md:ms-20 w-xl mx-auto"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Hero-DFobginV.mjs.map
