import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import simplebar from 'simplebar-vue';
import { l as logodark } from './logo-dark-WX0inbct.mjs';
import { l as logolight } from './logo-light-20UUu8i0.mjs';
import { l as logo } from './logo-sm-RLKHF8Zf.mjs';
import { a as useLayout } from './server.mjs';
import _sfc_main$1 from './AppMenu-wIVvB5t3.mjs';
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
import './data-DUV_uuTB.mjs';
import './MenuItem-DRf2TIbN.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import './MenuItemWithChildren-BV2E1r8c.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { layout, setSideNavSize } = useLayout();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "app-menu",
        class: "app-menu"
      }, _attrs))}><a href="/" class="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs"><div class="logo-light"><img${ssrRenderAttr("src", unref(logolight))} class="logo-lg h-6" alt="Light logo"><img${ssrRenderAttr("src", unref(logo))} class="logo-sm h-6" alt="Small logo"></div><div class="logo-dark"><img${ssrRenderAttr("src", unref(logodark))} class="logo-lg h-6" alt="Dark logo"><img${ssrRenderAttr("src", unref(logo))} class="logo-sm h-6" alt="Small logo"></div></a><div class="absolute top-0 end-5 flex h-topbar items-center justify"><button id="button-hover-toggle" class="">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:circle",
        class: "iconify size-5"
      }, null, _parent));
      _push(`</button></div><div class="relative min-h-0 flex-grow">`);
      _push(ssrRenderComponent(unref(simplebar), {
        class: "size-full",
        "data-simplebar": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/sidenav/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CgrDkO63.mjs.map
