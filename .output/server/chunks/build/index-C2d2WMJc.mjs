import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { m as mordern, L as LanguageDropdown, l as logomodern } from './LanguageDropdown-h4Vv0LHw.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import './arebian-CDXbpKKs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-950" }, _attrs))}><div class="absolute inset-0 opacity-20"><img${ssrRenderAttr("src", unref(mordern))} alt=""></div><div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10"><div class="flex flex-col h-full w-full"><div class="flex justify-end">`);
      _push(ssrRenderComponent(LanguageDropdown, null, null, _parent));
      _push(`</div><div class="my-auto"><div class="mt-8"><h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4><p class="text-base mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p></div><form action="/"><div class="grid grid-cols-4 gap-2"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"><input type="text" class="form-input text-center" placeholder="•" maxlength="1"></div><div class="mt-10"><button type="button" class="btn bg-primary text-white w-full">Confirm</button></div></form></div><div class="mt-5"><span class="font-base">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:copywrite",
        class: "iconify align-middle text-default-500"
      }, null, _parent));
      _push(` 2025 Tailwick. Crafted with `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:heart-filled",
        class: "iconify align-middle text-danger"
      }, null, _parent));
      _push(` by <a href="#" class="text-mono hover:text-primary transition duration-200 underline">Themesdesign</a></span></div></div></div><div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 grow"><div><a href="/"><img${ssrRenderAttr("src", unref(logolight))} alt="" class="h-7 mb-14 mx-auto block"></a><img${ssrRenderAttr("src", unref(logomodern))} alt="" class="mx-auto rounded-xl block object-cover w-md"><div class="mt-10 tetx-center"><h3 class="mb-3 text-blue-50 text-2xl font-semibold text-center">Tools For Crafting Your Business&#39;s Brand Identity</h3><p class="text-blue-300 text-base w-2xl text-center">Unlock the potential of our versatile branding tools, designed to empower your business in shaping a distinctive and impactful brand. Elevate your business&#39;s image and leave a lasting impression with our comprehensive branding solutions.</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/mordern-auth/two-steps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C2d2WMJc.mjs.map
