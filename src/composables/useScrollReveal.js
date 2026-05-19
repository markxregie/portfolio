import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScrollReveal(options = {}) {
  const revealRefs = ref([]);
  const visibleItems = ref({});
  let observer;

  function setRevealRef(el, index) {
    if (el) {
      revealRefs.value[index] = el;
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.revealIndex);
          visibleItems.value = {
            ...visibleItems.value,
            [index]: entry.isIntersecting,
          };
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      },
    );

    revealRefs.value.forEach((el) => {
      if (el) observer.observe(el);
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    setRevealRef,
    visibleItems,
  };
}
