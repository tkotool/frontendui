import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Event",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1" }, _attrs))}><div class="card"><div class="card-body"><h6 class="mb-4 text-15">Draggable Events</h6><div id="external-events" class="flex flex-col gap-3"><p class="text-default-400">Drag and drop your event or click in the calendar</p><div class="external-event fc-event text-success" data-class="!text-success">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:circle-filled",
        class: "iconify me-2"
      }, null, _parent));
      _push(`New Event Planning</div><div class="external-event fc-event text-info" data-class="!text-info">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:circle-filled",
        class: "iconify me-2"
      }, null, _parent));
      _push(`Meeting</div><div class="external-event fc-event text-warning" data-class="!text-warning">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:circle-filled",
        class: "iconify me-2"
      }, null, _parent));
      _push(`Generating Reports</div><div class="external-event fc-event text-danger" data-class="!text-danger">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:circle-filled",
        class: "iconify me-2"
      }, null, _parent));
      _push(`Create New theme</div><div class="flex items-center gap-2"><input id="drop-remove" class="form-checkbox" type="checkbox"><label for="drop-remove" class="align-middle cursor-pointer">Remove after drop</label></div><div class="flex items-center gap-2"><input id="businessCalendar" class="form-checkbox" type="checkbox"><label for="businessCalendar" class="align-middle cursor-pointer">Business Hours &amp; Week</label></div><div class="flex items-center gap-2"><input id="weekNumberCalendar" class="form-checkbox" type="checkbox"><label for="weekNumberCalendar" class="align-middle cursor-pointer">Week Number</label></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/calendar/components/Event.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Event-InhBoC-7.mjs.map
