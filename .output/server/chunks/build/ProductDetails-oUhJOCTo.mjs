import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';
import { a as avatar8 } from './avatar-8-uqgcPDkb.mjs';

const avatar11 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductDetails",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-2 col-span-1" }, _attrs))}><div class="card"><div class="card-body"><div class="flex justify-between items-center"><span class="px-2.5 py-0.5 text-xs inline-block font-semibold rounded bg-info/10 text-info">New Arrivals</span><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:edit",
        class: "size-3"
      }, null, _parent));
      _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-3"
      }, null, _parent));
      _push(` Delete </a></div></div></div><h5 class="mt-3 mb-1 text-xl text-default-800 font-semibold">Smartees Printed Men Round Neck Pink</h5><ul class="flex flex-wrap text-sm items-center gap-4 mb-5 text-default-500"><li><a href="#!" class="font-medium underline text-primary text-sm">Rossie Fadel</a></li><li>Seller: <a href="#!" class="font-medium text-sm">Themesdesign</a></li><li>Published: <span class="font-medium text-sm">20 Oct, 2023</span></li></ul><div class="flex flex-wrap items-center gap-3 mb-4"><div class="flex items-center gap-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-4 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star-half",
        class: "size-4 fill-yellow-500"
      }, null, _parent));
      _push(`<div class="text-default-800 text-sm"><h6>(4.8)</h6></div></div><div class="text-default-800 text-sm"><h6>973 Reviews</h6></div><div class="text-default-800 text-sm"><h6>1,231 Sold</h6></div></div><div class="mb-4"><p class="mb-1 text-success text-sm">Special Price</p><h4 class="text-default-900 font-semibold text-xl">$487.32 <small class="font-normal text-base line-through align-middle text-default-500">$599.99</small> <small class="text-success text-base align-middle">20% Off</small></h4></div><h6 class="mb-3 text-[15px] font-semibold text-default-800">Select Color</h6><div class="flex gap-2"><input id="color1" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-primary"><input id="color2" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-red-300"><input id="color3" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-green-300"><input id="color4" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-default-500"><input id="color5" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-purple-500"><input id="color6" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-sky-500"><input id="color7" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-yellow-500"><input id="color8" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-green-500"><input id="color9" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-default-800"><input id="color10" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-default-200"><input id="color11" name="SelectColor" type="radio" class="form-radio rounded-sm size-5 text-emerald-300"></div><h6 class="mt-5 mb-3 card-title">Select Size</h6><div class="flex gap-2 items-center"><button class="btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">XS</button><button class="active btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">S</button><button class="btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">M</button><button class="btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">L</button><button class="btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">XL</button><button class="btn size-8 text-xs text-default-500 border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">2XL</button></div><h6 class="mt-5 mb-3 card-title">Available Offers (4)</h6><div class="flex gap-2 flex-col"><div class="flex gap-1.75 items-center"><div>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:tag",
        class: "size-4 text-success fill-success/20"
      }, null, _parent));
      _push(`</div><div class="text-default-700 text-sm"><span class="text-default-800 font-semibold">Bank Offer</span> 10% Instant Discount on Paypal, up to $1250 on orders of $5,000 and above <a href="#" class="underline text-primary">T&amp;C</a></div></div><div class="flex gap-1.75 items-center text-sm"><div>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:tag",
        class: "size-4 text-success fill-success/20"
      }, null, _parent));
      _push(`</div><div class="text-default-700 text-sm"><span class="text-default-800 font-semibold"> Special Price</span> Get at flat $199 <a href="#" class="underline text-primary">T&amp;C</a></div></div><div class="flex gap-1.75 items-center text-sm"><div>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:tag",
        class: "size-4 text-success fill-success/20"
      }, null, _parent));
      _push(`</div><div class="text-default-700"><span class="text-default-800 font-semibold"> Partner Offer</span> Purchase now &amp; get 1 surprise cashback coupon in Future <a href="#" class="underline text-primary">Know More</a></div></div><div class="flex gap-1.75 items-center text-sm"><div>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:tag",
        class: "size-4 text-success fill-success/20"
      }, null, _parent));
      _push(`</div><div class="text-default-700"><span class="text-default-800 font-semibold"> Bank Offer </span> UPI Offer Men&#39;s Clothing <a href="#" class="underline text-primary">T&amp;C</a></div></div></div><div class="grid lg:grid-cols-3 grid-cols-1 gap-3 my-5"><div class="flex items-center gap-5 p-4 border rounded-md border-default-200"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:truck",
        class: "size-6 text-default-500 fill-default-200"
      }, null, _parent));
      _push(`</div><div class="text-default-700 text-sm"><h6 class="mb-2 text-default-800 font-semibold">Estimated Delivery</h6><p>01 - 07 Dec, 2023</p></div></div><div class="flex items-center gap-5 p-4 border rounded-md border-default-200"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:container",
        class: "size-6 text-default-500 fill-default-200"
      }, null, _parent));
      _push(`</div><div class="text-default-700 text-sm"><h6 class="mb-2 text-default-800 font-semibold">Free Shipping &amp; Returns</h6><p>On all orders over $200.00</p></div></div></div><div class="mt-5"><h6 class="card-title mb-3">Product Description:</h6><p class="mb-2 text-sm text-default-600">Latest <b>Trends</b> in Fashion Clothing. Currently, the latest clothing trends for women on FabAlley include playful check print, breezy floral motif, bold red hue, cool denim fabric, quirky polka dot and romantic ruffles.</p><p class="text-default-600 text-sm"><b>Avoid shapeless and baggy clothing</b>. Stay away from pieces with extra fabric at the hips or bust to keep your look proportionate. Avoid wearing ruffles or pleats around your waist or hips. Be sure to wear supportive undergarments that fit you well!</p></div><div class="mt-5"><h6 class="card-title">Features:</h6><div class="overflow-x-auto"><table class="w-full"><tbody><tr><th class="px-3.5 py-2.5 font-semibold text-start text-sm w-64 text-default-500">Type</th><td class="px-3.5 py-2.5 text-sm text-default-700">Round Neck</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Sleeve</th><td class="px-3.5 py-2.5 text-sm text-default-700">Half Sleeve</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Fit</th><td class="px-3.5 py-2.5 text-sm text-default-700">Regular</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Fabric</th><td class="px-3.5 py-2.5 text-sm text-default-700">Cotton Blend</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Pack of</th><td class="px-3.5 py-2.5 text-sm text-default-700">1</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Product Code</th><td class="px-3.5 py-2.5 text-sm text-default-700">TWT1542</td></tr><tr><th class="px-3.5 py-2.5 font-semibold text-start w-64 text-default-500 text-sm">Ideal for</th><td class="px-3.5 py-2.5 text-sm text-default-700">Women</td></tr></tbody></table></div></div><h6 class="mt-5 mb-3 card-title">Ratings &amp; Reviews</h6><div class="grid lg:grid-cols-3 grid-cols-1 gap-5"><div class="col-span-1"><div class="card-body border border-dashed border-default-200 rounded-md"><div class="text-center"><h5 class="mb-2 text-base font-semibold text-default-800">Customer Ratings</h5><span class="px-3.5 py-1.5 text-default-500 inline-flex gap-3 text-xs font-medium rounded-full border bg-default-100 border-default-200"><span class="flex items-center gap-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star-half",
        class: "size-3 fill-yellow-500"
      }, null, _parent));
      _push(`</span> (4.8 out of 5) </span><p class="mt-2 text-[13px] text-default-500">4,213 total ratings</p></div><div class="flex flex-col gap-3 mt-4"><div class="flex items-center gap-3"><div class="flex items-center text-default-800 text-[13px]">5 `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.25 fill-yellow-500 ms-1 text-yellow-500"
      }, null, _parent));
      _push(`</div><div class="w-full h-1.5 rounded-full bg-default-200"><div class="h-1.5 rounded-full bg-success" style="${ssrRenderStyle({ "width": "79%" })}"></div></div><div class="text-end w-10 text-default-800 text-[13px]">1,210</div></div><div class="flex items-center gap-3"><div class="flex items-center text-default-800 text-[13px]">4 `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.25 fill-yellow-500 ms-1 text-yellow-500"
      }, null, _parent));
      _push(`</div><div class="w-full h-1.5 rounded-full bg-default-200"><div class="h-1.5 rounded-full bg-secondary" style="${ssrRenderStyle({ "width": "66%" })}"></div></div><div class="text-end w-10 text-default-800 text-[13px]">1,174</div></div><div class="flex items-center gap-3"><div class="flex items-center text-default-800 text-[13px]">3 `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.25 fill-yellow-500 ms-1 text-yellow-500"
      }, null, _parent));
      _push(`</div><div class="w-full h-1.5 rounded-full bg-default-200"><div class="h-1.5 rounded-full bg-info" style="${ssrRenderStyle({ "width": "45%" })}"></div></div><div class="text-end w-10 text-default-800 text-[13px]">762</div></div><div class="flex items-center gap-3"><div class="flex items-center text-default-800 text-[13px]">2 `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.25 fill-yellow-500 ms-1 text-yellow-500"
      }, null, _parent));
      _push(`</div><div class="w-full h-1.5 rounded-full bg-default-200"><div class="h-1.5 rounded-full bg-warning" style="${ssrRenderStyle({ "width": "22%" })}"></div></div><div class="text-end w-10 text-default-800 text-[13px]">274</div></div><div class="flex items-center gap-3"><div class="flex items-center text-default-800 text-[13px]">1 `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.25 fill-yellow-500 ms-1 text-yellow-500"
      }, null, _parent));
      _push(`</div><div class="w-full h-1.5 rounded-full bg-default-200"><div class="h-1.5 rounded-full bg-danger" style="${ssrRenderStyle({ "width": "5%" })}"></div></div><div class="text-end w-10 text-default-800 text-[13px]">32</div></div></div></div></div><div class="lg:col-span-2 col-span-1"><div class="flex justify-between items-center gap-5"><h6 class="text-default-800 font-semibold text-[15px]">Reviews</h6><button class="text-white btn btn-sm btn-primary">Add Review</button></div><div class="mt-3"><div class="flex justify-between items-center gap-5"><div class="flex gap-3 items-center"><div class="bg-sky-50 rounded-full"><img${ssrRenderAttr("src", unref(avatar2))} alt="" class="h-10 rounded-full"></div><div><h6 class="card-title"><a href="#">Aubrey Beer</a></h6><p class="text-[13px] text-default-500">on 14 Jan, 2024</p></div></div><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle flex justify-center items-center size-7.5 text-sm font-semibold rounded-md bg-default-100 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:edit",
        class: "size-3"
      }, null, _parent));
      _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-3"
      }, null, _parent));
      _push(` Delete </a></div></div></div><div class="flex items-center gap-2 mt-4 mb-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star-half",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(`</div><p class="text-default-500 text-sm">&quot;Nice product good quality and looking&quot;</p><div class="flex items-center gap-3 mt-3"><a href="#" class="text-success flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-up",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">15</span></a><a href="#" class="text-danger flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-down",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">3</span></a></div></div><div class="mt-3 pt-3 border-t border-default-200"><div class="flex justify-between items-center gap-5"><div class="flex gap-3 items-center"><div class="bg-default-200 rounded-full"><img${ssrRenderAttr("src", unref(avatar11))} alt="" class="h-10 rounded-full"></div><div><h6 class="card-title"><a href="#">Theodora Jones</a></h6><p class="text-[13px] text-default-500">on 20 July, 2023</p></div></div><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle flex justify-center items-center size-7.5 text-sm font-semibold rounded-md bg-default-100 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:edit",
        class: "size-3"
      }, null, _parent));
      _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-3"
      }, null, _parent));
      _push(` Delete </a></div></div></div><div class="flex items-center gap-2 mt-4 mb-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5"
      }, null, _parent));
      _push(`</div><p class="text-default-500 text-sm">&quot;Amazing! Fast, to the point, professional and really amazing to work with them!!!&quot;</p><div class="flex items-center gap-3 mt-3"><a href="#" class="text-success flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-up",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">77</span></a><a href="#" class="text-danger flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-down",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">26</span></a></div></div><div class="mt-3 pt-3 border-t border-default-200"><div class="flex justify-between items-center gap-5"><div class="flex gap-3 items-center"><div class="bg-yellow-100 rounded-full"><img${ssrRenderAttr("src", unref(avatar5))} alt="" class="h-10 rounded-full"></div><div><h6 class="card-title"><a href="#">Jordane Dare</a></h6><p class="text-default-500">on 07 Dec, 2023</p></div></div><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle flex justify-center items-center size-7.5 text-sm font-semibold rounded-md bg-default-100 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:edit",
        class: "size-3"
      }, null, _parent));
      _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-3"
      }, null, _parent));
      _push(` Delete </a></div></div></div><div class="flex items-center gap-2 mt-4 mb-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(`</div><p class="text-default-500 text-sm">&quot;Very nice design. Clean Code and easy customizable&quot;</p><div class="flex items-center gap-3 mt-3"><a href="#" class="text-success flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-up",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">31</span></a><a href="#" class="text-danger flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-down",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">09</span></a></div></div><div class="mt-3 pt-3 border-t border-default-200"><div class="flex justify-between items-center gap-5"><div class="flex gap-3 items-center"><div class="bg-green-100 rounded-full"><img${ssrRenderAttr("src", unref(avatar8))} alt="" class="h-10 rounded-full"></div><div><h6 class="card-title"><a href="#">avern Ratke</a></h6><p class="text-[13px] text-default-500">on 10 Aug, 2023</p></div></div><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle flex justify-center items-center size-7.5 text-sm font-semibold rounded-md bg-default-100 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:ellipsis",
        class: "iconify size-4"
      }, null, _parent));
      _push(`</button><div class="hs-dropdown-menu" role="menu"><div><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:edit",
        class: "size-3"
      }, null, _parent));
      _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:trash-2",
        class: "size-3"
      }, null, _parent));
      _push(` Delete </a></div></div></div></div><div class="flex items-center gap-2 mt-4 mb-2 text-yellow-500">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:star-half",
        class: "size-3.5 fill-yellow-500"
      }, null, _parent));
      _push(`</div><p class="text-default-500 text-sm">&quot;The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template.&quot;</p><div class="flex items-center gap-3 mt-3"><a href="#" class="text-success flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-up",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">49</span></a><a href="#" class="text-danger flex items-center gap-1.25">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:thumbs-down",
        class: "size-3"
      }, null, _parent));
      _push(`<span class="text-sm">17</span></a></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecommerce/product-detail/components/ProductDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductDetails-oUhJOCTo.mjs.map
