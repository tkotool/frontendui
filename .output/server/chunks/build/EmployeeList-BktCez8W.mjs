import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { d as dummy } from './user-dummy-img-n795NvBJ.mjs';
import { Icon } from '@iconify/vue';
import { u as user1, a as user2 } from './user-2-5dZEDRal.mjs';
import { u as user3 } from './user-3-uBIKIubb.mjs';
import { i as img4 } from './user-4-DKGiaxzZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployeeList",
  __ssrInlineRender: true,
  setup(__props) {
    const employees = [
      {
        employeeId: "#TWE1001528",
        name: "Willie Torres",
        avatar: user1,
        designation: "Nuxt JS Developer",
        email: "willie@tailwick.com",
        phone: "070 3715 3689",
        location: "United States",
        experience: "3 Year",
        joiningDate: "05 Feb, 2020"
      },
      {
        employeeId: "#TWE1001524",
        name: "Patricia Garcia",
        avatar: user2,
        designation: "ASP.Net Developer",
        email: "PatriciaJGarcia@tailwick.com",
        phone: "077 7317 7572",
        location: "Brazil",
        experience: "0.5 Year",
        joiningDate: "12 Aug, 2023"
      },
      {
        employeeId: "#TWE1001506",
        name: "Tonya Johnson",
        avatar: user3,
        designation: "Project Manager",
        email: "TonyaEJohnson@tailwick.com",
        phone: "079 2383 2340",
        location: "Denmark",
        experience: "0 Year",
        joiningDate: "11 Nov, 2023"
      },
      {
        employeeId: "#TWE1001502",
        name: "Jose White",
        avatar: img4,
        designation: "React Developer",
        email: "ameida@tailwick.com",
        phone: "03476 56 14 12",
        location: "Philippines",
        experience: "1.5 Year",
        joiningDate: "09 Jun, 2022"
      },
      {
        employeeId: "#TWE1001503",
        name: "Juliette Fecteau",
        avatar: user1,
        designation: "Sr. Angular Developer",
        email: "JulietteFecteau@tailwick.com",
        phone: "07231 96 25 88",
        location: "Belgium",
        experience: "1.9 Year",
        joiningDate: "11 May, 2021"
      },
      {
        employeeId: "#TWE1001504",
        name: "Jonas Frederiksen",
        avatar: user2,
        designation: "Team Leader",
        email: "jonas@tailwick.com",
        phone: "61 53 62 05",
        location: "France",
        experience: "2.9 Year",
        joiningDate: "18 Jan, 2019"
      },
      {
        employeeId: "#TWE1001505",
        name: "Kim Broberg",
        avatar: img4,
        designation: "UI / UX Designer",
        email: "KimBroberg@tailwick.com",
        phone: "040 382 2096",
        location: "Finland",
        experience: "1.2 Year",
        joiningDate: "23 April, 2021"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex flex-col"><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-100 font-normal whitespace-nowrap"><tr class="text-sm text-default-800"><th scope="col" class="px-3.5 py-3 font-medium text-start">Employee ID</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Name</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Designation</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Email Id</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Phone Number</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Location</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Experience</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Joining Date</th><th scope="col" class="px-3.5 py-3 font-medium text-start">Action</th></tr></thead><tbody class="divide-y divide-default-200"><!--[-->`);
      ssrRenderList(employees, (item, idx) => {
        _push(`<tr class="text-default-800 font-normal whitespace-nowrap"><td class="px-3.5 py-3 text-sm text-primary">${ssrInterpolate(item.employeeId)}</td><td class="px-3.5 py-3 text-sm"><a href="#" class="flex gap-3 items-center"><img${ssrRenderAttr("src", item.avatar)} alt="" class="h-6 rounded-full"><h6 class="text-heading font-medium">${ssrInterpolate(item.name)}</h6></a></td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.designation)}</td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.email)}</td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.phone)}</td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.location)}</td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.experience)}</td><td class="px-3.5 py-3 text-sm">${ssrInterpolate(item.joiningDate)}</td><td class="px-3.5 py-3"><div class="flex items-center gap-2"><a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(`</a><a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="employeeEdit" data-hs-overlay="#employeeEdit">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:pencil",
          class: "size-4"
        }, null, _parent));
        _push(`</a><a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="employeeDelete" data-hs-overlay="#employeeDelete">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-4"
        }, null, _parent));
        _push(`</a></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>10</b> of <b>38</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucid:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div><div id="employeeEdit" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="employeeEditlabel"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 max-w-md lg:w-full m-3 mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto"><div class="card-header"><h3 id="employeeEditlabel" class="font-semibold text-base text-default-800">Edit Employee Data</h3><button type="button" aria-label="Close" data-hs-overlay="#employeeEdit"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><div class="card-body overflow-y-auto lg:h-full h-160"><div class="grid grid-cols-1 gap-6 lg:grid-cols-12"><div class="lg:col-span-12 flex justify-center"><div class="relative mx-auto mb-4 rounded-full shadow-md size-24 bg-default-200"><img${ssrRenderAttr("src", unref(dummy))} alt="Profile" class="object-cover w-full h-full rounded-full user-profile-image"><div class="absolute bottom-0 right-0 flex items-center justify-center rounded-full size-8 bg-default-50 shadow-lg cursor-pointer"><input id="profile-img-file-input" name="profile-img-file-input" type="file" class="hidden"><label for="profile-img-file-input" class="flex items-center justify-center w-full h-full rounded-full cursor-pointer">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:image-plus",
        class: "size-4 text-default-400"
      }, null, _parent));
      _push(`</label></div></div></div><div class="lg:col-span-12"><label for="employeeId" class="block mb-2 text-sm font-medium text-default-700">Employee ID</label><input type="text" id="employeeId" value="#TWE1001528" class="form-input" disabled></div><div class="lg:col-span-12"><label for="employeeInput" class="block mb-2 text-sm font-medium text-default-700">Name</label><input type="text" id="employeeInput" placeholder="Employee name" value="Willie Torres" class="form-input"></div><div class="lg:col-span-12"><label for="emailInput" class="block mb-2 text-sm font-medium text-default-700">Email</label><input type="email" id="emailInput" placeholder="example@tailwick.com" value="willie@tailwick.com" class="form-input"></div><div class="lg:col-span-6"><label for="phoneNumberInput" class="block mb-2 text-sm font-medium text-default-700">Phone Number</label><input type="text" id="phoneNumberInput" placeholder="Enter phone number" value="070 3715 3689" class="form-input"></div><div class="lg:col-span-6"><label for="locationInput" class="block mb-2 text-sm font-medium text-default-700">Location</label><input type="text" id="locationInput" placeholder="Enter location" class="form-input"></div><div class="lg:col-span-6"><label for="joiningDateInput" class="block mb-2 text-sm font-medium text-default-700">Joining Date</label><input type="date" id="joiningDateInput" value="05 Feb, 2020" class="form-input"></div><div class="lg:col-span-6"><label for="experienceInput" class="block mb-2 text-sm font-medium text-default-700">Experience</label><input type="text" id="experienceInput" placeholder="0.0" class="form-input"></div><div class="lg:col-span-12"><label for="designationSelect" class="block mb-2 text-sm font-medium text-default-700">Designation</label><select id="designationSelect" class="form-input"><option selected>Angular Developer</option><option>ASP.Net Developer</option><option>NodeJS Developer</option><option>Project Manager</option><option>React Developer</option><option>Team Leader</option><option>UI / UX Designer</option><option>VueJs Developer</option><option>Web Designer</option></select></div></div></div><div class="card-footer flex justify-end gap-2"><button type="button" class="btn bg-transparent border-0 text-danger hover:bg-danger/10" data-hs-overlay="#employeeEdit">Cancel</button><button type="button" class="btn bg-primary text-white">Update</button></div></div></div></div><div id="employeeDelete" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="employeeDelete-label"><div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center"><div class="w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative"><div class="absolute top-3 end-3"><button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#employeeDelete"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:x",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><h3 class="font-semibold text-base text-default-800 text-center"><div class="mt-5 text-center"><h5 class="mb-1 text-lg font-semibold text-default-800">Are you sure?</h5><p class="text-default-500 text-sm font-normal">Are you certain you want to delete this record?</p><div class="mt-5 flex gap-2 justify-center"><button class="btn text-danger bg-transparent hover:bg-danger/10" aria-label="Close">Cancel</button><button class="btn bg-danger text-white">Yes,Delete It!</button></div></div></h3></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr-management/employee/components/EmployeeList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EmployeeList-BktCez8W.mjs.map
