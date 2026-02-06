import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { e as email } from './auth-email-Z99d6XC8.mjs';
import { L as LogoBox } from './LogoBox-DHXDNCqQ.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-card/70 rounded-lg w-lg relative"><div class="text-center px-10 py-12">`);
      _push(ssrRenderComponent(LogoBox, null, null, _parent));
      _push(`<div class="mt-8 text-center"><h4 class="mb-3 text-xl font-semibold text-primary">Verify Email</h4><p class="text-base text-default-500 mb-4">Did you not receive an email? Please <a href="#" class="text-primary"> try again</a></p><button type="button" class="btn btn-sm bg-primary text-white">Skip Now</button><div class="pt-10 text-center"><img${ssrRenderAttr("src", unref(email))} alt="" class="block w-2/3 mx-auto"></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/cover-auth/verify-email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BSAAniCz.mjs.map
