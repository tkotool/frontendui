import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$5 from './About-BlBlhsOt.mjs';
import CTA from './CTA-CU1krZhQ.mjs';
import _sfc_main$4 from './Feature-a1UsphVG.mjs';
import _sfc_main$6 from './Feedback-DrmRlAbx.mjs';
import _sfc_main$7 from './Footer-CUu1j6kb.mjs';
import _sfc_main$1 from './Header-B2FtrREm.mjs';
import _sfc_main$2 from './Hero-DFobginV.mjs';
import _sfc_main$3 from './Product-B8zCR5wc.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import { u as useHead } from './server.mjs';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './avatar-9-DeVQJ4LP.mjs';
import './avatar-2-BDMEXCZB.mjs';
import './avatar-4-VVt-Y7Qo.mjs';
import './avatar-7-CbAcGjRM.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './MobileMenu-BPMUeWRY.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Product");
    useHead({
      bodyAttrs: {
        class: "bg-card"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(CTA, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C8EPMBtM.mjs.map
