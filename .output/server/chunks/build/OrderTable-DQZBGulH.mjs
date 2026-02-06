import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { orders } from './data-nxfC5Gfz.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderTable",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-3.5 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><button class="btn btn-sm bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-4 me-1"
      }, null, _parent));
      _push(`Add Product</button></div><div class="card-header"><div class="flex items-center flex-wrap gap-3"><button type="button" class="btn btn-sm bg-primary text-white font-medium">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:boxes",
        class: "size-4"
      }, null, _parent));
      _push(` All Orders </button><button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:loader",
        class: "size-4"
      }, null, _parent));
      _push(` Pending </button><button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-check",
        class: "size-4"
      }, null, _parent));
      _push(` Delivered </button><button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:refresh-cw",
        class: "size-4"
      }, null, _parent));
      _push(` Returns </button><button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:package-x",
        class: "size-4"
      }, null, _parent));
      _push(` Cancelled </button></div></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal text-default-500 whitespace-nowrap"><th class="ps-4 text-start"><input id="checkbox-all" type="checkbox" class="form-checkbox"></th><th scope="col" class="px-3.5 py-3 text-start">Order ID</th><th scope="col" class="px-3.5 py-3 text-start">Order Date</th><th scope="col" class="px-3.5 py-3 text-start">Delivery Date</th><th scope="col" class="px-3.5 py-3 text-start">Customer Name</th><th scope="col" class="px-3.5 py-3 text-start">Payment Method</th><th scope="col" class="px-3.5 py-3 text-start">Amount</th><th scope="col" class="px-3.5 py-3 text-start">Delivery Status</th><th scope="col" class="px-3.5 py-3 text-start">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(unref(orders), (item, idx) => {
        _push(`<tr class="text-default-800 font-normal"><td class="py-2.5 ps-4"><input id="checkbox-all" type="checkbox" class="form-checkbox"></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">${ssrInterpolate(item.id)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.orderDate)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.deliveryDate)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.customerName)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.paymentMethod)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$${ssrInterpolate(item.amount)}</td><td class="px-3.5 py-2.5 whitespace-nowrap"><span class="${ssrRenderClass([item.color, "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium"])}">${ssrInterpolate(item.deliveryStatus)}</span></td><td class="px-3.5 py-2.5"><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:ellipsis",
          class: "iconify size-4"
        }, null, _parent));
        _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(` Overview </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:edit",
          class: "size-3"
        }, null, _parent));
        _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-3"
        }, null, _parent));
        _push(` Delete </a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>07</b> of <b>19</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/order/components/OrderTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=OrderTable-DQZBGulH.mjs.map
