import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Icon } from '@iconify/vue';
import { Pagination } from 'swiper/modules';
import { a as avatar9 } from './avatar-9-DeVQJ4LP.mjs';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';
import { a as avatar7 } from './avatar-7-CbAcGjRM.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Feedback",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        avatar: avatar9,
        name: "Anthony Hobbs",
        comment: "ThemesDesign used Anydesk to fix the bug in Flask and django version. I highly recommend this product!",
        stars: [1, 2, 3, 4, 5],
        bgColor: "bg-purple-500/10"
      },
      {
        avatar: avatar2,
        name: "Angela Ulligan",
        comment: "The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template.",
        stars: [1, 2, 3, 4, 5],
        bgColor: "bg-primary/10"
      },
      {
        avatar: avatar4,
        name: "muratoztrkk01",
        comment: "I encountered a few errors in the design of the product detail page in Angular. I contacted the support team and they established.",
        stars: [1, 2, 3, 4, 5],
        bgColor: "bg-amber-500/10"
      },
      {
        avatar: avatar7,
        name: "Christine Marbury",
        comment: "This theme is very good. I really recommend it. It's very good optimized, elegant, well documented, etc.",
        stars: [1, 2, 3, 4, 5],
        bgColor: "bg-danger/10"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "Feedback",
        class: "relative lg:pb-28 md:pb-18 pb-12"
      }, _attrs))}><div class="container"><div class="mx-auto md:mb-8 text-center lg:w-3xl"><h1 class="leading-normal capitalize md:text-4xl text-3xl font-semibold text-default-800">What Our Customer Says</h1></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 3,
        "space-between": 30,
        loop: true,
        modules: [unref(Pagination)],
        pagination: { clickable: true },
        class: "mySwiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(reviews, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5 text-center aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear"${_scopeId2}><div class="${ssrRenderClass([item.bgColor, "mx-auto rounded-full size-20"])}"${_scopeId2}><img${ssrRenderAttr("src", item.avatar)} alt="" class="rounded-full size-20"${_scopeId2}></div><p class="mt-6 text-default-600 text-base"${_scopeId2}>&quot;${ssrInterpolate(item.comment)}&quot;</p><h6 class="mt-4 mb-2 text-base text-default-900 font-semibold"${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(item.name)}</a></h6><div class="text-yellow-500 flex items-center justify-center gap-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.stars, (star) => {
                      _push3(ssrRenderComponent(unref(Icon), {
                        icon: "lucide:star",
                        key: star,
                        class: "fill-yellow-500 size-3.5"
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "p-5 text-center aos-init aos-animate",
                        "data-aos": "fade-up",
                        "data-aos-easing": "linear"
                      }, [
                        createVNode("div", {
                          class: ["mx-auto rounded-full size-20", item.bgColor]
                        }, [
                          createVNode("img", {
                            src: item.avatar,
                            alt: "",
                            class: "rounded-full size-20"
                          }, null, 8, ["src"])
                        ], 2),
                        createVNode("p", { class: "mt-6 text-default-600 text-base" }, '"' + toDisplayString(item.comment) + '"', 1),
                        createVNode("h6", { class: "mt-4 mb-2 text-base text-default-900 font-semibold" }, [
                          createVNode("a", { href: "#" }, toDisplayString(item.name), 1)
                        ]),
                        createVNode("div", { class: "text-yellow-500 flex items-center justify-center gap-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.stars, (star) => {
                            return openBlock(), createBlock(unref(Icon), {
                              icon: "lucide:star",
                              key: star,
                              class: "fill-yellow-500 size-3.5"
                            });
                          }), 128))
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="swiper-pagination"${_scopeId}></div>`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(reviews, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "p-5 text-center aos-init aos-animate",
                      "data-aos": "fade-up",
                      "data-aos-easing": "linear"
                    }, [
                      createVNode("div", {
                        class: ["mx-auto rounded-full size-20", item.bgColor]
                      }, [
                        createVNode("img", {
                          src: item.avatar,
                          alt: "",
                          class: "rounded-full size-20"
                        }, null, 8, ["src"])
                      ], 2),
                      createVNode("p", { class: "mt-6 text-default-600 text-base" }, '"' + toDisplayString(item.comment) + '"', 1),
                      createVNode("h6", { class: "mt-4 mb-2 text-base text-default-900 font-semibold" }, [
                        createVNode("a", { href: "#" }, toDisplayString(item.name), 1)
                      ]),
                      createVNode("div", { class: "text-yellow-500 flex items-center justify-center gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.stars, (star) => {
                          return openBlock(), createBlock(unref(Icon), {
                            icon: "lucide:star",
                            key: star,
                            class: "fill-yellow-500 size-3.5"
                          });
                        }), 128))
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode("div", { class: "swiper-pagination" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing/product/components/Feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Feedback-DrmRlAbx.mjs.map
