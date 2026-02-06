import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { g as currentYear } from './server.mjs';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative md:pt-20 pt-12 md:pb-0 border-t border-default-200" }, _attrs))}><div class="absolute -top-16 start-0 size-64 bg-purple-500/10 blur-3xl"></div><div class="container"><div class="grid grid-cols-12 md:gap-12 gap-6"><div class="lg:col-span-4 col-span-12"><div class="mb-5"><a href="#"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-7 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-7 hidden dark:block"></a></div><p class="mb-5 text-sm text-default-500">Premium Multipurpose Admin &amp; Dashboard Template You can build any type of web application like eCommerce, CRM, CMS, Project management apps, Admin Panels, etc using Tailwick.</p><div class="flex flex-wrap gap-3 md:mt-0 mt-5"><button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:facebook",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:linkedin",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:instagram",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:twitter",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:youtube",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div><div class="lg:col-span-3 md:col-span-4 col-span-12"><h5 class="mb-4 font-medium text-lg text-default-700">Dashboards</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear text-default-600 hover:text-default-900 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Analytics</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">CRM</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</a></li></ul></div><div class="lg:col-span-3 md:col-span-4 col-span-12"><h5 class="mb-4 font-medium text-lg text-default-700">About Us</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">News</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Service</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Our Policy</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Support 24/7</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">FAQ&#39;s</a></li></ul></div><div class="lg:col-span-2 md:col-span-4 col-span-12"><h5 class="mb-4 font-medium text-lg text-default-700">Get Help</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">About Us</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Contact Us</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Payment Policy</a></li><li><a href="#" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Return Policy</a></li></ul></div></div></div><div class="lg:py-10 py-6 mt-12 text-center text-default-500 text-base border-t border-default-200"><p>${ssrInterpolate(unref(currentYear))} © Tailwick. Design &amp; Develop by <a href="https://themesdesign.in/" target="_blank" class="underline text-default-800 font-bold transition-all hover:text-primary">Themesdesign</a></p></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-CUu1j6kb.mjs.map
