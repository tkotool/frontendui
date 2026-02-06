import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="grid md:grid-cols-2 grid-cols-1 gap-5"><div class="card bg-success/15 overflow-hidden"><div class="card-body">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:kanban",
        class: "absolute top-0 size-32 text-success/10 -end-10"
      }, null, _parent));
      _push(`<div class="btn btn-icon size-12 bg-green-800">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:users",
        class: "size-6 text-green-50"
      }, null, _parent));
      _push(`</div><h5 class="mt-5 mb-2 text-lg font-semibold"><span data-target="15876">15,876</span></h5><p class="text-sm text-default-700">Total Users</p></div></div><div class="card bg-danger/15 overflow-hidden"><div class="card-body">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:list-filter",
        class: "absolute top-0 size-32 text-danger/10 -end-10"
      }, null, _parent));
      _push(`<div class="btn btn-icon bg-danger size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:cog",
        class: "size-6 text-white"
      }, null, _parent));
      _push(`</div><h5 class="mt-5 mb-2 text-lg font-semibold"><span data-target="15876">103.15k</span></h5><p class="text-sm text-default-700">Sessions</p></div></div><div class="card bg-secondary/15 overflow-hidden"><div class="card-body">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:list-filter",
        class: "absolute top-0 size-32 text-secondary/10 -end-10"
      }, null, _parent));
      _push(`<div class="btn btn-icon bg-secondary size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:coins",
        class: "size-6 text-sky-50"
      }, null, _parent));
      _push(`</div><h5 class="mt-5 mb-2 text-lg font-semibold"><span class="counter-value" data-target="1">0</span> <span>M</span> <span class="counter-value" data-target="29">0</span><span>sec</span></h5><p class="text-sm text-default-700">Avg. Visit Duration</p></div></div><div class="card bg-info/15 overflow-hidden"><div class="card-body">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:kanban",
        class: "absolute top-0 size-32 text-info/10 -end-10"
      }, null, _parent));
      _push(`<div class="btn btn-icon bg-info size-12">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:coins",
        class: "size-6 text-purple-50"
      }, null, _parent));
      _push(`</div><h5 class="mt-5 mb-2 text-lg font-semibold"><span class="counter-value" data-target="49.77">49.77</span>%</h5><p class="text-sm text-default-700">Bounce Rate</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/analytics/components/Stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stat-CNC9MTnZ.mjs.map
