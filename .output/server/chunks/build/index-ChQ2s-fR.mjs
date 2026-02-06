import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { L as LogoBox } from './LogoBox-DHXDNCqQ.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-default-50 rounded-lg w-lg relative"><div class="text-center px-10 py-12">`);
      _push(ssrRenderComponent(LogoBox, null, null, _parent));
      _push(`<div class="mt-8"><h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4><p class="text-base mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p></div><form action="/"><div class="grid grid-cols-4 gap-2"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"></div><div class="mt-10"><button type="button" class="btn bg-primary text-white w-full">Confirm</button></div></form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/cover-auth/two-steps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ChQ2s-fR.mjs.map
