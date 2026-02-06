import { a as useLayout, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$4 from './index-CrQieO5U.mjs';
import _sfc_main$1 from './index-C8a9Gwrn.mjs';
import _sfc_main$2 from './index-CgrDkO63.mjs';
import _sfc_main$3 from './index-0bc88ocl.mjs';
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
import '@iconify/vue';
import 'simplebar-vue';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './logo-sm-RLKHF8Zf.mjs';
import './AppMenu-wIVvB5t3.mjs';
import './data-DUV_uuTB.mjs';
import './MenuItem-DRf2TIbN.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import './MenuItemWithChildren-BV2E1r8c.mjs';
import './CustomizerToggler-CfuET3W0.mjs';
import './LanguageDropdown-BpE4DRuo.mjs';
import './arebian-CDXbpKKs.mjs';
import './NotificationDropdown-9jVU8SDl.mjs';
import './avatar-3-DffBtZtQ.mjs';
import './avatar-5-DeNxQLba.mjs';
import './avatar-7-CbAcGjRM.mjs';
import './ThemeToggler-gK4JAuSI.mjs';
import './UserProfile-jxbohxoO.mjs';
import './avatar-1-so5nc_yQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vertical",
  __ssrInlineRender: true,
  props: {
    mainClass: {}
  },
  setup(__props) {
    const { layout, setSideNavSize } = useLayout();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<!--[--><div class="wrapper">`);
      if (unref(layout).sidenav.size === "offcanvas") {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else if (unref(layout).sidenav.size !== "hidden") {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="page-content">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<main class="${ssrRenderClass(_ctx.mainClass)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/vertical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vertical-CZx33MWl.mjs.map
