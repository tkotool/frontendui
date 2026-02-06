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
            _push2(`<div class="mt-8 text-center"${_scopeId}><h4 class="mb-2.5 text-xl font-semibold text-primary"${_scopeId}>Create your free account</h4><p class="text-base text-default-500"${_scopeId}>Get your free Tailwick account now</p></div><form action="/" class="text-left w-full mt-10"${_scopeId}><div class="mb-4"${_scopeId}><label for="email" class="block font-medium text-default-900 text-sm mb-2"${_scopeId}>Enter email</label><input type="text" id="email" class="form-input" placeholder="Enter Username or email" style="${ssrRenderStyle({ "padding": "0 12px" })}"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="Username" class="block font-medium text-default-900 text-sm mb-2"${_scopeId}>Username</label><input type="text" id="Username" class="form-input" placeholder="Enter Username" style="${ssrRenderStyle({ "padding": "0 12px" })}"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="Password" class="block font-medium text-default-900 text-sm mb-2"${_scopeId}>Password</label><input type="text" id="Password" class="form-input" placeholder="Enter Password" style="${ssrRenderStyle({ "padding": "0 12px" })}"${_scopeId}></div><p class="italic text-sm font-medium text-default-500"${_scopeId}>By registering you agree to the Tailwick <a href="#" class="underline"${_scopeId}>Terms of Use</a></p><div class="mt-10 text-center"${_scopeId}><button type="submit" class="btn bg-primary text-white w-full"${_scopeId}>Sign Up</button></div><div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0"${_scopeId}><h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card text-default-600"${_scopeId}>Create Account with</h4></div><div class="flex w-full justify-center items-center gap-2"${_scopeId}><a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "logos:google-icon",
              class: "iconify-color"
            }, null, _parent2, _scopeId));
            _push2(` Use Google </a><a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "logos:apple",
              class: "iconify text-mono"
            }, null, _parent2, _scopeId));
            _push2(` Use Apple </a></div><div class="mt-10 text-center"${_scopeId}><p class="text-base text-default-500"${_scopeId}> Already have an account ? <a href="/basic-auth/login" class="font-semibold underline hover:text-primary transition duration-200"${_scopeId}>Login</a></p></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mt-8 text-center" }, [
                createVNode("h4", { class: "mb-2.5 text-xl font-semibold text-primary" }, "Create your free account"),
                createVNode("p", { class: "text-base text-default-500" }, "Get your free Tailwick account now")
              ]),
              createVNode("form", {
                action: "/",
                class: "text-left w-full mt-10"
              }, [
                createVNode("div", { class: "mb-4" }, [
                  createVNode("label", {
                    for: "email",
                    class: "block font-medium text-default-900 text-sm mb-2"
                  }, "Enter email"),
                  createVNode("input", {
                    type: "text",
                    id: "email",
                    class: "form-input",
                    placeholder: "Enter Username or email",
                    style: { "padding": "0 12px" }
                  })
                ]),
                createVNode("div", { class: "mb-4" }, [
                  createVNode("label", {
                    for: "Username",
                    class: "block font-medium text-default-900 text-sm mb-2"
                  }, "Username"),
                  createVNode("input", {
                    type: "text",
                    id: "Username",
                    class: "form-input",
                    placeholder: "Enter Username",
                    style: { "padding": "0 12px" }
                  })
                ]),
                createVNode("div", { class: "mb-4" }, [
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
                createVNode("p", { class: "italic text-sm font-medium text-default-500" }, [
                  createTextVNode("By registering you agree to the Tailwick "),
                  createVNode("a", {
                    href: "#",
                    class: "underline"
                  }, "Terms of Use")
                ]),
                createVNode("div", { class: "mt-10 text-center" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn bg-primary text-white w-full"
                  }, "Sign Up")
                ]),
                createVNode("div", { class: "my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0" }, [
                  createVNode("h4", { class: "relative z-1 py-0.5 px-2 inline-block font-medium bg-card text-default-600" }, "Create Account with")
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
                    createTextVNode(" Already have an account ? "),
                    createVNode("a", {
                      href: "/basic-auth/login",
                      class: "font-semibold underline hover:text-primary transition duration-200"
                    }, "Login")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8oVKLOGY.mjs.map
