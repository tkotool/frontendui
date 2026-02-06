import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { menuItems } from './data-DUV_uuTB.mjs';
import _sfc_main$2 from './MenuItem-DRf2TIbN.mjs';
import _sfc_main$1 from './MenuItemWithChildren-BV2E1r8c.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const openMenuKey = ref(null);
    const setOpenMenuKey = (key) => {
      openMenuKey.value = key;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "side-nav p-3 hs-accordion-group" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(menuItems), (item, idx) => {
        _push(`<!--[-->`);
        if (item.isTitle) {
          _push(`<li class="menu-title"><span>${ssrInterpolate(item.label)}</span></li>`);
        } else {
          _push(`<!--[-->`);
          if (item.children) {
            _push(ssrRenderComponent(_sfc_main$1, {
              item,
              "open-menu-key": openMenuKey.value,
              "set-open-menu-key": setOpenMenuKey
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$2, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/sidenav/components/AppMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppMenu-wIVvB5t3.mjs.map
