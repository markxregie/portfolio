<script setup>
import projects from "../data/project.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

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
        :key="project.title"
        :ref="(el) => setRevealRef(el, index)"
        :data-reveal-index="index"
        :class="[
          'transition-all duration-700',
          visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ]"
      >
        <div class="grid gap-6 lg:grid-cols-[1fr]">
          <div>
            <img
              :src="project.image"
              :alt="project.title || 'Project preview'"
              class="h-72 w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div class="mt-10 max-w-3xl space-y-5">
          <p class="text-muted-foreground text-lg leading-9 sm:text-xl">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-6 text-base">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noreferrer"
              class="text-foreground underline underline-offset-4"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
