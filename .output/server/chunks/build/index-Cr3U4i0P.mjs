import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import _sfc_main$2 from './EmailAnalyticsStats-BNgXZeXl.mjs';
import _sfc_main$3 from './EmailHealthStats-MjDni1V9.mjs';
import _sfc_main$4 from './EmailData-BntB_EFw.mjs';
import _sfc_main$5 from './EmailMarketing-bxv-e2Sz.mjs';
import _sfc_main$6 from './Experience-64VtcNrX.mjs';
import _sfc_main$7 from './EmailPerformance-CbsBYJgA.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import '@iconify/vue';
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
import './index-CrQieO5U.mjs';
import './index-C8a9Gwrn.mjs';
import './index-CgrDkO63.mjs';
import 'simplebar-vue';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './logo-sm-RLKHF8Zf.mjs';
import './AppMenu-wIVvB5t3.mjs';
import './data-DUV_uuTB.mjs';
import './MenuItem-DRf2TIbN.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import './MenuItemWithChildren-BV2E1r8c.mjs';
import './index-0bc88ocl.mjs';
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
import './data-CrsmG9js.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Email Analytics");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              title: "Email Analytics",
              subtitle: "Dashboards"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`<div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageTitle, {
                title: "Email Analytics",
                subtitle: "Dashboards"
              }),
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$3),
              createVNode("div", { class: "grid lg:grid-cols-4 grid-cols-1 gap-5 mb-5" }, [
                createVNode(_sfc_main$4),
                createVNode(_sfc_main$5),
                createVNode(_sfc_main$6)
              ]),
              createVNode(_sfc_main$7)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cr3U4i0P.mjs.map
