<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const username = "markxregie";
const profileUrl = `https://github.com/${username}`;
const isDark = ref(false);
let observer;
const { setRevealRef, visibleItems } = useScrollReveal();

const contributionChart = computed(
  () => `https://ghchart.rshah.org/000000/${username}`,
);

onMounted(() => {
  const updateTheme = () => {
    isDark.value = document.documentElement.classList.contains("dark");
  };

  updateTheme();
  observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    id="contributions"
    :ref="(el) => setRevealRef(el, 0)"
    data-reveal-index="0"
    :class="[
      'mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-2 pt-8 pb-2 text-center transition-all duration-700 sm:-mt-16 sm:min-h-[48vh] sm:px-6 sm:pt-2 sm:pb-0',
      visibleItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    ]"
    aria-labelledby="contributions-title"
  >
    <div class="w-full space-y-6 sm:space-y-8">
      <div class="space-y-3">
        <h2
          id="contributions-title"
          class="text-foreground whitespace-nowrap text-2xl font-bold sm:text-5xl"
        >
          GitHub Contributions
        </h2>
      </div>

      <a
        :href="profileUrl"
        target="_blank"
        rel="noreferrer"
        class="bg-card block overflow-hidden rounded-3xl border border-border p-2 sm:p-4"
      >
        <img
          :src="contributionChart"
          :alt="`${username} GitHub contribution graph`"
          :class="[
            'mx-auto w-full max-w-5xl transition',
            isDark ? 'invert' : '',
          ]"
        />
      </a>
    </div>
  </section>
</template>
