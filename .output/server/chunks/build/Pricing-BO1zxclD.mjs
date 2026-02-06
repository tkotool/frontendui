import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        id: 1,
        title: "Lite",
        description: "Perfect plan for Lite",
        price: "9.99",
        icon: "lucide:goal",
        color: "text-success",
        features: [
          { label: "<b>3</b> Projects", included: true },
          { label: "<b>299</b> Customers", included: true },
          { label: "Scalable Bandwidth", included: true },
          { label: "<b>0</b> No Team Account", included: true },
          { label: "In app messaging", included: false },
          { label: "5 FTP Login", included: false },
          { label: "Detailed Analytics", included: false },
          { label: "Custom Domain", included: false },
          { label: "Smart Workflow", included: false },
          { label: "IQ test", included: false }
        ]
      },
      {
        id: 2,
        title: "Professional",
        description: "For users who want to do more.",
        price: "29.99",
        icon: "lucide:graduation-cap",
        color: "text-secondary",
        features: [
          { label: "<b>3</b> Projects", included: true },
          { label: "<b>299</b> Customers", included: true },
          { label: "Scalable Bandwidth", included: true },
          { label: "<b>3</b> No Team Account", included: true },
          { label: "In app messaging", included: true },
          { label: "5 FTP Login", included: false },
          { label: "Detailed Analytics", included: false },
          { label: "Custom Domain", included: false },
          { label: "Smart Workflow", included: false },
          { label: "IQ test", included: false }
        ]
      },
      {
        id: 3,
        title: "Enterprise",
        description: "Run your company on your teams",
        price: "39.99",
        icon: "lucide:crown",
        color: "text-primary",
        badge: "25% Sale",
        features: [
          { label: "<b>3</b> Projects", included: true },
          { label: "<b>299</b> Customers", included: true },
          { label: "Scalable Bandwidth", included: true },
          { label: "<b>3</b> No Team Account", included: true },
          { label: "In app messaging", included: true },
          { label: "5 FTP Login", included: true },
          { label: "Detailed Analytics", included: true },
          { label: "Custom Domain", included: false },
          { label: "Smart Workflow", included: false },
          { label: "IQ test", included: false }
        ]
      },
      {
        id: 4,
        title: "Unlimited",
        description: "Your entire team in one place",
        price: "49.99",
        icon: "lucide:luggage",
        color: "text-danger",
        features: [
          { label: "<b>3</b> Projects", included: true },
          { label: "<b>299</b> Customers", included: true },
          { label: "Scalable Bandwidth", included: true },
          { label: "<b>3</b> No Team Account", included: true },
          { label: "In app messaging", included: true },
          { label: "5 FTP Login", included: true },
          { label: "Detailed Analytics", included: true },
          { label: "Custom Domain", included: true },
          { label: "Smart Workflow", included: true },
          { label: "IQ test", included: true }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-6" }, _attrs))}><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<div class="card relative overflow-hidden"><div class="card-body">`);
        if (plan.badge) {
          _push(`<div class="size-16 absolute top-0 end-0"><div class="absolute bg-primary text-center w-42.5 text-white py-1 transform rotate-45 top-6 -end-12 font-semibold">${ssrInterpolate(plan.badge)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h5 class="mb-2 flex items-center gap-1.5">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: plan.icon,
          class: `${plan.color} size-5`
        }, null, _parent));
        _push(`<span class="text-lg font-semibold text-default-800">${ssrInterpolate(plan.title)}</span></h5><p class="mb-4 text-default-500">${ssrInterpolate(plan.description)}</p><h1 class="mb-4 text-4xl text-default-800 font-normal"><span class="text-default-400">$</span>${ssrInterpolate(plan.price)} <small class="text-base text-default-500">/Monthly</small></h1><button type="button" class="btn border w-full border-dashed border-primary bg-transparent text-primary hover:bg-primary/20">Purchase Now</button><ul class="mt-5 flex flex-col gap-3 text-sm"><!--[-->`);
        ssrRenderList(plan.features, (feature, idx) => {
          _push(`<li class="flex items-center gap-2.5">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: feature.included ? "lucide:check-check" : "lucide:x",
            class: feature.included ? "size-4 text-success" : "size-4 text-danger"
          }, null, _parent));
          if (feature.included) {
            _push(`<span class="text-default-900">${feature.label ?? ""}</span>`);
          } else {
            _push(`<del class="text-default-500">${feature.label ?? ""}</del>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/pricing/components/Pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pricing-BO1zxclD.mjs.map
