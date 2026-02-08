import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "auth" | "components-customizer-data" | "components-customizer" | "components-footer" | "components-mobile-menu" | "components-sidenav-components-app-menu" | "components-sidenav-components-menu-item" | "components-sidenav-components-menu-item-with-children" | "components-sidenav-components-data" | "components-sidenav" | "components-topbar-components-customizer-toggler" | "components-topbar-components-language-dropdown" | "components-topbar-components-notification-dropdown" | "components-topbar-components-theme-toggler" | "components-topbar-components-user-profile" | "components-topbar" | "vertical"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}