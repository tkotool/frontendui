import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import _sfc_main$1 from './vertical-CZx33MWl.mjs';
import { l as logo } from './logo-sm-RLKHF8Zf.mjs';
import { P as PageTitle } from './PageTitle-Dzh_xAnX.mjs';
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
    usePageTitle("Overview");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageTitle, {
              subtitle: "Menu",
              title: "Overview"
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="pb-5"${_scopeId}><div class="flex flex-wrap justify-between md:gap-0 gap-4 items-center"${_scopeId}><div${_scopeId}><h6 class="mb-1 card-title"${_scopeId}>#TW15090257</h6><ul class="flex items-center gap-3 text-default-500 text-sm"${_scopeId}><li${_scopeId}>Create: 10 July, 2023</li><li${_scopeId}>Due: 10 July, 2023</li></ul></div><div class="flex gap-2"${_scopeId}><button class="bg-purple-600 text-white btn hover:bg-purple-700"${_scopeId}>Download</button><button class="bg-primary text-nowrap text-white btn hover:bg-blue-600" onclick="window.print()"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:save",
              class: "size-4 text-white"
            }, null, _parent2, _scopeId));
            _push2(`Save &amp; Draft</button><div class="hs-dropdown relative inline-flex"${_scopeId}><button type="button" class="hs-dropdown-toggle btn size-9.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:ellipsis",
              class: "iconify size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="hs-dropdown-menu" role="menu"${_scopeId}><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:edit",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:trash-2",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(` Delete </a></div></div></div></div></div><div class="border rounded border-default-200"${_scopeId}><div class="p-8"${_scopeId}><div class="grid lg:grid-cols-12 items-center gap-4"${_scopeId}><div class="lg:col-span-3 text-start"${_scopeId}><div class="size-16 bg-default-100 flex items-center justify-center rounded-md"${_scopeId}><img${ssrRenderAttr("src", unref(logo))} alt="" class="h-8"${_scopeId}></div><h5 class="mt-4 mb-1 card-title"${_scopeId}>Themesdesign</h5><p class="text-default-500"${_scopeId}>IT Software Company</p></div><div class="lg:col-span-9 lg:col-start-12 lg:text-end text-start text-sm"${_scopeId}><p class="mb-1 text-default-500"${_scopeId}>Legal Registration No: <span class="font-semibold"${_scopeId}>2155420</span></p><p class="mb-1 truncate text-default-500"${_scopeId}>Email: <span class="font-semibold"${_scopeId}>tailwick@themesdesign.in</span></p><p class="mb-1 text-default-500"${_scopeId}>Website: <a href="https://themesdesign.in" target="_blank" class="font-semibold underline text-primary"${_scopeId}>www.themesdesign.in</a></p><p class="text-default-500"${_scopeId}>Contact No: <span class="font-semibold"${_scopeId}>+(01) 123 678 9654</span></p></div></div><div class="grid md:grid-cols-4 grid-cols-1 mt-6 text-center md:divide-x divide-default-200 divide-dashed"${_scopeId}><div class="p-3 text-sm"${_scopeId}><h6 class="mb-1 font-semibold text-default-800"${_scopeId}>#TW15090254</h6><p class="text-default-500"${_scopeId}>Invoice No</p></div><div class="p-3 text-sm"${_scopeId}><h6 class="mb-1 font-semibold text-default-800"${_scopeId}>10 July, 2023</h6><p class="text-default-500"${_scopeId}>Create Date</p></div><div class="p-3 test-sm"${_scopeId}><span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/20"${_scopeId}>Paid</span><p class="text-default-500"${_scopeId}>Payment Status</p></div><div class="p-3 text-sm"${_scopeId}><h6 class="mb-1 font-semibold text-default-800"${_scopeId}>$873.96</h6><p class="text-default-500"${_scopeId}>Total Amount</p></div></div><div class="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8"${_scopeId}><div class="text-default-500"${_scopeId}><p class="mb-2 text-sm uppercase"${_scopeId}>Shipping Address</p><h6 class="mb-1 text-base font-semibold text-default-800"${_scopeId}>Paula Keenan</h6><p class="mb-1 text-sm"${_scopeId}>176 Arvid Crest Sheastad, IA</p><p class="mb-1 text-sm"${_scopeId}>+(211) 0123 456 897</p></div><div class="text-default-500"${_scopeId}><p class="mb-2 text-sm uppercase"${_scopeId}>Billing Address</p><h6 class="mb-1 text-base font-semibold text-default-800"${_scopeId}>Paula Keenan</h6><p class="mb-1 text-sm"${_scopeId}>176 Arvid Crest Sheastad, IA</p><p class="mb-1 text-sm"${_scopeId}>+(211) 0123 456 897</p><p class="mb-1 text-sm"${_scopeId}>TAX No. 5415421</p></div></div><div class="mt-8 overflow-x-auto"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><thead${_scopeId}><tr class="font-semibold border-b border-default-200 text-default-500 text-sm"${_scopeId}><th class="px-3.5 py-2.5 text-start"${_scopeId}>#</th><th class="px-3.5 py-2.5 text-start"${_scopeId}>Item Name</th><th class="px-3.5 py-2.5 text-start"${_scopeId}>Rate</th><th class="px-3.5 py-2.5 text-start"${_scopeId}>Quantity</th><th class="px-3.5 py-2.5 text-start"${_scopeId}>Amount</th></tr></thead><tbody${_scopeId}><tr class="border-b border-default-200 text-default-800 text-sm"${_scopeId}><td class="px-3.5 py-2.5"${_scopeId}>1</td><td class="px-3.5 py-2.5"${_scopeId}><h6 class="mb-1 font-medium"${_scopeId}>Webadmin - Premium Admin &amp; Dashboard</h6><p class="text-default-500"${_scopeId}>Build with Bootstrap, React JS, Angular, Vue etc.</p></td><td class="px-3.5 py-2.5"${_scopeId}>$24.00</td><td class="px-3.5 py-2.5"${_scopeId}>2</td><td class="px-3.5 py-2.5"${_scopeId}>$48</td></tr><tr class="border-b border-default-200 text-default-800 text-sm"${_scopeId}><td class="px-3.5 py-2.5"${_scopeId}>2</td><td class="px-3.5 py-2.5"${_scopeId}><h6 class="mb-1 font-medium"${_scopeId}>Webadmin - Admin &amp; Dashboard</h6><p class="text-default-500"${_scopeId}>Build with Bootstrap, React JS, Angular, Vue etc.</p></td><td class="px-3.5 py-2.5"${_scopeId}>$25.00</td><td class="px-3.5 py-2.5"${_scopeId}>4</td><td class="px-3.5 py-2.5"${_scopeId}>$100</td></tr><tr class="border-b border-default-200 text-default-800 text-sm"${_scopeId}><td class="px-3.5 py-2.5"${_scopeId}>1</td><td class="px-3.5 py-2.5"${_scopeId}><h6 class="mb-1 font-medium"${_scopeId}>Tocly - Admin &amp; Dashboard</h6><p class="text-default-500"${_scopeId}>Build with Bootstrap, React JS, Angular, Vue etc.</p></td><td class="px-3.5 py-2.5"${_scopeId}>$16.00</td><td class="px-3.5 py-2.5"${_scopeId}>9</td><td class="px-3.5 py-2.5"${_scopeId}>$144</td></tr></tbody><tbody${_scopeId}><tr class="text-default-500 text-sm"${_scopeId}><td colspan="3"${_scopeId}></td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>Sub Total</td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>$292</td></tr><tr class="text-default-500 text-sm"${_scopeId}><td colspan="3"${_scopeId}></td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>Estimated Tax (18%)</td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>$52.56</td></tr><tr class="text-default-500 text-sm"${_scopeId}><td colspan="3"${_scopeId}></td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>Item Discounts (15%)</td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>-$43.8</td></tr><tr class="text-default-500 text-sm"${_scopeId}><td colspan="3"${_scopeId}></td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>Shipping Charge</td><td class="border-b border-default-200 px-3.5 py-2.5"${_scopeId}>$29</td></tr><tr${_scopeId}><td colspan="3"${_scopeId}></td><td class="border-b border-default-200 px-3.5 py-2.5 font-medium text-sm"${_scopeId}>Total Amount</td><td class="border-b border-default-200 px-3.5 py-2.5 font-medium text-sm"${_scopeId}>$329.76</td></tr></tbody></table></div><div class="my-5 text-default-500 text-sm"${_scopeId}><p class="mb-2 text-sm uppercase"${_scopeId}>Payments Details</p><p class="mb-1"${_scopeId}>Payment Method: Credit Card</p><p class="mb-1"${_scopeId}>Card Holder: Paula Keenan</p><p class="mb-1"${_scopeId}>Card Number: xxxx xxxx xxxx 1402</p><p${_scopeId}>Total Amount: $755.96</p></div><p class="px-4 py-3 text-sm font-medium rounded-lg border border-info/20 text-info bg-info/10"${_scopeId}><b${_scopeId}>NOTES:</b> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</p></div></div></div></div>`);
          } else {
            return [
              createVNode(PageTitle, {
                subtitle: "Menu",
                title: "Overview"
              }),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "pb-5" }, [
                    createVNode("div", { class: "flex flex-wrap justify-between md:gap-0 gap-4 items-center" }, [
                      createVNode("div", null, [
                        createVNode("h6", { class: "mb-1 card-title" }, "#TW15090257"),
                        createVNode("ul", { class: "flex items-center gap-3 text-default-500 text-sm" }, [
                          createVNode("li", null, "Create: 10 July, 2023"),
                          createVNode("li", null, "Due: 10 July, 2023")
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("button", { class: "bg-purple-600 text-white btn hover:bg-purple-700" }, "Download"),
                        createVNode("button", {
                          class: "bg-primary text-nowrap text-white btn hover:bg-blue-600",
                          onclick: "window.print()"
                        }, [
                          createVNode(unref(Icon), {
                            icon: "lucide:save",
                            class: "size-4 text-white"
                          }),
                          createTextVNode("Save & Draft")
                        ]),
                        createVNode("div", { class: "hs-dropdown relative inline-flex" }, [
                          createVNode("button", {
                            type: "button",
                            class: "hs-dropdown-toggle btn size-9.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                            "aria-haspopup": "menu",
                            "aria-expanded": "false",
                            "aria-label": "Dropdown",
                            "hs-dropdown-placement": "bottom-end"
                          }, [
                            createVNode(unref(Icon), {
                              icon: "lucide:ellipsis",
                              class: "iconify size-4"
                            })
                          ]),
                          createVNode("div", {
                            class: "hs-dropdown-menu",
                            role: "menu"
                          }, [
                            createVNode("a", {
                              class: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded",
                              href: "#"
                            }, [
                              createVNode(unref(Icon), {
                                icon: "lucide:edit",
                                class: "size-3"
                              }),
                              createTextVNode(" Edit ")
                            ]),
                            createVNode("a", {
                              class: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded",
                              href: "#"
                            }, [
                              createVNode(unref(Icon), {
                                icon: "lucide:trash-2",
                                class: "size-3"
                              }),
                              createTextVNode(" Delete ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border rounded border-default-200" }, [
                    createVNode("div", { class: "p-8" }, [
                      createVNode("div", { class: "grid lg:grid-cols-12 items-center gap-4" }, [
                        createVNode("div", { class: "lg:col-span-3 text-start" }, [
                          createVNode("div", { class: "size-16 bg-default-100 flex items-center justify-center rounded-md" }, [
                            createVNode("img", {
                              src: unref(logo),
                              alt: "",
                              class: "h-8"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("h5", { class: "mt-4 mb-1 card-title" }, "Themesdesign"),
                          createVNode("p", { class: "text-default-500" }, "IT Software Company")
                        ]),
                        createVNode("div", { class: "lg:col-span-9 lg:col-start-12 lg:text-end text-start text-sm" }, [
                          createVNode("p", { class: "mb-1 text-default-500" }, [
                            createTextVNode("Legal Registration No: "),
                            createVNode("span", { class: "font-semibold" }, "2155420")
                          ]),
                          createVNode("p", { class: "mb-1 truncate text-default-500" }, [
                            createTextVNode("Email: "),
                            createVNode("span", { class: "font-semibold" }, "tailwick@themesdesign.in")
                          ]),
                          createVNode("p", { class: "mb-1 text-default-500" }, [
                            createTextVNode("Website: "),
                            createVNode("a", {
                              href: "https://themesdesign.in",
                              target: "_blank",
                              class: "font-semibold underline text-primary"
                            }, "www.themesdesign.in")
                          ]),
                          createVNode("p", { class: "text-default-500" }, [
                            createTextVNode("Contact No: "),
                            createVNode("span", { class: "font-semibold" }, "+(01) 123 678 9654")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid md:grid-cols-4 grid-cols-1 mt-6 text-center md:divide-x divide-default-200 divide-dashed" }, [
                        createVNode("div", { class: "p-3 text-sm" }, [
                          createVNode("h6", { class: "mb-1 font-semibold text-default-800" }, "#TW15090254"),
                          createVNode("p", { class: "text-default-500" }, "Invoice No")
                        ]),
                        createVNode("div", { class: "p-3 text-sm" }, [
                          createVNode("h6", { class: "mb-1 font-semibold text-default-800" }, "10 July, 2023"),
                          createVNode("p", { class: "text-default-500" }, "Create Date")
                        ]),
                        createVNode("div", { class: "p-3 test-sm" }, [
                          createVNode("span", { class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/20" }, "Paid"),
                          createVNode("p", { class: "text-default-500" }, "Payment Status")
                        ]),
                        createVNode("div", { class: "p-3 text-sm" }, [
                          createVNode("h6", { class: "mb-1 font-semibold text-default-800" }, "$873.96"),
                          createVNode("p", { class: "text-default-500" }, "Total Amount")
                        ])
                      ]),
                      createVNode("div", { class: "grid md:grid-cols-2 grid-cols-1 gap-5 mt-8" }, [
                        createVNode("div", { class: "text-default-500" }, [
                          createVNode("p", { class: "mb-2 text-sm uppercase" }, "Shipping Address"),
                          createVNode("h6", { class: "mb-1 text-base font-semibold text-default-800" }, "Paula Keenan"),
                          createVNode("p", { class: "mb-1 text-sm" }, "176 Arvid Crest Sheastad, IA"),
                          createVNode("p", { class: "mb-1 text-sm" }, "+(211) 0123 456 897")
                        ]),
                        createVNode("div", { class: "text-default-500" }, [
                          createVNode("p", { class: "mb-2 text-sm uppercase" }, "Billing Address"),
                          createVNode("h6", { class: "mb-1 text-base font-semibold text-default-800" }, "Paula Keenan"),
                          createVNode("p", { class: "mb-1 text-sm" }, "176 Arvid Crest Sheastad, IA"),
                          createVNode("p", { class: "mb-1 text-sm" }, "+(211) 0123 456 897"),
                          createVNode("p", { class: "mb-1 text-sm" }, "TAX No. 5415421")
                        ])
                      ]),
                      createVNode("div", { class: "mt-8 overflow-x-auto" }, [
                        createVNode("table", { class: "w-full whitespace-nowrap" }, [
                          createVNode("thead", null, [
                            createVNode("tr", { class: "font-semibold border-b border-default-200 text-default-500 text-sm" }, [
                              createVNode("th", { class: "px-3.5 py-2.5 text-start" }, "#"),
                              createVNode("th", { class: "px-3.5 py-2.5 text-start" }, "Item Name"),
                              createVNode("th", { class: "px-3.5 py-2.5 text-start" }, "Rate"),
                              createVNode("th", { class: "px-3.5 py-2.5 text-start" }, "Quantity"),
                              createVNode("th", { class: "px-3.5 py-2.5 text-start" }, "Amount")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            createVNode("tr", { class: "border-b border-default-200 text-default-800 text-sm" }, [
                              createVNode("td", { class: "px-3.5 py-2.5" }, "1"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, [
                                createVNode("h6", { class: "mb-1 font-medium" }, "Webadmin - Premium Admin & Dashboard"),
                                createVNode("p", { class: "text-default-500" }, "Build with Bootstrap, React JS, Angular, Vue etc.")
                              ]),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$24.00"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "2"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$48")
                            ]),
                            createVNode("tr", { class: "border-b border-default-200 text-default-800 text-sm" }, [
                              createVNode("td", { class: "px-3.5 py-2.5" }, "2"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, [
                                createVNode("h6", { class: "mb-1 font-medium" }, "Webadmin - Admin & Dashboard"),
                                createVNode("p", { class: "text-default-500" }, "Build with Bootstrap, React JS, Angular, Vue etc.")
                              ]),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$25.00"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "4"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$100")
                            ]),
                            createVNode("tr", { class: "border-b border-default-200 text-default-800 text-sm" }, [
                              createVNode("td", { class: "px-3.5 py-2.5" }, "1"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, [
                                createVNode("h6", { class: "mb-1 font-medium" }, "Tocly - Admin & Dashboard"),
                                createVNode("p", { class: "text-default-500" }, "Build with Bootstrap, React JS, Angular, Vue etc.")
                              ]),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$16.00"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "9"),
                              createVNode("td", { class: "px-3.5 py-2.5" }, "$144")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            createVNode("tr", { class: "text-default-500 text-sm" }, [
                              createVNode("td", { colspan: "3" }),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "Sub Total"),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "$292")
                            ]),
                            createVNode("tr", { class: "text-default-500 text-sm" }, [
                              createVNode("td", { colspan: "3" }),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "Estimated Tax (18%)"),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "$52.56")
                            ]),
                            createVNode("tr", { class: "text-default-500 text-sm" }, [
                              createVNode("td", { colspan: "3" }),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "Item Discounts (15%)"),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "-$43.8")
                            ]),
                            createVNode("tr", { class: "text-default-500 text-sm" }, [
                              createVNode("td", { colspan: "3" }),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "Shipping Charge"),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5" }, "$29")
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { colspan: "3" }),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5 font-medium text-sm" }, "Total Amount"),
                              createVNode("td", { class: "border-b border-default-200 px-3.5 py-2.5 font-medium text-sm" }, "$329.76")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "my-5 text-default-500 text-sm" }, [
                        createVNode("p", { class: "mb-2 text-sm uppercase" }, "Payments Details"),
                        createVNode("p", { class: "mb-1" }, "Payment Method: Credit Card"),
                        createVNode("p", { class: "mb-1" }, "Card Holder: Paula Keenan"),
                        createVNode("p", { class: "mb-1" }, "Card Number: xxxx xxxx xxxx 1402"),
                        createVNode("p", null, "Total Amount: $755.96")
                      ]),
                      createVNode("p", { class: "px-4 py-3 text-sm font-medium rounded-lg border border-info/20 text-info bg-info/10" }, [
                        createVNode("b", null, "NOTES:"),
                        createTextVNode(" All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/invoice/overview/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B0-r0Ret.mjs.map
