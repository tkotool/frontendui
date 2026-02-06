import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './auth-DPb2JHW7.mjs';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-8"${_scopeId}><h4 class="mb-4 text-primary text-xl font-semibold"${_scopeId}>Verify Email</h4><p class="text-base/normal mb-8 text-default-500"${_scopeId}>Please enter the 4 digit code sent to tailwick@themesdesign.in</p></div><form action="/" class="mt-"${_scopeId}><div class="grid grid-cols-4 gap-2"${_scopeId}><input type="text" class="form-input text-center" placeholder="•" maxlength="1"${_scopeId}><input type="text" class="form-input text-center" placeholder="•" maxlength="1"${_scopeId}><input type="text" class="form-input text-center" placeholder="•" maxlength="1"${_scopeId}><input type="text" class="form-input text-center" placeholder="•" maxlength="1"${_scopeId}></div><div class="mt-6"${_scopeId}><button type="submit" class="btn text-white bg-primary w-full"${_scopeId}>Confirm</button></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mt-8" }, [
                createVNode("h4", { class: "mb-4 text-primary text-xl font-semibold" }, "Verify Email"),
                createVNode("p", { class: "text-base/normal mb-8 text-default-500" }, "Please enter the 4 digit code sent to tailwick@themesdesign.in")
              ]),
              createVNode("form", {
                action: "/",
                class: "mt-"
              }, [
                createVNode("div", { class: "grid grid-cols-4 gap-2" }, [
                  createVNode("input", {
                    type: "text",
                    class: "form-input text-center",
                    placeholder: "•",
                    maxlength: "1"
                  }),
                  createVNode("input", {
                    type: "text",
                    class: "form-input text-center",
                    placeholder: "•",
                    maxlength: "1"
                  }),
                  createVNode("input", {
                    type: "text",
                    class: "form-input text-center",
                    placeholder: "•",
                    maxlength: "1"
                  }),
                  createVNode("input", {
                    type: "text",
                    class: "form-input text-center",
                    placeholder: "•",
                    maxlength: "1"
                  })
                ]),
                createVNode("div", { class: "mt-6" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn text-white bg-primary w-full"
                  }, "Confirm")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/two-steps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbaZBN6v.mjs.map
