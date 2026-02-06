import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative md:py-20 py-12 border-t border-default-200" }, _attrs))}><div class="container"><div class="lg:flex justify-between items-center"><div><h1 class="mb-4 capitalize text-default-800 leading-normal md:text-4xl text-3xl font-semibold">Sign up for update &amp; newsletter</h1><p class="text-lg text-default-500">Tell us which describes you, and we&#39;ll get in touch with next steps.</p></div><div class="flex p-1 lg:w-96 md:w-112 w-86 rounded-md bg-default-200 relative mb-6 lg:mt-0 mt-4"><input type="email" placeholder="tailwick@themesdesign.in" class="px-3 text-sm border-0 ring-0 bg-transparent"><button type="button" class="absolute end-1 top-1.25 btn text-white bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary border-0">Subscribe Now</button></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/CTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CTA = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CTA as default };
//# sourceMappingURL=CTA-CU1krZhQ.mjs.map
