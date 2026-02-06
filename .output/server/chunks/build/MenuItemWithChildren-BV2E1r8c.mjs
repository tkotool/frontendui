import { defineComponent, computed, ref, watchEffect, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import _sfc_main$1 from './MenuItem-DRf2TIbN.mjs';
import { useRoute } from 'vue-router';
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
import 'deep-pick-omit';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MenuItemWithChildren",
  __ssrInlineRender: true,
  props: {
    item: {},
    openMenuKey: {},
    setOpenMenuKey: { type: Function },
    level: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const pathname = computed(() => route.path);
    const isTopLevel = computed(() => (props.level ?? 0) === 0);
    const localOpen = ref(false);
    const didAutoOpen = ref(false);
    const isActive = computed(() => {
      const isChildActive = (children) => children.some((child) => child.url && pathname.value.includes(child.url) || child.children && isChildActive(child.children));
      return isChildActive(props.item.children || []);
    });
    const isOpen = computed(() => {
      return isTopLevel.value ? props.openMenuKey === props.item.key : localOpen.value;
    });
    watchEffect(() => {
      if (isActive.value && !didAutoOpen.value) {
        if (isTopLevel.value && props.setOpenMenuKey) {
          props.setOpenMenuKey(props.item.key);
        } else {
          localOpen.value = true;
        }
        didAutoOpen.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuItemWithChildren = resolveComponent("MenuItemWithChildren", true);
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["menu-item hs-accordion", { active: isOpen.value }]
      }, _attrs))}><button type="button" class="${ssrRenderClass([{ active: isOpen.value }, "hs-accordion-toggle menu-link w-full"])}">`);
      if (_ctx.item.icon) {
        _push(`<span class="menu-icon">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: _ctx.item.icon
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="menu-text">${ssrInterpolate(_ctx.item.label)}</span><span class="menu-arrow">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "ms-auto transition-transform duration-200"
      }, null, _parent));
      _push(`</span></button><ul style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sub-menu hs-accordion-content hs-accordion-group"><!--[-->`);
      ssrRenderList(_ctx.item.children, (child, idx) => {
        _push(`<!--[-->`);
        if (child.children) {
          _push(ssrRenderComponent(_component_MenuItemWithChildren, {
            item: child,
            level: (_ctx.level ?? 0) + 1
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_sfc_main$1, {
            item: child,
            key: idx
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/sidenav/components/MenuItemWithChildren.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MenuItemWithChildren-BV2E1r8c.mjs.map
