<script setup>
import { Button } from "@/components/ui/button";
import projects from "../data/project.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

const { setRevealRef, visibleItems } = useScrollReveal({ threshold: 0.22 });

const projectImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/{bleubean,faithhopelove,geosensei,secondchances}/*", {
      eager: true,
      import: "default",
      query: "?url",
    }),
  ).map(([path, url]) => [path.replace("../assets/", ""), url]),
);

function resolveProjectImage(image) {
  return projectImages[image] || image;
}
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
          <div
            v-if="project.images?.length >= 3"
            class="grid gap-2 lg:grid-cols-[0.48fr_1fr]"
          >
            <div class="grid gap-2">
              <img
                v-for="image in project.images.slice(0, 2)"
                :key="image"
                :src="resolveProjectImage(image)"
                :alt="project.title || 'Project preview'"
                class="h-52 w-full rounded-2xl object-cover sm:h-64 lg:h-52"
              />
            </div>

            <img
              :src="resolveProjectImage(project.images[2])"
              :alt="project.title || 'Project preview'"
              class="h-72 w-full rounded-2xl object-cover sm:h-[33rem] lg:h-[26.5rem]"
            />
          </div>

          <div
            v-else-if="project.images?.length"
            class="grid gap-3 sm:grid-cols-2"
          >
            <img
              v-for="image in project.images"
              :key="image"
              :src="resolveProjectImage(image)"
              :alt="project.title || 'Project preview'"
              class="h-60 w-full rounded-2xl object-cover"
            />
          </div>

          <div v-else>
            <img
              :src="resolveProjectImage(project.image)"
              :alt="project.title || 'Project preview'"
              class="h-72 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div class="mt-10 max-w-3xl space-y-5">
          <p class="text-muted-foreground text-lg leading-9 sm:text-xl">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-3">
            <Button
              v-if="project.liveDemo"
              as="a"
              :href="project.liveDemo"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="icon"
              class="size-11 hover:bg-transparent [&_svg]:size-6"
              :aria-label="`Open ${project.title} project link`"
              :title="`Open ${project.title} project link`"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Button>

            <Button
              v-if="project.github"
              as="a"
              :href="project.github"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="icon"
              class="size-11 hover:bg-transparent [&_svg]:size-6"
              :aria-label="`Open ${project.title} GitHub repository`"
              :title="`Open ${project.title} GitHub repository`"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A11.1 11.1 0 0 1 12 6.07c.98 0 1.96.13 2.88.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.15c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
