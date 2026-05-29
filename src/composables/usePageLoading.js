import { onMounted, ref } from "vue";

/**
 * Composable that simulates a loading state for page transitions.
 * Shows skeleton loaders for a brief duration to provide visual feedback
 * and prevent layout shift during component mount + data loading.
 *
 * @param {number} duration - Loading duration in milliseconds (default: 800)
 * @returns {{ isLoading: import('vue').Ref<boolean> }}
 */
export function usePageLoading(duration = 800) {
  const isLoading = ref(true);

  onMounted(() => {
    const timer = setTimeout(() => {
      isLoading.value = false;
    }, duration);

    return () => clearTimeout(timer);
  });

  return { isLoading };
}
