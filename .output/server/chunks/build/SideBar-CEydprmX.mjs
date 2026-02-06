import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = [
      { title: "Compose Email", icon: "lucide:plus" },
      { title: "Inbox", icon: "lucide:inbox" },
      { title: "Starred", icon: "lucide:star" },
      { title: "Draft", icon: "lucide:pen-square" },
      { title: "Important", icon: "lucide:step-forward" },
      { title: "Spam", icon: "lucide:alert-octagon" },
      { title: "Contacts", icon: "lucide:user-circle" },
      { title: "Trash", icon: "lucide:trash-2" },
      { title: "Category", icon: "", category: true },
      { title: "Social", icon: "lucide:radio-tower" },
      { title: "Update", icon: "lucide:squirrel" },
      { title: "Forums", icon: "lucide:file-text" },
      { title: "Promotions", icon: "lucide:tag" },
      { title: "Label", icon: "", category: true },
      { title: "Support", icon: "lucide:circle-dot", class: "text-danger" },
      { title: "Freelance", icon: "lucide:circle-dot", class: "text-primary" },
      { title: "Personal", icon: "lucide:circle-dot", class: "text-sky-500" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="lg:border-e border-default-200"><div id="mailBoxSidebar" class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60" role="dialog" tabindex="-1" aria-label="Sidebar"><div class="card shadow-none relative flex flex-col h-full max-h-full overflow-hidden"><div class="card-body">`);
      if (sidebarItems[0]) {
        _push(`<button class="btn bg-danger text-white w-full" data-hs-overlay="#addEmailModal">`);
        if (sidebarItems[0].icon) {
          _push(ssrRenderComponent(unref(Icon), {
            icon: sidebarItems[0].icon,
            class: "size-4"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` Compose Email </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-4 text-sm"><!--[-->`);
      ssrRenderList(sidebarItems.slice(1), (item, index) => {
        _push(`<!--[-->`);
        if (item.category) {
          _push(`<p class="py-3 uppercase text-sm text-default-700">${ssrInterpolate(item.title)}</p>`);
        } else {
          _push(`<a href="" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">`);
          if (item.icon) {
            _push(ssrRenderComponent(unref(Icon), {
              icon: item.icon,
              class: ["size-4", item.class]
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(item.title)}</span></a>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></div></div><div id="addEmailModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="addEmailModal-label"><div class="hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-4xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="card w-full border border-default-200 pointer-events-auto"><div class="card-header"><h3 class="font-semibold text-base text-default-800">New Message</h3><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#addEmailModal"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><div class="card-body"><div class="mb-4"><label for="event-title" class="inline-block mb-2 text-base font-medium">To</label><input type="text" id="event-title" class="form-input" placeholder="tailwink@themesdesign.in"></div><div class="mb-4"><label for="subject" class="inline-block mb-2 text-base font-medium">Subject</label><input type="text" id="subject" class="form-input" placeholder="Subject"></div><div><label for="Textarea" class="inline-block mb-2 text-base font-medium">Example Textarea</label><textarea id="Textarea" class="form-input" rows="3"></textarea></div></div><div class="card-footer flex gap-2 md:justify-end"><button type="reset" data-hs-overlay="#addEmailModal" class="btn text-danger btn border-0 hover:bg-red-50">Cancel</button><button type="submit" class="btn bg-primary text-white">Send</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/email/components/SideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SideBar-CEydprmX.mjs.map
