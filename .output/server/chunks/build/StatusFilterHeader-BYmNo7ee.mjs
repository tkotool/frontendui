import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusFilterHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-header" }, _attrs))}><div class="md:flex items-center md:space-y-0 space-y-4 gap-3"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for name,email"><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 flex items-center text-default-500 fill-default-100"
      }, null, _parent));
      _push(`</div></div><select class="form-input form-input-sm"><option selected>select status</option><option>Hidden</option><option>Rejected</option><option>Verified</option><option>Waiting</option></select></div><div class="flex gap-2 items-center flex-wrap"><button type="button" class="btn btn-sm bg-transparent border border-dashed border-primary text-primary hover:bg-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:download",
        class: "size-4"
      }, null, _parent));
      _push(` Import </button><button type="button" class="btn btn-sm size-7.5 bg-default-100 text-default-500 hover:bg-default-1500 hover:text-white">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/list/components/StatusFilterHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StatusFilterHeader-BYmNo7ee.mjs.map
