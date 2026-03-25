<script setup>
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

function iconUrl(slug) {
  return `https://cdn.simpleicons.org/${slug}/000000`;
}
</script>

<template>
  <section
    class="mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-28"
    aria-labelledby="frameworks-title"
  >
    <h2
      id="frameworks-title"
      class="mb-8 text-center text-3xl font-bold text-black sm:text-4xl"
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
        <span class="text-sm font-semibold text-black">
          {{ technology.name }}
        </span>
      </div>
    </div>
  </section>
</template>
