import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import _sfc_main$1 from './MobileMenu-BPMUeWRY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header><nav class="fixed inset-x-0 top-0 z-50 bg-card py-6 border-b border-default-150 flex justify-between items-center"><div class="container"><div class="grid lg:grid-cols-12 md:grid-cols-10 grid-cols-3 items-center"><div class="lg:col-span-2 md:col-span-2 col-span-1"><a href="/"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a></div><div class="lg:col-span-8 md:col-span-6 md:block hidden"><ul class="flex items-center justify-center lg:gap-8 md:gap-6 font-medium text-sm"><li><a href="#home" class="text-default-800 hover:text-primary transition duration-300">Home</a></li><li><a href="#product" class="text-default-800 hover:text-primary transition duration-300">Our Products </a></li><li><a href="#Features" class="text-default-800 hover:text-primary transition duration-300">Features</a></li><li><a href="#About" class="text-default-800 hover:text-primary transition duration-300">About Us</a></li><li><a href="#Feedback" class="text-default-800 hover:text-primary transition duration-300">Feedback</a></li></ul></div><div class="lg:col-span-2 md:col-span-2 col-span-2 flex items-center justify-end gap-4"><button class="flex justify-center items-center size-9 bg-primary/90 hover:bg-primary text-white rounded md:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="navbarMenu" data-hs-overlay="#navbarMenu">`);
      _push(ssrRenderComponent(unref(Icon), { icon: "lucide:menu" }, null, _parent));
      _push(`</button><button type="button">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:shopping-bag",
        class: "size-4 text-default-500 hover:text-primary transition-all"
      }, null, _parent));
      _push(`</button><a href="#" class="flex justify-end"><button class="btn border-0 bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white"> Sign In `);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Header-B2FtrREm.mjs.map
