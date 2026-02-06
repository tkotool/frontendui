import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { A as AuthRight } from './AuthRight-CXH1FF1G.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './arebian-CDXbpKKs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-card/70 rounded-lg w-2/3 mx-auto"><div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0"><div class="lg:col-span-5"><div class="text-center px-10 py-12"><div class="mt-8 text-center"><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:log-out",
        class: "size-6 text-purple-500 fill-purple-100 mx-auto"
      }, null, _parent));
      _push(`</div><h4 class="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4><p class="mb-8 text-base text-default-500">Thank you for using tailwick admin template</p></div><a href="/boxed-auth/login"><button class="btn bg-primary text-white w-full">Sign In</button></a></div></div>`);
      _push(ssrRenderComponent(AuthRight, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/boxed-auth/logout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Drz3hG-h.mjs.map
