import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
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
      _push(`<div class="mt-8 text-center"><h4 class="mb-2.5 text-xl font-semibold text-primary">Welcome Back !</h4><p class="text-base text-default-500">Sign in to continue to Tailwick.</p></div><form action="/" class="text-left w-full mt-10"><div class="mb-4"><label for="email" class="block font-medium text-default-900 text-sm mb-2">Username/ Email ID</label><input type="text" id="email" class="form-input" placeholder="Enter Username or email"></div><div class="mb-4"><a href="/cover-auth/reset-pass" class="text-primary font-medium text-sm mb-2 float-end">Forgot Password ?</a><label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label><input type="text" id="Password" class="form-input" placeholder="Enter Password"></div><div class="flex items-center gap-2 mb-4"><input id="checkbox-1" type="checkbox" class="form-checkbox"><label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label></div><div class="mt-10 text-center"><button type="submit" class="btn bg-primary text-white w-full">Sign In</button></div><div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0"><h4 class="relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card">Sign In With</h4></div><div class="flex w-full justify-center items-center gap-2"><a href="" class="btn bg-card border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:google-icon",
        class: "iconify-color"
      }, null, _parent));
      _push(` Use Google </a><a href="" class="btn bg-card border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:apple",
        class: "iconify text-mono"
      }, null, _parent));
      _push(` Use Apple </a></div><div class="mt-10 text-center"><p class="text-base text-default-500"> Don&#39;t have an Account ? <a href="/cover-auth/register" class="font-semibold underline hover:text-primary transition duration-200">SignUp</a></p></div></form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/cover-auth/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DPzzHaO8.mjs.map
