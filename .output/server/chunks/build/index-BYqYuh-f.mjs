import { defineComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
            _push2(`<div class="mt-8 text-center"${_scopeId}><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:log-out",
              class: "size-6 text-purple-500 fill-purple-100 mx-auto"
            }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="mb-2 text-primary text-xl font-semibold"${_scopeId}>You are Logged Out</h4><p class="mb-8 text-base text-default-500"${_scopeId}>Thank you for using tailwick admin template</p></div><a href="/"${_scopeId}><button class="btn bg-primary text-white w-full"${_scopeId}>Sign In</button></a>`);
          } else {
            return [
              createVNode("div", { class: "mt-8 text-center" }, [
                createVNode("div", { class: "mb-4" }, [
                  createVNode(unref(Icon), {
                    icon: "lucide:log-out",
                    class: "size-6 text-purple-500 fill-purple-100 mx-auto"
                  })
                ]),
                createVNode("h4", { class: "mb-2 text-primary text-xl font-semibold" }, "You are Logged Out"),
                createVNode("p", { class: "mb-8 text-base text-default-500" }, "Thank you for using tailwick admin template")
              ]),
              createVNode("a", { href: "/" }, [
                createVNode("button", { class: "btn bg-primary text-white w-full" }, "Sign In")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/basic-auth/logout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYqYuh-f.mjs.map
