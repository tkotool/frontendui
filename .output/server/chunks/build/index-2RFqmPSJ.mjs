import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import './server.mjs';
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

function useCountdown(targetDate) {
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Coming soon");
    ref(false);
    const { days, hours, minutes, seconds } = useCountdown();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center" }, _attrs))}><div class="relative"><div class="bg-default-100/50 rounded-lg w-lg relative"><div class="text-center px-10 py-12"><div id="countDownText"><a href="/" class="flex justify-center"><img${ssrRenderAttr("src", unref(logodark))} alt="logo dark" class="h-6 block dark:hidden"><img${ssrRenderAttr("src", unref(logolight))} alt="logo light" class="h-6 hidden dark:block"></a><div class="mt-8 text-center"><h4 class="mb-2 text-purple-500 text-xl font-semibold">Coming Soon ...</h4><p class="mb-6 text-base text-default-500">We&#39;ll be here in a brief moment.</p></div><div><div class="mt-8"><div class="flex items-center justify-between mt-14"><div class="p-6 bg-default-150/75 rounded flex items-center justify-center"><div class="text-center"><span id="days" class="text-2xl">${ssrInterpolate(unref(days))}</span><p>Days</p></div></div><div class="p-6 bg-default-150/75 rounded flex items-center justify-center"><div class="text-center"><span id="hours" class="text-2xl">${ssrInterpolate(unref(hours))}</span><p>Hours</p></div></div><div class="p-6 bg-default-150/75 rounded flex items-center justify-center"><div class="text-center"><span id="minutes" class="text-2xl">${ssrInterpolate(unref(minutes))}</span><p>Minutes</p></div></div><div class="p-6 bg-default-150/75 rounded flex items-center justify-center"><div class="text-center"><span id="seconds" class="text-2xl">${ssrInterpolate(unref(seconds))}</span><p>Seconds</p></div></div></div></div><div class="mt-10 text-center"><h5 class="text-lg font-semibold text-default-800 mb-2">Be alerted when our launch happens.</h5><p class="mb-5 text-base text-default-500">Don&#39;t worry, we won&#39;t inundate your inbox 😊</p><form action="#"><div class="flex w-full relative mb-6 lg:mt-0 mt-4"><input type="email" placeholder="Enter your email" class="form-input bg-default-50"><button type="button" class="absolute right-0 m-1 top-0 btn bg-primary text-white btn-sm">Send</button></div></form></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/coming-soon/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2RFqmPSJ.mjs.map
