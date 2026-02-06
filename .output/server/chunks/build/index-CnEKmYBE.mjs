import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { e as email } from './auth-email-Z99d6XC8.mjs';
import { m as mordern, L as LanguageDropdown, l as logomodern } from './LanguageDropdown-h4Vv0LHw.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import './arebian-CDXbpKKs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-950" }, _attrs))}><div class="absolute inset-0 opacity-20"><img${ssrRenderAttr("src", unref(mordern))} alt="svg image"></div><div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10"><div class="flex flex-col h-full w-full"><div class="flex justify-end">`);
      _push(ssrRenderComponent(LanguageDropdown, null, null, _parent));
      _push(`</div><div class="my-auto"><div class="mt-8 text-center"><h4 class="mb-3 text-xl font-semibold text-primary">Verify Email</h4><p class="text-base text-default-500 mb-4"> Did you not receive an email? Please <a href="#" class="text-primary">try again</a></p><button type="button" class="btn btn-sm bg-primary text-white">Skip Now</button><div class="pt-10 text-center"><img${ssrRenderAttr("src", unref(email))} alt="" class="block mx-auto w-1/2"></div></div></div><div class="mt-5"><span class="text-sm text-default-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:copyright",
        class: "iconify align-middle"
      }, null, _parent));
      _push(` 2025 Tailwick. Crafted with `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:heart-filled",
        class: "iconify align-middle text-danger"
      }, null, _parent));
      _push(` by <a href="https://themesdesign.in/" target="_blank" class="text-default-800 hover:text-primary transition duration-200 underline">Themesdesign</a></span></div></div></div><div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 flex-grow"><div><a href="/" class="/"><img${ssrRenderAttr("src", unref(logolight))} alt="" class="h-7 mb-14 mx-auto block"></a><img${ssrRenderAttr("src", unref(logomodern))} alt="" class="mx-auto rounded-xl block object-cover w-md"><div class="mt-10 text-center"><h3 class="mb-3 text-blue-50 text-2xl font-semibold text-center">Tools For Crafting Your Business&#39;s Brand Identity</h3><p class="text-blue-300 text-base w-2xl text-center">Unlock the potential of our versatile branding tools, designed to empower your business in shaping a distinctive and impactful brand. Elevate your business&#39;s image and leave a lasting impression with our comprehensive branding solutions.</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/mordern-auth/verify-email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CnEKmYBE.mjs.map
