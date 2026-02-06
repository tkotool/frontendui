import { ref } from 'vue';

function useFlatpickr(options = {}) {
  const inputRef = ref();
  let picker = null;
  return { inputRef, picker };
}

export { useFlatpickr as u };
//# sourceMappingURL=useFlatpickr-DmUG61-x.mjs.map
