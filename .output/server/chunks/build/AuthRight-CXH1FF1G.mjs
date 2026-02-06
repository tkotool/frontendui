import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import { u as us, s as spain, g as germany, f as french, j as japanese, i as italy, r as russia, a as arebian } from './arebian-CDXbpKKs.mjs';

const boxed = "" + __buildAssetsURL("boxed.LnU6Ti5x.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthRight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-7 bg-card/60 mx-2 my-2 shadow-[0_14px_15px_-3px_#f1f5f9,0_4px_6px_-4px_#f1f5f9] dark:shadow-none rounded-lg" }, _attrs))}><div class="pt-10 px-10 h-full"><div class="flex items-center justify-between gap-3"><div><a href="/"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a></div><div class="hs-dropdown [--placement:bottom-right] relative inline-flex"><button type="button" class="hs-dropdown-toggle py-2 px-4 bg-transparent border border-default-200 text-default-600 hover:border-primary rounded-md hover:text-primary font-medium text-sm gap-2 flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"><img${ssrRenderAttr("src", unref(us))} alt="" class="size-5 rounded-full"> English </button><div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(us))} alt="" class="size-4 rounded-full"> English </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(spain))} alt="" class="size-4 rounded-full"> Spanish </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(germany))} alt="" class="size-4 rounded-full"> German </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(french))} alt="" class="size-4 rounded-full"> French </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(japanese))} alt="" class="size-4 rounded-full"> Japanese </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(italy))} alt="" class="size-4 rounded-full"> Italian </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(russia))} alt="" class="size-4 rounded-full"> Russian </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""><img${ssrRenderAttr("src", unref(arebian))} alt="" class="size-4 rounded-full"> Arabic </a></div></div></div><div class="mt-auto"><img${ssrRenderAttr("src", unref(boxed))} alt=""></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthRight = Object.assign(_sfc_main, { __name: "AuthRight" });

export { AuthRight as A };
//# sourceMappingURL=AuthRight-CXH1FF1G.mjs.map
