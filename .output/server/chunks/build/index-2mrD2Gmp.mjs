import { defineComponent, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import { d as deleteIcon } from './delete-CsuzHDd1.mjs';
import { u as usePageTitle } from './usePageTitle-D5OM63Zr.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import './index-CrQieO5U.mjs';
import './index-C8a9Gwrn.mjs';
import './index-CgrDkO63.mjs';
import 'simplebar-vue';
import './logo-dark-WX0inbct.mjs';
import './logo-light-20UUu8i0.mjs';
import './logo-sm-RLKHF8Zf.mjs';
import './AppMenu-wIVvB5t3.mjs';
import './data-DUV_uuTB.mjs';
import './MenuItem-DRf2TIbN.mjs';
import './nuxt-link-CYXiNZH-.mjs';
import './MenuItemWithChildren-BV2E1r8c.mjs';
import './index-0bc88ocl.mjs';
import './CustomizerToggler-CfuET3W0.mjs';
import './LanguageDropdown-BpE4DRuo.mjs';
import './arebian-CDXbpKKs.mjs';
import './NotificationDropdown-9jVU8SDl.mjs';
import './avatar-3-DffBtZtQ.mjs';
import './avatar-5-DeNxQLba.mjs';
import './avatar-7-CbAcGjRM.mjs';
import './ThemeToggler-gK4JAuSI.mjs';
import './UserProfile-jxbohxoO.mjs';
import './avatar-1-so5nc_yQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePageTitle("Holidays");
    const departments = [
      { id: 1, name: "Web Development", head: "Patricia Garcia", phone: "077 7317 7572", email: "PatriciaJGarcia@tailwick.com", employees: 15 },
      { id: 2, name: "iOS Application Development", head: "Frederiksen", phone: "61 53 62 05", email: "jonas@tailwick.com", employees: 9 },
      { id: 3, name: "Designing", head: "Juliette Fecteau", phone: "07231 96 25 88", email: "JulietteFecteau@tailwick.com", employees: 11 },
      { id: 4, name: "HR Management", head: "Thomas Hatfield", phone: "0911 47 65 49", email: "thomas@tailwick.com", employees: 3 },
      { id: 5, name: "Accounts Management", head: "Holly Kavanaugh", phone: "819 947 5846", email: "HollyKavanaugh@tailwick.com", employees: 2 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Holidays"
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="card-header"${_scopeId}><h6 class="card-title"${_scopeId}>Departments</h6><button class="btn btn-sm bg-primary text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:plus",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(`Add Department</button></div><div class="flex flex-col"${_scopeId}><div class="overflow-x-auto"${_scopeId}><div class="min-w-full inline-block align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-default-200"${_scopeId}><thead class="font-semibold whitespace-nowrap"${_scopeId}><tr class="text-sm text-default-800 divide-x divide-default-200"${_scopeId}><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>#</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Department Name</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Head of Dep.</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Phone Number</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Email</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Employee</th><th scope="col" class="px-3.5 py-3 font-medium text-start"${_scopeId}>Action</th></tr></thead><tbody class="divide-y divide-default-200"${_scopeId}><!--[-->`);
            ssrRenderList(departments, (item, idx) => {
              _push2(`<tr class="text-default-800 font-normal whitespace-nowrap divide-x divide-default-200"${_scopeId}><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.id)}</td><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.name)}</td><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.head)}</td><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.phone)}</td><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.email)}</td><td class="px-3.5 py-3 text-sm"${_scopeId}>${ssrInterpolate(item.employees)}</td><td class="px-3.5 py-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><a href="#" class="btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="department-edit-modal" data-hs-overlay="#department-edit-modal"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:pencil",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`</a><a href="#" class="btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="department-delete-modal" data-hs-overlay="#department-delete-modal"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "lucide:trash-2",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`</a></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div><div class="card-footer"${_scopeId}><p class="text-default-500 text-sm"${_scopeId}>Showing <b${_scopeId}>5</b> of <b${_scopeId}>8</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"${_scopeId}><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-left",
              class: "size-4 me-1"
            }, null, _parent2, _scopeId));
            _push2(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>1</button><button type="button" class="btn size-7.5 bg-primary text-white"${_scopeId}>2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}>3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"${_scopeId}> Next `);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:chevron-right",
              class: "size-4 ms-1"
            }, null, _parent2, _scopeId));
            _push2(`</button></nav></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Holidays"
              }),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("h6", { class: "card-title" }, "Departments"),
                  createVNode("button", { class: "btn btn-sm bg-primary text-white" }, [
                    createVNode(unref(Icon), {
                      icon: "lucide:plus",
                      class: "size-4 me-1"
                    }),
                    createTextVNode("Add Department")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("div", { class: "min-w-full inline-block align-middle" }, [
                      createVNode("div", { class: "overflow-hidden" }, [
                        createVNode("table", { class: "min-w-full divide-y divide-default-200" }, [
                          createVNode("thead", { class: "font-semibold whitespace-nowrap" }, [
                            createVNode("tr", { class: "text-sm text-default-800 divide-x divide-default-200" }, [
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "#"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Department Name"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Head of Dep."),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Phone Number"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Email"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Employee"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-3.5 py-3 font-medium text-start"
                              }, "Action")
                            ])
                          ]),
                          createVNode("tbody", { class: "divide-y divide-default-200" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(departments, (item, idx) => {
                              return createVNode("tr", {
                                class: "text-default-800 font-normal whitespace-nowrap divide-x divide-default-200",
                                key: idx
                              }, [
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.id), 1),
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.name), 1),
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.head), 1),
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.phone), 1),
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.email), 1),
                                createVNode("td", { class: "px-3.5 py-3 text-sm" }, toDisplayString(item.employees), 1),
                                createVNode("td", { class: "px-3.5 py-3" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600",
                                      "aria-haspopup": "dialog",
                                      "aria-expanded": "false",
                                      "aria-controls": "department-edit-modal",
                                      "data-hs-overlay": "#department-edit-modal"
                                    }, [
                                      createVNode(unref(Icon), {
                                        icon: "lucide:pencil",
                                        class: "size-4"
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "#",
                                      class: "btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600",
                                      "aria-haspopup": "dialog",
                                      "aria-expanded": "false",
                                      "aria-controls": "department-delete-modal",
                                      "data-hs-overlay": "#department-delete-modal"
                                    }, [
                                      createVNode(unref(Icon), {
                                        icon: "lucide:trash-2",
                                        class: "size-4"
                                      })
                                    ])
                                  ])
                                ])
                              ]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card-footer" }, [
                    createVNode("p", { class: "text-default-500 text-sm" }, [
                      createTextVNode("Showing "),
                      createVNode("b", null, "5"),
                      createTextVNode(" of "),
                      createVNode("b", null, "8"),
                      createTextVNode(" Results")
                    ]),
                    createVNode("nav", {
                      class: "flex items-center gap-2",
                      "aria-label": "Pagination"
                    }, [
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, [
                        createVNode(unref(Icon), {
                          icon: "lucide:chevron-left",
                          class: "size-4 me-1"
                        }),
                        createTextVNode(" Prev")
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, "1"),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-primary text-white"
                      }, "2"),
                      createVNode("button", {
                        type: "button",
                        class: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, "3"),
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"
                      }, [
                        createTextVNode(" Next "),
                        createVNode(unref(Icon), {
                          icon: "lucide:chevron-right",
                          class: "size-4 ms-1"
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="department-delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="department-delete-modal-label"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative"><div class="absolute top-3 end-3"><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#department-delete-modal"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><h3 class="font-semibold text-base text-default-800 text-center"><img${ssrRenderAttr("src", unref(deleteIcon))} alt="" class="size-12 mx-auto"><div class="mt-5 text-center"><h5 class="mb-1 text-lg font-semibold text-default-800">Are you sure?</h5><p class="text-default-500 text-sm font-normal">Are you certain you want to delete this record?</p><div class="mt-5 flex gap-2 justify-center"><button data-hs-overlay="#department-delete-modal" class="btn text-danger bg-transparent hover:bg-danger/10" aria-label="Close">Cancel</button><button class="bg-danger text-white btn border-0 btn-sm">Yes,Delete It!</button></div></div></h3></div></div></div><div id="department-edit-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="department-delete-modal-label2"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto"><div class="card-header"><h3 id="department-delete-modal-label2" class="font-bold text-default-800 text-base">Add Department</h3><div><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#department-edit-modal"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div><div class="p-4 overflow-y-auto"><div class="flex flex-col gap-y-4"><div class="lg:col-span-12"><label for="Department Name" class="inline-block mb-2 text-base font-medium">Department Name</label><input type="text" id="Department Name" class="form-input" placeholder="Department Name"></div><div class="lg:col-span-12"><label for="Head of Dep. Name" class="inline-block mb-2 text-base font-medium">Head of Dep. Name</label><input type="text" placeholder="Head name" class="form-input"></div><div class="lg:col-span-12"><label for="Phone Number" class="inline-block mb-2 text-base font-medium">Phone Number</label><input type="text" id="Phone Number" class="form-input" placeholder="1234567890"></div><div class="lg:col-span-12"><label for="Email" class="inline-block mb-2 text-base font-medium">Email</label><input type="text" placeholder="Enter Email" class="form-input"></div><div class="lg:col-span-12"><label for="Total Employee" class="inline-block mb-2 text-base font-medium">Total Employee</label><input type="text" placeholder="0" class="form-input"></div></div></div><div class="flex justify-end items-center gap-x-2 py-3 px-4"><button data-hs-overlay="#department-edit-modal" class="bg-transparent text-danger btn border-0 hover:bg-danger/10" aria-label="Close">Cancel</button><button type="button" class="text-white btn bg-primary">Add Department</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/department/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2mrD2Gmp.mjs.map
