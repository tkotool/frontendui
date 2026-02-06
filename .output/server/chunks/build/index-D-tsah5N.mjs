import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import { a as useLayout } from './server.mjs';
import { Icon } from '@iconify/vue';
import './index-CrQieO5U.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSideNavSize, reset } = useLayout();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Layouts",
              title: "Hidden Sidenav"
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="flex py-3 mb-5 rounded-md mx-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:info-circle",
              class: "size-4 text-primary-700",
              style: { "margin-top": "3px" }
            }, null, _parent2, _scopeId));
            _push2(`  <div class="text-sm text-default-800 leading-relaxed"${_scopeId}><p${_scopeId}> To switch to a <strong${_scopeId}>hidden sidebar</strong>, add <code class="px-1 py-0.5 bg-default-100 rounded text-xs"${_scopeId}>data-sidenav-color=&quot;hidden&quot;</code> to the <code class="px-1 py-0.5 bg-default-100 rounded text-xs"${_scopeId}>&lt;html&gt;</code> tag. To apply this dynamically, use <code class="px-1 py-0.5 bg-default-100 rounded text-xs"${_scopeId}>setSideNavColor(&#39;hidden&#39;)</code> from the <code class="px-1 py-0.5 bg-default-100 rounded text-xs"${_scopeId}>useLayout</code>. </p></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Layouts",
                title: "Hidden Sidenav"
              }),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "flex py-3 mb-5 rounded-md mx-4 mt-4" }, [
                  createVNode(unref(Icon), {
                    icon: "tabler:info-circle",
                    class: "size-4 text-primary-700",
                    style: { "margin-top": "3px" }
                  }),
                  createTextVNode("  "),
                  createVNode("div", { class: "text-sm text-default-800 leading-relaxed" }, [
                    createVNode("p", null, [
                      createTextVNode(" To switch to a "),
                      createVNode("strong", null, "hidden sidebar"),
                      createTextVNode(", add "),
                      createVNode("code", { class: "px-1 py-0.5 bg-default-100 rounded text-xs" }, 'data-sidenav-color="hidden"'),
                      createTextVNode(" to the "),
                      createVNode("code", { class: "px-1 py-0.5 bg-default-100 rounded text-xs" }, "<html>"),
                      createTextVNode(" tag. To apply this dynamically, use "),
                      createVNode("code", { class: "px-1 py-0.5 bg-default-100 rounded text-xs" }, "setSideNavColor('hidden')"),
                      createTextVNode(" from the "),
                      createVNode("code", { class: "px-1 py-0.5 bg-default-100 rounded text-xs" }, "useLayout"),
                      createTextVNode(". ")
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layout/hidden-sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-tsah5N.mjs.map
