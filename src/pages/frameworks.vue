<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const technologies = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Vite", slug: "vite" },
  { name: "Vue", slug: "vuedotjs" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Figma", slug: "figma" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Python", slug: "python" },
  { name: "C#", slug: "csharp" },
  { name: ".NET", slug: "dotnet" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Django", slug: "django" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
];

const isDark = ref(false);
let observer;
const { setRevealRef, visibleItems } = useScrollReveal();

const iconColor = computed(() => (isDark.value ? "F2F0EF" : "000000"));

function iconUrl(slug) {
  return `https://cdn.simpleicons.org/${slug}/${iconColor.value}`;
}

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
    :ref="(el) => setRevealRef(el, 0)"
    data-reveal-index="0"
    :class="[
      'mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-28 transition-all duration-700',
      visibleItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    ]"
    aria-labelledby="frameworks-title"
  >
    <h2
      id="frameworks-title"
      class="text-foreground mb-8 text-center text-3xl font-bold sm:text-4xl"
    >
      Frameworks & Tools
    </h2>

    <div
      class="flex w-full flex-wrap items-center justify-center gap-4"
      aria-label="Framework icons"
    >
      <div
        v-for="technology in technologies"
        :key="technology.slug"
        class="bg-background flex min-w-[110px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl px-4 py-5 text-center"
      >
        <img
          :src="iconUrl(technology.slug)"
          :alt="technology.name"
          class="h-10 w-10"
        />
        <span class="text-foreground text-sm font-semibold">
          {{ technology.name }}
        </span>
      </div>
    </div>
  </section>
</template>
