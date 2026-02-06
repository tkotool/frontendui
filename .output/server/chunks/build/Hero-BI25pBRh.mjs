import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { s as slide1, a as slide2, b as slide3 } from './slide3-C5ggHfgn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    const slides = [slide1, slide2, slide3];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative lg:pt-44 lg:pb-36 md:pt-34 md:pb-20 pt-30 pb-16" }, _attrs))} data-v-e42e1a49><div class="container" data-v-e42e1a49><div class="grid lg:grid-cols-2 gap-8" data-v-e42e1a49><div class="order-2 lg:order-1" data-v-e42e1a49><h1 class="mb-8 leading-relaxed md:text-5xl text-4xl font-semibold text-default-800" data-v-e42e1a49> Plateforme dédiée à la préparation spécifique du <span class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl" data-v-e42e1a49><span class="relative text-primary" data-v-e42e1a49>TCF CANADA</span></span></h1><p class="mb-6 text-lg text-default-500" data-v-e42e1a49>Simulations réelles et captivantes, inspirées de sujets d’actualité. En quête de succès ? Accédez aux meilleures ressources pour décrocher votre TCF !</p><div class="flex items-center gap-2.5" data-v-e42e1a49><a href="#" data-v-e42e1a49><button type="button" class="btn bg-primary text-white" data-v-e42e1a49>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:rocket",
        class: "size-4"
      }, null, _parent));
      _push(` Commencer gratuitement </button></a><a href="#" data-v-e42e1a49><button type="button" class="btn hover:bg-danger border border-dashed border-danger hover:text-white bg-transparent text-danger" data-v-e42e1a49>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:shopping-cart",
        class: "size-4"
      }, null, _parent));
      _push(` Souscrire maintenant </button></a></div></div><div class="order-1 lg:order-2 flex items-center justify-center" data-v-e42e1a49><div class="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg" data-v-e42e1a49><div class="relative w-full h-full" data-v-e42e1a49><div class="${ssrRenderClass(["absolute w-full h-full transition-opacity duration-700 ease-in-out", currentSlide.value === 0 ? "opacity-100 z-10" : "opacity-0 z-0"])}" data-v-e42e1a49><img${ssrRenderAttr("src", slides[0])} alt="Slide 1" class="w-full h-full object-cover" data-v-e42e1a49><div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center" data-v-e42e1a49><div class="emoji-container" data-v-e42e1a49><span class="emoji-text" data-v-e42e1a49>▶️</span></div></div></div><div class="${ssrRenderClass(["absolute w-full h-full transition-opacity duration-700 ease-in-out", currentSlide.value === 1 ? "opacity-100 z-10" : "opacity-0 z-0"])}" data-v-e42e1a49><img${ssrRenderAttr("src", slides[1])} alt="Slide 2" class="w-full h-full object-cover" data-v-e42e1a49><div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center" data-v-e42e1a49><div class="emoji-container" data-v-e42e1a49><span class="emoji-text" data-v-e42e1a49>▶️</span></div></div></div><div class="${ssrRenderClass(["absolute w-full h-full transition-opacity duration-700 ease-in-out", currentSlide.value === 2 ? "opacity-100 z-10" : "opacity-0 z-0"])}" data-v-e42e1a49><img${ssrRenderAttr("src", slides[2])} alt="Slide 3" class="w-full h-full object-cover" data-v-e42e1a49><div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center" data-v-e42e1a49><div class="emoji-container" data-v-e42e1a49><span class="emoji-text" data-v-e42e1a49>▶️</span></div></div></div></div><div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2" data-v-e42e1a49><!--[-->`);
      ssrRenderList(slides, (_, index) => {
        _push(`<button class="${ssrRenderClass(["w-2.5 h-2.5 rounded-full transition-all duration-300", currentSlide.value === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white/75"])}" data-v-e42e1a49></button>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/one-page/components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e42e1a49"]]);

export { Hero as default };
//# sourceMappingURL=Hero-BI25pBRh.mjs.map
