import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "relative py-20 bg-blue-700/80 dark:bg-blue-900"
      }, _attrs))}><div class="absolute size-125 border border-dashed rotate-45 border-t-primary border-l-primary border-r-default-700 border-b-default-700 rounded-full right-40 -bottom-62.5 z-10 lg:block hidden"></div><div class="container"><div class="lg:flex justify-between items-center"><div><h1 class="mb-4 capitalize text-blue-50 leading-normal text-4xl font-semibold">Ready to get started with Tailwick</h1><p class="text-lg text-blue-200">Tell us which describes you, and we&#39;ll get in touch with next steps.</p></div><button type="button" class="relative z-20 btn bg-card hover:text-blue-800 text-primary lg:mt-0 md:mt-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:shopping-cart",
        class: "size-4"
      }, null, _parent));
      _push(` Purchase Now </button></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/one-page/components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-CHUVSpd-.mjs.map
