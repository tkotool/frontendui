import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-danger bg-danger/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:file-bar-chart-2",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-heading font-semibold"><span class="counter-value text-base" data-target="23">23</span></h5><p class="text-default-500">Total Leave Balance</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-secondary bg-secondary/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:stethoscope",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="4">4</span></h5><p class="text-default-500">Medical Leave</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-success bg-success/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:calendar-days",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="12">12</span></h5><p class="text-default-500">Annual Leave</p></div></div></div></div><div class="card"><div class="card-body"><div class="flex items-center gap-3"><div class="btn text-info bg-info/10 size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:anchor",
        class: "size-6"
      }, null, _parent));
      _push(`</div><div><h5 class="mb-1 text-base text-heading font-semibold"><span class="counter-value" data-target="11">11</span></h5><p class="text-default-500">Remaining Leave</p></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(leave-manage)/leave-employee/components/StatCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StatCard--_lCoLI1.mjs.map
