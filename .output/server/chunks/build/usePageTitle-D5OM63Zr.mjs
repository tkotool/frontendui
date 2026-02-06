import { u as useHead, f as appTitle } from './server.mjs';

const usePageTitle = (pageTitle) => {
  useHead({
    title: `${pageTitle} | ${appTitle}`
  });
};

export { usePageTitle as u };
//# sourceMappingURL=usePageTitle-D5OM63Zr.mjs.map
