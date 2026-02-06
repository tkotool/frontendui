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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-card/70 rounded-lg w-2/3 mx-auto"><div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0"><div class="lg:col-span-5"><div><div class="flex justify-center gap-x-3" aria-label="Tabs" role="tablist" aria-orientation="horizontal"><button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300 active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabsForEmail" aria-controls="tabsForEmail" role="tab">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mail",
        class: "size-4"
      }, null, _parent));
      _push(` Email </button><button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabsForPhone" aria-controls="tabsForPhone" role="tab">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:smartphone",
        class: "size-4"
      }, null, _parent));
      _push(` Phone </button></div><div class="mt-10 w-110 mx-auto"><div id="tabsForEmail" role="tabpanel" aria-labelledby="tabs-with-underline-item-1"><form action="/" class="text-left w-full mt-10"><div class="mb-4"><label for="email" class="block font-medium text-default-900 text-sm mb-2">Email ID</label><input type="text" id="email" class="form-input" placeholder="Enter Username or email"></div><div class="mb-4"><label for="Username" class="block font-medium text-default-900 text-sm mb-2">Username</label><input type="text" id="Username" class="form-input" placeholder="Enter Username"></div><div class="mb-4"><label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label><input type="text" id="Password" class="form-input" placeholder="Enter Password"></div><p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <a href="#" class="underline">Terms of Use</a></p><div class="mt-10 text-center"><button type="button" class="btn bg-primary text-white w-full">Sign In</button></div><div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0"><h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create account with</h4></div><div class="flex w-full justify-center items-center gap-2"><a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:google-icon",
        class: "iconify-color"
      }, null, _parent));
      _push(` Use Google </a><a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:apple",
        class: "iconify"
      }, null, _parent));
      _push(` Use Apple </a></div><div class="mt-10 text-center"><p class="text-base text-default-500"> Already have an account ? <a href="/boxed-auth/login" class="font-semibold underline hover:text-primary transition duration-200">Login</a></p></div></form></div><div id="tabsForPhone" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2"><form action="/" class="text-left w-full mt-10"><div class="mb-4"><label for="Phone Number" class="block font-medium text-default-900 text-sm mb-2">Phone Number</label><input type="text" id="Phone Number" class="form-input" placeholder="Enter phone"></div><div class="mb-4"><label for="Username" class="block font-medium text-default-900 text-sm mb-2">Username</label><input type="text" id="Username" class="form-input" placeholder="Enter Username"></div><div class="mb-4"><label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label><input type="text" id="Password" class="form-input" placeholder="Enter Password"></div><p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <a href="#" class="underline">Terms of Use</a></p><div class="mt-10 text-center"><button type="button" class="btn bg-primary text-white w-full">Sign In</button></div><div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0"><h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create account with</h4></div><div class="flex w-full justify-center items-center gap-2"><a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:google-icon",
        class: "iconify-color"
      }, null, _parent));
      _push(` Use Google </a><a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:apple",
        class: "iconify"
      }, null, _parent));
      _push(` Use Apple </a></div><div class="mt-10 text-center"><p class="text-base text-default-500"> Already have an account ? <a href="/basic-auth/login" class="font-semibold underline hover:text-primary transition duration-200">Login</a></p></div></form></div></div></div></div>`);
      _push(ssrRenderComponent(AuthRight, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/boxed-auth/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_oXfXdiO.mjs.map
