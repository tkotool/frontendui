import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const email = "" + __buildAssetsURL("email-dashboard.D_Qu6bsD.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card"><div class="card-body"><h4 class="mb-3.5 text-default-800 text-xl leading-relaxed font-semibold">Experience Our Fresh Email Composition Interface</h4><p class="mb-5 text-default-500">A local-part, the symbol @, and a domain, which may be a domain name or an IP address enclosed in brackets.</p><a href="/apps/email" class="mb-3 btn bg-primary text-white transition-all">Compose Email</a><div class="flex justify-end"><img${ssrRenderAttr("src", unref(email))} alt="" class="-scale-x-100 h-48"></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/email/components/Experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Experience-64VtcNrX.mjs.map
