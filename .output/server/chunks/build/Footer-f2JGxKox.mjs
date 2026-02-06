import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { u as us, s as spain, g as germany, f as french, j as japanese, i as italy, r as russia, a as arebian } from './arebian-CDXbpKKs.mjs';
import { g as currentYear } from './server.mjs';
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
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative pt-20 pb-12 bg-default-800 dark:bg-default-900" }, _attrs))}><div class="container"><div class="relative z-10 grid lg:grid-cols-12 md:grid-cols-2 gap-5"><div class="lg:col-span-3"><h5 class="mb-4 font-medium text-white text-lg">Dashboards</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Analytics</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">CRM</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full ore:transition-all before:duration-300 before:ease-linear">HR</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</a></li></ul></div><div class="lg:col-span-3"><h5 class="mb-4 font-medium text-white text-lg">Apps Pages</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce Apps </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Invoices</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email App </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Chat App </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full ore:transition-all before:duration-300 before:ease-linear"> Users Apps </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR Management </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media </a></li></ul></div><div class="lg:col-span-3"><h5 class="mb-4 font-medium text-white text-lg">Resources</h5><ul class="flex flex-col gap-y-3 text-sm"><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">All Resources </a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Blog</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">FAQ&#39;s</a></li><li><a href="" class="relative inline-block transition-all duration-200 ease-linear text-default-400 before:absolute before:border-b before:border-default-400 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Help Center </a></li></ul></div><div class="lg:col-span-3"><div class="flex p-1 lg:w-96 md:w-90 w-86 rounded-md border border-white/14 bg-card/4 relative mb-6"><input type="email" placeholder="tailwick@themesdesign.in" class="px-3 text-sm text-white border-none bg-transparent focus:outline-none focus:ring-0"><button type="button" class="absolute right-2 btn text-white bg-primary hover:bg-primary/90">Subscribe Now</button></div><div><p class="mb-1 text-sm text-default-400">Support Email</p><h5 class="text-lg text-white">support@themesdesign.in</h5></div><div class="mt-6"><p class="mb-1 text-sm text-default-400">Contact Us</p><h5 class="text-lg text-white">+(012) 1202 012 4567</h5></div></div></div><div class="py-5 mt-20 border-y border-default-400/40"><div class="md:flex justify-between items-center"><div class="hs-dropdown relative inline-flex"><button id="hs-dropdown-with-icons" type="button" class="hs-dropdown-toggle py-2 px-4 bg-transparent border border-default-400/40 text-white hover:border-primary rounded hover:text-primary font-semibold gap-2 flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"><img${ssrRenderAttr("src", unref(us))} alt="" class="size-5 rounded-full"> English </button><div class="hs-dropdown-menu p-2 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-38 card z-40 mt-2 divide-y divide-default-200" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons"><div class="p-1 space-y-3 text-sm font-normal"><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(us))} alt="" class="size-4 rounded-full"> English </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(spain))} alt="" class="size-4 rounded-full"> Spanish </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(germany))} alt="" class="size-4 rounded-full"> German </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(french))} alt="" class="size-4 rounded-full"> French </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(japanese))} alt="" class="size-4 rounded-full"> Japanese </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(italy))} alt="" class="size-4 rounded-full"> Italian </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(russia))} alt="" class="size-4 rounded-full"> Russian </a><a class="flex items-center gap-x-3.5 px-3 text-default-600 hover:text-primary" href=""><img${ssrRenderAttr("src", unref(arebian))} alt="" class="size-4 rounded-full"> Arabic </a></div></div></div><div class="flex flex-wrap gap-3 md:mt-0 mt-5"><button type="button" class="size-10 btn border border-default-400/40 bg-transparent rounded-full text-default-400 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:facebook",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 btn border border-default-400/40 bg-transparent rounded-full text-default-400 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:linkedin",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 btn border border-default-400/40 bg-transparent rounded-full text-default-400 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:instagram",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 btn border border-default-400/40 bg-transparent rounded-full text-default-400 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:twitter",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button type="button" class="size-10 btn border border-default-400/40 bg-transparent rounded-full text-default-400 hover:text-primary">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:youtube",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div></div><div class="text-base mt-12 text-center text-default-400"><p>${ssrInterpolate(unref(currentYear))} © Develop by <a href="" class="underline text-white hover:text-primary">DevTool</a></p></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/one-page/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-f2JGxKox.mjs.map
