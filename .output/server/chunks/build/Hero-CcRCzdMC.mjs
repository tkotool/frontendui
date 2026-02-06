import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const faq = "" + __buildAssetsURL("faq.4CrDQ5e5.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card relative overflow-hidden mb-6" }, _attrs))}><div class="card-body"><div class="grid lg:grid-cols-3 gap-5"><div class="lg:col-span-2"><div class="md:w-2xl"><h4 class="mb-3 text-xl font-semibold text-default-800">Explore support options for our products, fundamental knowledge, and beyond</h4><p class="mb-5 text-default-500 text-sm">Open the door to a wealth of resources and expert guidance, allowing you to gain a deeper understanding of our products and access a treasure trove of additional knowledge.</p><div class="relative"><input type="email" class="form-input form-input-lg" placeholder="Ask a question"><div class="absolute inset-y-0 end-4 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div></div><div class="flex flex-wrap gap-2.5 mt-3"><span class="py-0.5 px-2.5 bg-default-200 text-default-600 text-xs font-semibold rounded">Install Vite</span><span class="py-0.5 px-2.5 bg-default-200 text-default-600 text-xs font-semibold rounded">React</span><span class="py-0.5 px-2.5 bg-default-200 text-default-600 text-xs font-semibold rounded">Angular</span><span class="py-0.5 px-2.5 bg-default-200 text-default-600 text-xs font-semibold rounded">Vue</span></div></div><div class="lg:col-span-1 lg:block hidden"><img${ssrRenderAttr("src", unref(faq))} alt="" class="absolute end-8 -top-28 -rotate-45 h-125"></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/faqs/components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Hero-CcRCzdMC.mjs.map
