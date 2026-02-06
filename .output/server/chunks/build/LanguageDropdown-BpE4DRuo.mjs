import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { u as us, s as spain, g as germany, f as french, j as japanese, i as italy, r as russia, a as arebian } from './arebian-CDXbpKKs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LanguageDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "topbar-item hs-dropdown [--placement:bottom-right] relative inline-flex" }, _attrs))}><button class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"><img${ssrRenderAttr("src", unref(us))} alt="" class="size-4.5 rounded"></button><div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(us))} alt="" class="size-4 rounded-full"> English </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(spain))} alt="" class="size-4 rounded-full"> Spanish </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(germany))} alt="" class="size-4 rounded-full"> German </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(french))} alt="" class="size-4 rounded-full"> French </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(japanese))} alt="" class="size-4 rounded-full"> Japanese </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(italy))} alt="" class="size-4 rounded-full"> Italian </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(russia))} alt="" class="size-4 rounded-full"> Russian </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(arebian))} alt="" class="size-4 rounded-full"> Arabic </a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/topbar/components/LanguageDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=LanguageDropdown-BpE4DRuo.mjs.map
