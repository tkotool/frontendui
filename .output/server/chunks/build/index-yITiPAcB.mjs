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
      _push(`<div class="mt-8"><h4 class="mb-2 text-primary text-xl font-semibold">Set a New Password</h4><p class="text-base mb-8 text-default-500">Your new password should be distinct from any of your prior passwords</p></div><form action="/"><div class="text-start"><label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Password</label><input type="text" id="Email" class="form-input" placeholder="Password"></div><div class="text-start mt-4"><label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Confirm Password</label><input type="text" id="Email" class="form-input" placeholder="Confirm Password"></div><div class="flex items-center gap-2 mt-4"><input id="checkbox-1" type="checkbox" class="form-checkbox"><label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label></div><div class="mt-8"><button type="button" class="btn bg-primary text-white w-full">Reset Password</button></div><div class="mt-4 text-center"><p class="text-base text-default-800">Hold on, I&#39;ve got my password... <a href="/cover-auth/login" class="text-primary underline"> Click here </a></p></div></form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/cover-auth/create-pass/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-yITiPAcB.mjs.map
