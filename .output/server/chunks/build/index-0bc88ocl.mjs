import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import _sfc_main$4 from './CustomizerToggler-CfuET3W0.mjs';
import _sfc_main$1 from './LanguageDropdown-BpE4DRuo.mjs';
import _sfc_main$3 from './NotificationDropdown-9jVU8SDl.mjs';
import _sfc_main$2 from './ThemeToggler-gK4JAuSI.mjs';
import _sfc_main$5 from './UserProfile-jxbohxoO.mjs';
import { a as useLayout } from './server.mjs';
import './arebian-CDXbpKKs.mjs';
import 'simplebar-vue';
import './avatar-3-DffBtZtQ.mjs';
import './avatar-5-DeNxQLba.mjs';
import './avatar-7-CbAcGjRM.mjs';
import './avatar-1-so5nc_yQ.mjs';
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
    const { layout, setSideNavSize, toggleMobileMenu } = useLayout();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200" }, _attrs))}><div class="w-full flex items-center justify-between px-6"><div class="flex items-center gap-5"><button id="button-toggle-menu" class="hs-overlay btn btn-icon size-8 hover:bg-default-150 rounded">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:align-left",
        class: "iconify text-xl"
      }, null, _parent));
      _push(`</button><div class="lg:flex hidden items-center relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:search",
        class: "iconify text-base"
      }, null, _parent));
      _push(`</div><input type="search" id="topbar-search" class="form-input px-12 text-sm rounded border-transparent focus:border-transparent w-60" placeholder="Search something..."><button type="button" class="absolute inset-y-0 end-0 flex items-center pe-4"><span class="ms-auto font-medium">⌘ K</span></button></div></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/topbar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0bc88ocl.mjs.map
