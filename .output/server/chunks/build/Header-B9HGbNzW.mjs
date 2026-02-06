import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import _sfc_main$1 from './MobileMenu-CBIgejJO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header><nav class="fixed inset-x-0 top-0 z-50 bg-card py-6 shadow flex justify-between items-center"><div class="container"><div class="grid lg:grid-cols-12 md:grid-cols-10 grid-cols-2 items-center"><div class="lg:col-span-2 md:col-span-2"><a href="/"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a></div><div class="lg:col-span-8 md:col-span-6 md:block hidden"><ul class="flex items-center justify-center lg:gap-8 md:gap-6 font-medium text-sm"><li><a href="#home" class="text-default-800 hover:text-primary transition duration-300">Accueil</a></li><li><a href="#features" class="text-default-800 hover:text-primary transition duration-300">Ressources</a></li><li><a href="#about" class="text-default-800 hover:text-primary transition duration-300">Tarifs</a></li><li><a href="#pricing" class="text-default-800 hover:text-primary transition duration-300">Documentation</a></li><li><a href="#contact" class="text-default-800 hover:text-primary transition duration-300">Contact</a></li></ul></div><div class="lg:col-span-2 md:col-span-2 flex items-center justify-end gap-2"><button class="btn size-9 bg-primary text-white md:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="navbarMenu" data-hs-overlay="#navbarMenu">`);
      _push(ssrRenderComponent(unref(Icon), { icon: "lucide:menu" }, null, _parent));
      _push(`</button><a href="#" class="flex justify-end"><button type="button" class="btn bg-primary text-white"> Sign In `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:log-in",
        class: "size-4"
      }, null, _parent));
      _push(`</button></a></div></div></div></nav></header>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/one-page/components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Header-B9HGbNzW.mjs.map
