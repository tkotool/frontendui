import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-64 p-5 size-full z-80 card border-b border-default-200 hidden",
        role: "dialog",
        tabindex: "-1",
        "aria-labelledby": "navbarMenu-label",
        id: "navbarMenu"
      }, _attrs))}><div class="flex items-center justify-between"><a href="#"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a><button aria-label="Close" data-hs-overlay="#navbarMenu" class="inline-flex justify-end items-center gap-x-2 rounded-full">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div><div class="pt-8"><ul class="flex flex-col gap-y-4 lg:gap-8 md:gap-6 font-semibold text-sm"><li><a href="#home" class="text-secondary-default-400 hover:text-primary transition duration-300">Accueil</a></li><li><a href="#features" class="text-secondary-default-400 hover:text-primary transition duration-300">Ressources</a></li><li><a href="#about" class="text-secondary-default-400 hover:text-primary transition duration-300">Tarifs</a></li><li><a href="#pricing" class="text-secondary-default-400 hover:text-primary transition duration-300">Documentation</a></li><li><a href="#contact" class="text-secondary-default-400 hover:text-primary transition duration-300">Contact</a></li></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/one-page/components/MobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MobileMenu-CBIgejJO.mjs.map
