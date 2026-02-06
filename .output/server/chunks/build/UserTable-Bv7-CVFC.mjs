import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';
import { Icon } from '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserTable",
  __ssrInlineRender: true,
  setup(__props) {
    const users = [
      {
        id: "#TW1500001",
        name: "Marie Prohaska",
        role: "Graphic Designer",
        location: "United Kingdom",
        email: "prohaska@tailwick.com",
        phone: "853 565 9802",
        joined: "04 Jan, 2023",
        status: "Verified",
        variant: "bg-success/10 text-success",
        avatar: avatar2
      },
      {
        id: "#TW1500002",
        name: "Jaqueline Hammes",
        role: "ASP.Net Developer",
        location: "Brazil",
        email: "jaqueline@tailwick.com",
        phone: "546 6334 586",
        joined: "18 Jan, 2023",
        status: "Waiting",
        variant: "bg-default-200 text-default-600",
        avatar: avatar1
      },
      {
        id: "#TW1500003",
        name: "Marlene Hirthe",
        role: "Angular Developer",
        location: "Spain",
        email: "marlene@tailwick.com",
        phone: "141 654 9876",
        joined: "04 Feb, 2023",
        status: "Verified",
        variant: "bg-success/10 text-success",
        avatar: avatar2
      },
      {
        id: "#TW1500004",
        name: "Akeem Paucek",
        role: "Jr. Developer",
        location: "Mexico",
        email: "akeem.p@tailwick.com",
        phone: "783 962 3972",
        joined: "12 Feb, 2023",
        status: "Rejected",
        variant: "bg-danger/10 text-danger",
        avatar: avatar3
      },
      {
        id: "#TW1500005",
        name: "Stephon Trantow",
        role: "Full Stack Developer",
        location: "Spain",
        email: "akeem.p@tailwick.com",
        phone: "032 126 5833",
        joined: "31 Feb, 2023",
        status: "Rejected",
        variant: "bg-danger/10 text-danger",
        avatar: avatar1
      },
      {
        id: "#TW1500006",
        name: "Domenic Tromp",
        role: "Team Leader",
        location: "Germany",
        email: "domenic@tailwick.com",
        phone: "612 6088 735",
        joined: "27 Oct, 2023",
        status: "Verified",
        variant: "bg-success/10 text-success",
        initials: "DT"
      },
      {
        id: "#TW1500007",
        name: "Ethel Corwin",
        role: "Web Designer",
        location: "Italy",
        email: "ecorwin@tailwick.com",
        phone: "216 897 4978",
        joined: "03 Aug, 2023",
        status: "Verified",
        variant: "bg-success/10 text-success",
        avatar: avatar2
      },
      {
        id: "#TW1500008",
        name: "Rickie Cremin",
        role: "Web Designer",
        location: "France",
        email: "ecorwin@tailwick.com",
        phone: "388 946 3889",
        joined: "01 July, 2023",
        status: "Waiting",
        variant: "bg-default-200 text-default-600",
        avatar: avatar3
      },
      {
        id: "#TW1500010",
        name: "Reagan Larson",
        role: "Team Leader",
        location: "Germany",
        email: "glennie@tailwick.com",
        phone: "357 716 8847",
        joined: "11 Dec, 2023",
        status: "Verified",
        variant: "bg-success/10 text-success",
        initials: "RL"
      },
      {
        id: "#TW1500010",
        name: "Glennie Langosh",
        role: "Project Manager",
        location: "Germany",
        email: "glennie@tailwick.com",
        phone: "357 716 8847",
        joined: "11 Dec, 2023",
        status: "Rejected",
        variant: "bg-danger/10 text-danger",
        avatar: avatar4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="overflow-x-auto"><div class="min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-default-200"><thead class="bg-default-150"><tr class="text-sm font-normal text-default-700 whitespace-nowrap"><th class="ps-4 text-start"><input id="checkbox-all" type="checkbox" class="form-checkbox"></th><th scope="col" class="px-3.5 py-3 text-start">User ID</th><th scope="col" class="px-3.5 py-3 text-start">Name</th><th scope="col" class="px-3.5 py-3 text-start">Location</th><th scope="col" class="px-3.5 py-3 text-start">Email</th><th scope="col" class="px-3.5 py-3 text-start">Phone Number</th><th scope="col" class="px-3.5 py-3 text-start">Joining Date</th><th scope="col" class="px-3.5 py-3 text-start">Status</th><th scope="col" class="px-3.5 py-3 text-start">Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(users, (item, idx) => {
        _push(`<tr class="text-default-800 font-normal text-sm whitespace-nowrap"><td class="px-4 py-3"><input id="checkbox-all" type="checkbox" class="form-checkbox"></td><td class="px-3.5 py-3 text-sm text-primary">${ssrInterpolate(item.id)}</td><td class="flex py-3 px-3.5 items-center gap-3"><div class="size-10 rounded-full bg-default-200">`);
        if (item.avatar) {
          _push(`<img${ssrRenderAttr("src", item.avatar)} alt="" class="h-10 rounded-full">`);
        } else {
          _push(`<div class="w-9 h-9 flex items-center justify-center rounded-full bg-default-200 font-semibold">${ssrInterpolate(item.initials)}</div>`);
        }
        _push(`</div><div><h6 class="mb-1.5 font-semibold"><a href="#" class="text-default-800">${ssrInterpolate(item.name)}</a></h6><p class="text-default-500">${ssrInterpolate(item.role)}</p></div></td><td class="py-3 px-3.5">${ssrInterpolate(item.location)}</td><td class="py-3 px-3.5">${ssrInterpolate(item.email)}</td><td class="py-3 px-3.5">${ssrInterpolate(item.phone)}</td><td class="py-3 px-3.5">${ssrInterpolate(item.joined)}</td><td class="px-3.5 py-3"><span class="${ssrRenderClass([item.variant, "py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded"])}">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:check-circle-2",
          class: "size-3"
        }, null, _parent));
        _push(` ${ssrInterpolate(item.status)}</span></td><td class="px-3.5 py-3"><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:ellipsis",
          class: "iconify size-4"
        }, null, _parent));
        _push(`</button><div class="hs-dropdown-menu" role="menu"><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:eye",
          class: "size-3"
        }, null, _parent));
        _push(` Overview </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:edit",
          class: "size-3"
        }, null, _parent));
        _push(` Edit </a><a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:trash-2",
          class: "size-3"
        }, null, _parent));
        _push(` Delete </a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="card-footer"><p class="text-default-500 text-sm">Showing <b>10</b> of <b>58</b> Results</p><nav class="flex items-center gap-2" aria-label="Pagination"><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-left",
        class: "size-4 me-1"
      }, null, _parent));
      _push(` Prev</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button><button type="button" class="btn size-7.5 bg-primary text-white">2</button><button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button><button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"> Next `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:chevron-right",
        class: "size-4 ms-1"
      }, null, _parent));
      _push(`</button></nav></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/list/components/UserTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UserTable-Bv7-CVFC.mjs.map
