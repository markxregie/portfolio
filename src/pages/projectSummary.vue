<script setup>
import projectImage from "@/assets/geosensei.jpeg";
import { useScrollReveal } from "@/composables/useScrollReveal";

const projects = [
  {
    summary:
      "This is a sample project summary where you can briefly explain what the project does and why it matters.",
    stack: "Vue, Vite, Tailwind CSS",
    imageRight: true,
  },
  {
    summary:
      "Use this space to describe another project with a short overview focused on the result and user experience.",
    stack: "React, Next.js, Figma",
    imageRight: false,
  },
  {
    summary:
      "This block can hold a concise explanation of the project goal, the feature highlights, and the overall outcome.",
    stack: "Python, FastAPI, Django",
    imageRight: true,
  },
  {
    summary:
      "Add your final featured work here with a quick summary and a short list of the technologies you used.",
    stack: "C#, .NET, Bootstrap",
    imageRight: false,
  },
];

const { setRevealRef, visibleItems } = useScrollReveal();
</script>

<template>
  <section
    id="projects"
    class="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
  >
    <div class="space-y-32">
      <div
        v-for="project in projects"
        :key="project.summary"
        :ref="(el) => setRevealRef(el, projects.indexOf(project))"
        :data-reveal-index="projects.indexOf(project)"
        :class="[
          'grid items-center gap-10 transition-all duration-700 md:grid-cols-2',
          visibleItems[projects.indexOf(project)]
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0',
        ]"
      >
        <div
          :class="project.imageRight ? 'md:order-1 text-left' : 'md:order-2 text-left'"
          class="space-y-4"
        >
          <p class="text-muted-foreground max-w-2xl text-xl leading-9 sm:text-2xl sm:leading-10">
            {{ project.summary }}
          </p>
          <p class="text-muted-foreground/80 text-base tracking-wide sm:text-lg">
            {{ project.stack }}
          </p>
        </div>

        <div :class="project.imageRight ? 'md:order-2' : 'md:order-1'">
          <img
            :src="projectImage"
            alt="Project preview"
            class="h-full max-h-[480px] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
