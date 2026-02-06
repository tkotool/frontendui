import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center md:justify-between flex-wrap gap-2 mb-4 print:hidden" }, _attrs))}><h4 class="text-default-900 text-lg font-semibold">${ssrInterpolate(_ctx.title)}</h4><div class="md:flex hidden items-center gap-2 text-sm font-semibold"><a href="#" class="text-sm font-medium text-default-700">Tailwick</a>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:chevron-right",
        class: "text-sm flex-shrink-0 text-default-500 rtl:rotate-180"
      }, null, _parent));
      _push(`<a href="#" class="text-sm font-medium text-default-700">${ssrInterpolate(_ctx.subtitle)}</a>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:chevron-right",
        class: "text-sm flex-shrink-0 text-default-500 rtl:rotate-180"
      }, null, _parent));
      _push(`<a href="#" class="text-sm font-medium text-default-700" aria-current="page">${ssrInterpolate(_ctx.title)}</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageTitle = Object.assign(_sfc_main, { __name: "PageTitle" });

export { PageTitle as P };
//# sourceMappingURL=PageTitle-Dzh_xAnX.mjs.map
