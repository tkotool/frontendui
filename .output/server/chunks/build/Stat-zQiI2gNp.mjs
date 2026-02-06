import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5" }, _attrs))}><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-info bg-info/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:users-2",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="43">43</span></h5><p class="text-default-500">Total Employee</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-danger bg-danger/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:user-x",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="6">6</span></h5><p class="text-default-500">Absent Employee (Today)</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-success bg-success/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:user-check",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="32">32</span></h5><p class="text-default-500">Present Employee (Today)</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-primary bg-primary/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:briefcase",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="22">22</span></h5><p class="text-default-500">Working Days (Current Month)</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(attendance)/attendance-main/components/Stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stat-zQiI2gNp.mjs.map
