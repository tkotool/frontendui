import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserTableHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between gap-3 flex-wrap items-center mb-5" }, _attrs))}><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for name,email,phone number etc..."><div class="absolute inset-y-0 start-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><div class="flex gap-3 items-center"><button type="button" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="addUserModal" data-hs-overlay="#addUserModal">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(` Add User </button><button type="button" class="btn size-7.5 bg-default-500 text-white hover:bg-default-600">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:sliders-horizontal",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/grid/components/UserTableHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UserTableHeader-Bp3V98FL.mjs.map
