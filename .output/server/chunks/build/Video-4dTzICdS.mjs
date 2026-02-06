import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-3 grid-cols-1 gap-5" }, _attrs))}><div class="card"><div class="card-body"><a href="https://www.youtube.com/embed/qYgogv4R8zg?si=_YxUDmc2fDgHyPae" target="_blank"><h6 class="mb-6 text-base text-default-700 font-semibold">Setting Up Tailwind CSS</h6></a><div class="flex justify-center"><iframe class="md:w-full rounded-md md:aspect-video" src="https://www.youtube.com/embed/qYgogv4R8zg?si=_YxUDmc2fDgHyPae" frameborder="0"></iframe></div></div></div><div class="card"><div class="card-body"><a href="https://www.youtube.com/embed/TrftauE2Vyk?si=HRCFmq5956C01yB3" target="_blank"><h6 class="mb-6 text-base text-default-700 font-semibold">Composing Utilities with @apply – Tailwind CSS</h6></a><div class="flex justify-center"><iframe class="md:w-full rounded-md md:aspect-video" src="https://www.youtube.com/embed/TrftauE2Vyk?si=HRCFmq5956C01yB3" frameborder="0"></iframe></div></div></div><div class="card"><div class="card-body"><a href="https://www.youtube.com/embed/_CntOc4hBcg?si=-gNbpwS69E8EmjvI" target="_blank"><h6 class="mb-6 text-base text-default-700 font-semibold">Sorting Tailwind CSS Classes Automatically with Prettier</h6></a><div class="flex justify-center"><iframe class="md:w-full rounded-md md:aspect-video" src="https://www.youtube.com/embed/_CntOc4hBcg?si=-gNbpwS69E8EmjvI" frameborder="0"></iframe></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/faqs/components/Video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Video as default };
//# sourceMappingURL=Video-4dTzICdS.mjs.map
