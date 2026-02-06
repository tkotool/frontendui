import { _ as __nuxt_component_0 } from './nuxt-link-CYXiNZH-.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
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
import 'deep-pick-omit';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const pathname = computed(() => route.path);
    const isActive = computed(() => {
      return props.item.url && pathname.value.endsWith(props.item.url);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["menu-item", { active: isActive.value }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.item.url,
        class: ["menu-link", { active: isActive.value }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.icon) {
              _push2(`<span class="menu-icon"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: _ctx.item.icon,
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="menu-text"${_scopeId}>${ssrInterpolate(_ctx.item.label)}</span>`);
            if (_ctx.item.badge) {
              _push2(`<span class="${ssrRenderClass([`bg-${_ctx.item.badge.variant}`, "menu-badge"])}"${_scopeId}>${ssrInterpolate(_ctx.item.badge.text)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.icon ? (openBlock(), createBlock("span", {
                key: 0,
                class: "menu-icon"
              }, [
                createVNode(unref(Icon), {
                  icon: _ctx.item.icon,
                  class: "size-4"
                }, null, 8, ["icon"])
              ])) : createCommentVNode("", true),
              createVNode("span", { class: "menu-text" }, toDisplayString(_ctx.item.label), 1),
              _ctx.item.badge ? (openBlock(), createBlock("span", {
                key: 1,
                class: ["menu-badge", `bg-${_ctx.item.badge.variant}`]
              }, toDisplayString(_ctx.item.badge.text), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/sidenav/components/MenuItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MenuItem-DRf2TIbN.mjs.map
