import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "topbar-item hs-dropdown relative inline-flex" }, _attrs))}><button class="cursor-pointer bg-pink-100 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"><img${ssrRenderAttr("src", unref(avatar1))} alt="user-image" class="hs-dropdown-toggle rounded-full size-9.5"></button><div class="hs-dropdown-menu min-w-48" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons"><div class="p-2"><h6 class="mb-2 text-default-500">Welcome to Tailwick</h6><a href="#!" class="flex gap-3"><div class="relative inline-block"><div class="rounded bg-default-200"><img${ssrRenderAttr("src", unref(avatar1))} alt="" class="size-12 rounded"></div><span class="-top-1 -end-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span></div><div><h6 class="mb-1 text-sm font-semibold text-default-800">Paula Keenan</h6><p class="text-default-500">CEO &amp; Founder</p></div></a></div><div class="border-t border-t-default-200 -mx-2 my-2"></div><div class="flex flex-col gap-y-1"><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps/email">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:mail",
        class: "size-4"
      }, null, _parent));
      _push(` Inbox <span class="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">15</span></a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps/chat">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:messages-square",
        class: "size-4"
      }, null, _parent));
      _push(` Chat </a><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/pricing">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:gem",
        class: "size-4"
      }, null, _parent));
      _push(` Upgrade Pro </a><div class="border-t border-default-200 -mx-2 my-1"></div><a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/basic-auth/logout">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:log-out",
        class: "size-4"
      }, null, _parent));
      _push(` Sign Out </a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/topbar/components/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UserProfile-jxbohxoO.mjs.map
