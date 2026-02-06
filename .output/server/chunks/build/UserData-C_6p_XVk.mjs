import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as avatar1 } from './avatar-1-so5nc_yQ.mjs';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';
import { a as avatar5 } from './avatar-5-DeNxQLba.mjs';
import { a as avatar6 } from './avatar-6-Fu8xKLWl.mjs';
import { a as avatar7 } from './avatar-7-CbAcGjRM.mjs';
import { a as avatar8 } from './avatar-8-uqgcPDkb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserData",
  __ssrInlineRender: true,
  setup(__props) {
    const users = [
      {
        id: 1,
        name: "Paula Keenan",
        role: "Admin",
        address: "748 Luettgen Plain Suite South Winstonfort, NM",
        avatar: avatar1,
        status: "online"
      },
      {
        id: 2,
        name: "Marie Prohaska",
        role: "Subscriber",
        address: "125 Ortiz Camp Suite 471 Rippinport, US",
        avatar: avatar2,
        status: "online"
      },
      {
        id: 3,
        name: "Jaqueline Hammes",
        role: "Editor",
        address: "8716 Dell Manors New Ahmedmouth, WI",
        avatar: avatar3,
        status: "online"
      },
      {
        id: 4,
        name: "Angus Bergstrom",
        role: "Developer",
        address: "617 Powlowski Crossroad Apt. 716 New Victoria",
        initials: "AB",
        status: "online"
      },
      {
        id: 5,
        name: "Aurore Maggio",
        role: "Subscriber",
        address: "8751 Boyer Courts Suite 532 West Fletcherside",
        avatar: avatar4,
        status: "offline"
      },
      {
        id: 6,
        name: "Andrea Pesina",
        role: "Editor",
        address: "32 Maidstone Road WELLSBOROUGH",
        initials: "AP",
        status: "online"
      },
      {
        id: 7,
        name: "Daniel Miller",
        role: "Subscriber",
        address: "431 Elk Rd Little Ticonderoga, NY",
        avatar: avatar5,
        status: "offline"
      },
      {
        id: 8,
        name: "Ashley Wilson",
        role: "Subscriber",
        address: "0816 Bradford Alley Lake Adamfort, ME",
        avatar: avatar6,
        status: "online"
      },
      {
        id: 9,
        name: "William Heineman",
        role: "Author",
        address: "99614 Pollich Extension Apt. 938 South Alf, GA",
        avatar: avatar7,
        status: "online"
      },
      {
        id: 10,
        name: "Kara Miller",
        role: "Subscriber",
        address: "755 Kody Plaza Apt. 138 East Reinholdberg, AR",
        avatar: avatar8,
        status: "online"
      },
      {
        id: 11,
        name: "Mark Walton",
        role: "Author",
        address: "895 Camylle Tunnel Lake Chasity, SC",
        initials: "MW",
        status: "online"
      },
      {
        id: 12,
        name: "David Biggs",
        role: "Subscriber",
        address: "75, Deccan Gymkhana, Alwar",
        initials: "DB",
        status: "offline"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5" }, _attrs))}><!--[-->`);
      ssrRenderList(users, (item, idx) => {
        _push(`<div class="card"><div class="card-body"><div class="relative flex items-center justify-center mx-auto text-lg rounded-full size-16 bg-default-100">`);
        if (item.avatar) {
          _push(`<img${ssrRenderAttr("src", item.avatar)} alt="" class="rounded-full size-16">`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(item.initials)} <span class="absolute bg-success border-2 border-white rounded-full size-3 end-0 bottom-1"></span></div><div class="mt-4 text-center text-default-500"><h5 class="mb-1 text-base text-default-800 font-semibold"><a href="/">${ssrInterpolate(item.name)}</a></h5><p class="mb-3 text-sm text-default-500">@${ssrInterpolate(item.role)}</p><p class="text-sm text-default-500">${ssrInterpolate(item.address)}</p></div><div class="flex gap-2 mt-5"><a href="/apps/chat" class="btn border-primary text-primary hover:bg-primary hover:text-white flex-grow">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "lucide:messages-square",
          class: "iconify"
        }, null, _parent));
        _push(`<span class="align-middle">Send Message</span></a><div class="hs-dropdown relative inline-flex"><button type="button" class="hs-dropdown-toggle btn bg-primary size-9 text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">`);
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
        _push(` Delete </a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/grid/components/UserData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UserData-C_6p_XVk.mjs.map
