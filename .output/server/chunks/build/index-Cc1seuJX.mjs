import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
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
            _push2(`<div class="mt-8 text-center"${_scopeId}><h4 class="mb-2.5 text-xl font-semibold text-primary"${_scopeId}>Welcome Back !</h4><p class="text-base text-default-500"${_scopeId}>Sign in to continue to Tailwick.</p></div><form action="/" class="text-left w-full mt-10"${_scopeId}><div class="mb-4"${_scopeId}><label for="email" class="block font-medium text-default-900 text-sm mb-2"${_scopeId}>Username/ Email ID</label><input type="text" id="email" class="form-input" placeholder="Enter Username or email" style="${ssrRenderStyle({ "padding": "0 12px" })}"${_scopeId}></div><div class="mb-4"${_scopeId}><a href="/basic-auth/reset-pass" class="text-primary font-medium text-sm mb-2 float-end"${_scopeId}>Forgot Password ?</a><label for="Password" class="block font-medium text-default-900 text-sm mb-2"${_scopeId}>Password</label><input type="text" id="Password" class="form-input" placeholder="Enter Password" style="${ssrRenderStyle({ "padding": "0 12px" })}"${_scopeId}></div><div class="flex items-center gap-2 mb-4"${_scopeId}><input id="checkbox-1" type="checkbox" class="form-checkbox"${_scopeId}><label class="text-default-900 text-sm font-medium" for="checkbox-1"${_scopeId}>Remember Me</label></div><div class="mt-10 text-center"${_scopeId}><button type="submit" class="btn bg-primary text-white w-full"${_scopeId}>Sign In</button></div><div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0"${_scopeId}><h4 class="relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card"${_scopeId}>Sign In With</h4></div><div class="flex w-full justify-center items-center gap-2"${_scopeId}><a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "logos:google-icon",
              class: "iconify-color"
            }, null, _parent2, _scopeId));
            _push2(` Use Google </a><a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "logos:apple",
              class: "iconify text-mono"
            }, null, _parent2, _scopeId));
            _push2(` Use Apple </a></div><div class="mt-10 text-center"${_scopeId}><p class="text-base text-default-500"${_scopeId}> Don&#39;t have an Account ? <a href="/basic-auth/register" class="font-semibold underline hover:text-primary transition duration-200"${_scopeId}>SignUp</a></p></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mt-8 text-center" }, [
                createVNode("h4", { class: "mb-2.5 text-xl font-semibold text-primary" }, "Welcome Back !"),
                createVNode("p", { class: "text-base text-default-500" }, "Sign in to continue to Tailwick.")
              ]),
              createVNode("form", {
                action: "/",
                class: "text-left w-full mt-10"
              }, [
                createVNode("div", { class: "mb-4" }, [
                  createVNode("label", {
                    for: "email",
                    class: "block font-medium text-default-900 text-sm mb-2"
                  }, "Username/ Email ID"),
                  createVNode("input", {
                    type: "text",
                    id: "email",
                    class: "form-input",
                    placeholder: "Enter Username or email",
                    style: { "padding": "0 12px" }
                  })
                ]),
                createVNode("div", { class: "mb-4" }, [
                  createVNode("a", {
                    href: "/basic-auth/reset-pass",
                    class: "text-primary font-medium text-sm mb-2 float-end"
                  }, "Forgot Password ?"),
                  createVNode("label", {
                    for: "Password",
                    class: "block font-medium text-default-900 text-sm mb-2"
                  }, "Password"),
                  createVNode("input", {
                    type: "text",
                    id: "Password",
                    class: "form-input",
                    placeholder: "Enter Password",
                    style: { "padding": "0 12px" }
                  })
                ]),
                createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                  createVNode("input", {
                    id: "checkbox-1",
                    type: "checkbox",
                    class: "form-checkbox"
                  }),
                  createVNode("label", {
                    class: "text-default-900 text-sm font-medium",
                    for: "checkbox-1"
                  }, "Remember Me")
                ]),
                createVNode("div", { class: "mt-10 text-center" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn bg-primary text-white w-full"
                  }, "Sign In")
                ]),
                createVNode("div", { class: "my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0" }, [
                  createVNode("h4", { class: "relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card" }, "Sign In With")
                ]),
                createVNode("div", { class: "flex w-full justify-center items-center gap-2" }, [
                  createVNode("a", {
                    href: "#",
                    class: "btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"
                  }, [
                    createVNode(unref(Icon), {
                      icon: "logos:google-icon",
                      class: "iconify-color"
                    }),
                    createTextVNode(" Use Google ")
                  ]),
                  createVNode("a", {
                    href: "#",
                    class: "btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"
                  }, [
                    createVNode(unref(Icon), {
                      icon: "logos:apple",
                      class: "iconify text-mono"
                    }),
                    createTextVNode(" Use Apple ")
                  ])
                ]),
                createVNode("div", { class: "mt-10 text-center" }, [
                  createVNode("p", { class: "text-base text-default-500" }, [
                    createTextVNode(" Don't have an Account ? "),
                    createVNode("a", {
                      href: "/basic-auth/register",
                      class: "font-semibold underline hover:text-primary transition duration-200"
                    }, "SignUp")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cc1seuJX.mjs.map
