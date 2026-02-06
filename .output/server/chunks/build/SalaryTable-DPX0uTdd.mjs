import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { u as useFlatpickr } from './useFlatpickr-DmUG61-x.mjs';
import { u as user1, a as user2 } from './user-2-5dZEDRal.mjs';
import { u as user3 } from './user-3-uBIKIubb.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar6 } from './avatar-6-Fu8xKLWl.mjs';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';
import { a as avatar8 } from './avatar-8-uqgcPDkb.mjs';
import { a as avatar9 } from './avatar-9-DeVQJ4LP.mjs';
import { a as avatar10 } from './avatar-10-DjVkpQI6.mjs';
import { d as dummy } from './user-dummy-img-n795NvBJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SalaryTable",
  __ssrInlineRender: true,
  setup(__props) {
    useFlatpickr({});
    const employees = [
      { id: "#TWE1001501", joiningDate: "05 Feb, 2020", name: "Willie Torres", designation: "Nuxt JS Developer", email: "willie@tailwick.com", phone: "070 3715 3689", salary: "$8,500", bonus: "$500", avatar: user1 },
      { id: "#TWE1001524", joiningDate: "12 Aug, 2023", name: "Patricia Garcia", designation: "ASP.Net Developer", email: "PatriciaJGarcia@tailwick.com", phone: "077 7317 7572", salary: "$3,800", bonus: "-", avatar: avatar3 },
      { id: "#TWE1001506", joiningDate: "11 Nov, 2023", name: "Tonya Johnson", designation: "Project Manager", email: "TonyaEJohnson@tailwick.com", phone: "079 2383 2340", salary: "$6,000", bonus: "$1,500", avatar: avatar6 },
      { id: "#TWE1001502", joiningDate: "09 Jun, 2022", name: "Jose White", designation: "React Developer", email: "ameida@tailwick.com", phone: "03476 56 14 12	", salary: "$7,150", bonus: "$300", avatar: dummy },
      { id: "#TWE1001503", joiningDate: "11 May, 2021", name: "Juliette Fecteau", designation: "Sr. Angular Developer	", email: "JulietteFecteau@tailwick.com", phone: "07231 96 25 88", salary: "$7,900", bonus: "-", avatar: user3 },
      { id: "#TWE1001504", joiningDate: "18 Jan, 2019", name: "Jonas Frederiksen", designation: " Team Leader", email: "jonas@tailwick.com", phone: "61 53 62 05", salary: "$5,399", bonus: "-", avatar: user2 },
      { id: "#TWE1001505", joiningDate: "23 April, 2021", name: "Kim Broberg", designation: "UI / UX Designer", email: "KimBroberg@tailwick.com", phone: "040 382 2096", salary: "$6,983", bonus: "$1,800", avatar: avatar8 },
      { id: "#TWE1001507", joiningDate: "01 July, 2022", name: "Nancy Reynolds", designation: "Web Designer", email: "NancyM@tailwick.com", phone: "0391 13 79 21", salary: "$3,300", bonus: "$1,000", avatar: avatar10 },
      { id: "#TWE1001508", joiningDate: "08 Aug, 2021", name: "Thomas Hatfield", designation: "VueJs Developer", email: "thomas@tailwick.com", phone: "0911 47 65 49", salary: "$9,145", bonus: "$760", avatar: avatar9 },
      { id: "#TWE1001509", joiningDate: "23 Dec, 2020", name: "Holly Kavanaugh", designation: "Laravel Developer", email: "HollyKavanaugh@tailwick.com", phone: "819 947 5846", salary: "$8,750", bonus: "$2,300", avatar: avatar4 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header"><div class="flex gap-3"><div class="relative"><input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...."><div class="absolute inset-y-0 start-0 flex items-center ps-3">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:search",
        class: "size-4 flex items-center text-default-500"
      }, null, _parent));
      _push(`</div></div><input type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly></div><a href="/hr-management/create-payslip" class="btn btn-sm bg-primary text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:plus",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Create Salary </a></div><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal text-default-500"><th scope="col" class="px-3.5 py-3 text-start">Employee ID</th><th scope="col" class="px-3.5 py-3 text-start">Joining Date</th><th scope="col" class="px-3.5 py-3 text-start">Name</th><th scope="col" class="px-3.5 py-3 text-start">Designation</th><th scope="col" class="px-3.5 py-3 text-start">Email Id</th><th scope="col" class="px-3.5 py-3 text-start">Phone Number</th><th scope="col" class="px-3.5 py-3 text-start">Salary</th><th scope="col" class="px-3.5 py-3 text-start">Bonus</th><th scope="col" class="px-3.5 py-3 text-start">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(employees, (item, idx) => {
        _push(`<tr class="text-default-800 font-normal"><td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary"><a href="#">${ssrInterpolate(item.id)}</a></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.joiningDate)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm"><a href="#" class="flex items-center gap-3"><div class="rounded-full size-6 shrink-0 bg-default-100"><img${ssrRenderAttr("src", item.avatar)} alt="" class="h-6 rounded-full"></div><h6 class="text-sm text-default-800">${ssrInterpolate(item.name)}</h6></a></td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.designation)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.email)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.phone)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.salary)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${ssrInterpolate(item.bonus)}</td><td class="px-3.5 py-2.5 whitespace-nowrap text-sm flex items-center gap-2"><a href="/hr-management/payslip" class="text-xs text-white bg-sky-500 transition-all duration-300 hover:bg-sky-600 rounded py-1.5 px-2">Generate Slip</a><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:ellipsis",
          class: "iconify size-4"
        }, null, _parent));
        _push(`</button><div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(` Overview </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:edit",
          class: "size-3"
        }, null, _parent));
        _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="#">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-3"
        }, null, _parent));
        _push(` Delete </a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>10</b> of <b>46</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">4</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/(payroll)/employee-salary/components/SalaryTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SalaryTable-DPX0uTdd.mjs.map
