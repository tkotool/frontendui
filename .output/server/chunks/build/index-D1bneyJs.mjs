import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
            _push2(`<div class="mt-8"${_scopeId}><h4 class="mb-2 text-primary text-xl font-semibold"${_scopeId}>Forgot Password?</h4><p class="text-base mb-8 text-default-500"${_scopeId}>Reset your Tailwick password</p></div><div class="p-3 mb-6 text-sm rounded-md font-normal text-warning bg-warning/15"${_scopeId}>Provide your email address, and instructions will be sent to you</div><form action="/"${_scopeId}><div class="text-start"${_scopeId}><label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium"${_scopeId}>Email</label><input type="text" id="Email" class="form-input" placeholder="Enter Email"${_scopeId}></div><div class="mt-8"${_scopeId}><button type="submit" class="btn bg-primary text-white w-full"${_scopeId}>Send Reset Link</button></div><div class="mt-4 text-center"${_scopeId}><p class="text-base text-default-800"${_scopeId}>Wait, I remember my password... <a href="/basic-auth/login" class="text-primary underline"${_scopeId}> Click here </a></p></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mt-8" }, [
                createVNode("h4", { class: "mb-2 text-primary text-xl font-semibold" }, "Forgot Password?"),
                createVNode("p", { class: "text-base mb-8 text-default-500" }, "Reset your Tailwick password")
              ]),
              createVNode("div", { class: "p-3 mb-6 text-sm rounded-md font-normal text-warning bg-warning/15" }, "Provide your email address, and instructions will be sent to you"),
              createVNode("form", { action: "/" }, [
                createVNode("div", { class: "text-start" }, [
                  createVNode("label", {
                    for: "Email",
                    class: "inline-block mb-2 text-sm text-default-800 font-medium"
                  }, "Email"),
                  createVNode("input", {
                    type: "text",
                    id: "Email",
                    class: "form-input",
                    placeholder: "Enter Email"
                  })
                ]),
                createVNode("div", { class: "mt-8" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn bg-primary text-white w-full"
                  }, "Send Reset Link")
                ]),
                createVNode("div", { class: "mt-4 text-center" }, [
                  createVNode("p", { class: "text-base text-default-800" }, [
                    createTextVNode("Wait, I remember my password... "),
                    createVNode("a", {
                      href: "/basic-auth/login",
                      class: "text-primary underline"
                    }, " Click here ")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/reset-pass/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D1bneyJs.mjs.map
