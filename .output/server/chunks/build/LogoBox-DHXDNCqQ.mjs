import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogoBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "/",
        class: "flex justify-center"
      }, _attrs))}><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 flex dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:flex"></a>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogoBox = Object.assign(_sfc_main, { __name: "LogoBox" });

export { LogoBox as L };
//# sourceMappingURL=LogoBox-DHXDNCqQ.mjs.map
