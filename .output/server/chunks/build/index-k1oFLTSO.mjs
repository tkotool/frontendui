import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { A as AuthRight } from './AuthRight-CXH1FF1G.mjs';
import { e as email } from './auth-email-Z99d6XC8.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './arebian-CDXbpKKs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-card/70 rounded-lg w-2/3 mx-auto"><div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0"><div class="lg:col-span-5"><div class="text-center px-10 py-12"><div class="mt-8"><h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4><p class="text-base mb-8 text-default-500">Did you not receive an email? Please <a href="#" class="text-primary"> try again</a></p><button type="button" class="btn bg-primary text-white w-full">Skip Now</button><div class="pt-10 text-center"><img${ssrRenderAttr("src", unref(email))} alt="" class="block w-2/3 mx-auto"></div></div></div></div>`);
      _push(ssrRenderComponent(AuthRight, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/boxed-auth/verify-email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-k1oFLTSO.mjs.map
