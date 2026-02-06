import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { e as email } from './auth-email-Z99d6XC8.mjs';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen w-full flex justify-center items-center py-16 md:py-10" }, _attrs))}><div class="card md:w-lg w-screen z-10"><div class="text-center px-10 py-12"><a href="/" class="flex justify-center"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 flex dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:flex"></a><div class="mt-8 text-center"><h4 class="mb-3 text-xl font-semibold text-primary">Verify Email</h4><p class="text-base text-default-500 mb-4">Did you not receive an email? Please <a href="#" class="text-primary"> try again</a></p><button type="button" class="btn btn-sm bg-primary text-white">Skip Now</button><div class="mt-10 text-center"><img${ssrRenderAttr("src", unref(email))} alt="" class="block w-1/2 mx-auto"></div></div></div></div><div class="absolute inset-0 overflow-hidden"><svg aria-hidden="true" class="absolute inset-0 size-full fill-black/2 stroke-black/5 dark:fill-white/2.5 dark:stroke-white/2.5"><defs><pattern id="authPattern" width="56" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#authPattern)"></rect></svg></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/verify-email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DXADcB5C.mjs.map
