<script setup>
import largeProjectImage from "@/assets/geosensei.jpeg";
import smallProjectImageOne from "@/assets/hero.png";
import smallProjectImageTwo from "@/assets/geosensei.jpeg";
import { useScrollReveal } from "@/composables/useScrollReveal";

const projects = [
  {
    id: 1,
    summary:
      "This is a sample project description where you can explain what the project is about, what it solves, and the main value it brings in a short and clear paragraph.",
  },
  {
    id: 2,
    summary:
      "Use this second project block to describe another build with a short overview of the goal, the experience, and the result it delivered.",
  },
  {
    id: 3,
    summary:
      "This sample text can be replaced with your own project details, feature highlights, and a concise explanation of the problem you solved.",
  },
  {
    id: 4,
    summary:
      "Add one more project summary here with a clean short description and a pair of links that point to the live build and repository.",
  },
];

const { setRevealRef, visibleItems } = useScrollReveal({ threshold: 0.22 });
</script>

<template>
  <section
    id="project-gallery"
    class="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pt-4 pb-16"
  >
    <div class="space-y-24">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        :ref="(el) => setRevealRef(el, index)"
        :data-reveal-index="index"
        :class="[
          'transition-all duration-700',
          visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ]"
      >
        <div class="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <div class="grid gap-6">
            <img
              :src="smallProjectImageOne"
              alt="Project preview one"
              class="h-52 w-full rounded-3xl object-cover"
            />
            <img
              :src="smallProjectImageTwo"
              alt="Project preview two"
              class="h-52 w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <img
              :src="largeProjectImage"
              alt="Main project preview"
              class="h-full min-h-[430px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div class="mt-10 max-w-3xl space-y-5">
          <p class="text-muted-foreground text-lg leading-9 sm:text-xl">
            {{ project.summary }}
          </p>

          <div class="flex flex-wrap gap-6 text-base">
            <a href="#" class="text-foreground underline underline-offset-4">
              Live Demo
            </a>
            <a href="#" class="text-foreground underline underline-offset-4">
              GitHub Repository
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
