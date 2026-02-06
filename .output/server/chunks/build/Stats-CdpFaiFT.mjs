import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stats",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5" }, _attrs))}><div class="card"><div class="card-body"><div class="flex items-center justify-center mx-auto rounded-full size-14 bg-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:wallet-2",
        class: "size-6 text-primary"
      }, null, _parent));
      _push(`</div><h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg">$ <span data-target="236.18">236.18</span>k</h5><p class="text-center text-sm text-default-500">Total Revenue</p></div></div><div class="card"><div class="card-body"><div class="flex items-center justify-center mx-auto rounded-full size-14 bg-info/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package",
        class: "size-6 text-info"
      }, null, _parent));
      _push(`</div><h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg"><span data-target="13,461">13,461</span></h5><p class="text-center text-sm text-default-500">Total Orders</p></div></div><div class="card"><div class="card-body"><div class="flex items-center justify-center mx-auto rounded-full size-14 bg-success/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:truck",
        class: "size-6 text-success"
      }, null, _parent));
      _push(`</div><h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg"><span data-target="17,150">17,150</span></h5><p class="text-center text-sm text-default-500">Delivered</p></div></div><div class="card"><div class="card-body"><div class="flex items-center justify-center mx-auto rounded-full size-14 bg-danger/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-x",
        class: "size-6 text-danger"
      }, null, _parent));
      _push(`</div><h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg"><span data-target="3,519">3,519</span></h5><p class="text-center text-sm text-default-500">Cancelled</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ecommerce/components/Stats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stats-CdpFaiFT.mjs.map
