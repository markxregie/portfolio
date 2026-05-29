<script setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <section
    class="mx-auto w-full max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-4"
  >
    <div class="space-y-12 sm:space-y-20">
      <article
        v-for="n in 3"
        :key="n"
        class="animate-in fade-in"
        :style="{ animationDelay: `${n * 120}ms`, animationFillMode: 'both', animationDuration: '500ms' }"
      >
        <div class="grid gap-6 lg:grid-cols-[1fr]">
          <!-- Image grid skeleton -->
          <div class="grid grid-cols-[0.48fr_1fr] gap-2">
            <div class="grid gap-2">
              <Skeleton class="h-20 w-full rounded-2xl sm:h-64 lg:h-52" />
              <Skeleton class="h-20 w-full rounded-2xl sm:h-64 lg:h-52" />
            </div>
            <Skeleton class="h-[10.5rem] w-full rounded-2xl sm:h-[33rem] lg:h-[26.5rem]" />
          </div>
        </div>

        <!-- Description skeleton -->
        <div class="mt-6 max-w-3xl space-y-4 sm:mt-10 sm:space-y-5">
          <div class="space-y-3">
            <Skeleton class="h-4 w-full rounded sm:h-6" />
            <Skeleton class="h-4 w-11/12 rounded sm:h-6" />
            <Skeleton class="h-4 w-3/4 rounded sm:h-6" />
          </div>

          <!-- Button skeletons -->
          <div class="flex flex-wrap gap-3">
            <Skeleton class="size-11 rounded-md" />
            <Skeleton class="size-11 rounded-md" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
