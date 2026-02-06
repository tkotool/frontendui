import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const cta = "" + __buildAssetsURL("cta.BuApwMDI.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Feature",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "Features",
        class: "relative lg:pb-28 pb-10"
      }, _attrs))}><div class="absolute top-0 start-0 size-64 bg-purple-500/10 blur-3xl"></div><div><div class="container"><div class="grid lg:grid-cols-2 items-center"><div class="lg:w-lg"><h1 class="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">Explore our flagship product and discover its unique features</h1><p class="mb-5 text-lg text-default-500">Whatever your running gait, a good pair of running shoes will provide flexibility, durability, and support.</p><ul class="flex flex-col gap-y-2 mb-6 list-disc list-inside text-sm text-default-800"><li>Matches Your Foot Shape &amp; Type</li><li>Easy to Wear</li><li>Heels That You Can Wear</li><li>Good Quality &amp; Condition</li><li>Segments of Solid Rubber</li></ul><a href="#" class="btn text-primary text-base">Shopping Now`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:move-right",
        class: "size-4"
      }, null, _parent));
      _push(`</a></div><div class="relative lg:mt-0 mt-6"><div class="absolute start-0 bg-center bg-cover lg:bottom-40 bottom-20 w-52 h-96 bg-[url(&#39;../images/cta-2.png&#39;)] rounded-md md:block hidden" data-aos="fade-left" data-aos-delay="400"><div class="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-accent from-30%"></div></div><div class="md:ms-20"><img${ssrRenderAttr("src", unref(cta))} alt="" class="w-lg relative inline-block"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Feature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Feature-a1UsphVG.mjs.map
