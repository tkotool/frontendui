import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimelinewithAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    const avatarTimeline = [
      {
        id: "a1",
        avatar: avatar1,
        title: "Purchased by James Price",
        description: "Product noise evolve smartwatch",
        date: "05:57 AM Today"
      },
      {
        id: "a2",
        avatar: avatar2,
        title: "Natasha Carey have liked the products",
        description: "Allow users to like products in your WooCommerce store.",
        date: "25 Dec, 2023"
      },
      {
        id: "a3",
        avatar: avatar3,
        title: "Today offers by Digitech Galaxy",
        description: "Offer is valid on orders of $230 Or above for selected products only.",
        date: "12 Dec, 2023"
      },
      {
        id: "a4",
        avatar: avatar3,
        title: "New ticket received",
        description: "User Erica245 submitted a ticket",
        date: "26 Dec, 2023"
      }
    ];
    const iconTimeline = [
      {
        id: "i1",
        icon: "lucide:bar-chart-horizontal-big",
        color: "text-primary",
        title: "Purchased by James Price",
        description: "Product noise evolve smartwatch",
        date: "05:57 AM Today"
      },
      {
        id: "i2",
        icon: "lucide:store",
        color: "text-danger",
        title: "Natasha Carey have liked the products",
        description: "Allow users to like products in your WooCommerce store.",
        date: "25 Dec, 2023"
      },
      {
        id: "i3",
        icon: "lucide:shopping-cart",
        color: "text-green-500",
        title: "Today offers by Digitech Galaxy",
        description: "Offer is valid on orders of $230 Or above for selected products only.",
        date: "12 Dec, 2023"
      },
      {
        id: "i4",
        icon: "lucide:percent",
        color: "text-purple-500",
        title: "New ticket received",
        description: "User Erica245 submitted a ticket",
        date: "26 Dec, 2023"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h5 class="mb-5 text-heading font-semibold underline text-lg"></h5><div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-5"><div class="card"><div class="card-body"><h6 class="mb-4 card-title">Timeline with Avatar</h6><div><!--[-->`);
      ssrRenderList(avatarTimeline, (item, idx) => {
        _push(`<div class="${ssrRenderClass([idx !== avatarTimeline.length - 1 ? "before:absolute before:border-s-2 before:border-default-200 before:start-3.5 before:end-3.5 before:top-1.5 before:-bottom-1.5 pb-4" : "", "relative"])}"><div class="relative flex gap-2"><img${ssrRenderAttr("src", item.avatar)} alt="" class="size-8 p-0.5 bg-card border rounded-full shrink-0 border-default-200"><div><h6 class="mb-1 text-sm text-heading font-semibold">${ssrInterpolate(item.title)}</h6><p class="mb-2 text-default-500">${ssrInterpolate(item.description)}</p><p class="text-sm text-default-500">${ssrInterpolate(item.date)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="card"><div class="card-body"><h6 class="mb-4 card-title">Timeline with Avatar</h6><div><!--[-->`);
      ssrRenderList(iconTimeline, (item, idx) => {
        _push(`<div class="${ssrRenderClass([idx !== avatarTimeline.length - 1 ? "before:absolute before:border-s-2 before:border-default-200 before:start-3.5 before:end-3.5 before:top-1.5 before:-bottom-1.5 pb-4" : "", "relative"])}"><div class="relative flex gap-2"><div class="${ssrRenderClass([item.color, "size-8 p-0.5 bg-card flex items-center justify-center border rounded-full shrink-0 border-default-200"])}">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: item.icon,
          class: ["size-4", item.color]
        }, null, _parent));
        _push(`</div><div><h6 class="mb-1 text-sm text-heading font-semibold">${ssrInterpolate(item.title)}</h6><p class="mb-2 text-default-500">${ssrInterpolate(item.description)}</p><p class="text-sm text-default-500">${ssrInterpolate(item.date)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(pages)/timeline/components/TimelinewithAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TimelinewithAvatar-CfRU4TCE.mjs.map
