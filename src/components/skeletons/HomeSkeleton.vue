<script setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <main>
    <!-- Landing skeleton -->
    <section
      class="mx-auto flex min-h-[calc(90vh-72px)] w-full max-w-5xl flex-col items-center justify-center px-6 text-center animate-in fade-in"
      style="animation-delay: 80ms; animation-fill-mode: both; animation-duration: 500ms;"
    >
      <div class="space-y-4">
        <Skeleton class="mx-auto h-7 w-48 rounded sm:h-8" />
        <Skeleton class="mx-auto h-16 w-72 rounded sm:h-24 sm:w-96 md:h-32 md:w-[28rem]" />
      </div>
    </section>

    <!-- About Me skeleton -->
    <section
      class="mx-auto flex min-h-[86vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center animate-in fade-in"
      style="animation-delay: 200ms; animation-fill-mode: both; animation-duration: 500ms;"
    >
      <div class="space-y-10">
        <Skeleton class="mx-auto h-40 w-40 rounded-full sm:h-48 sm:w-48" />
        <div class="space-y-4">
          <Skeleton class="mx-auto h-8 w-48 rounded sm:h-10 sm:w-56" />
          <div class="mx-auto max-w-4xl space-y-3">
            <Skeleton class="mx-auto h-4 w-full rounded sm:h-6" />
            <Skeleton class="mx-auto h-4 w-11/12 rounded sm:h-6" />
            <Skeleton class="mx-auto h-4 w-3/4 rounded sm:h-6" />
          </div>
        </div>
      </div>
    </section>

    <!-- Frameworks skeleton -->
    <section
      class="mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-28 animate-in fade-in"
      style="animation-delay: 320ms; animation-fill-mode: both; animation-duration: 500ms;"
    >
      <Skeleton class="mb-8 h-8 w-56 rounded sm:h-10 sm:w-72" />
      <div class="flex w-full flex-wrap items-center justify-center gap-4">
        <div
          v-for="n in 18"
          :key="n"
          class="flex min-w-[108px] flex-col items-center gap-3 rounded-2xl px-4 py-5"
        >
          <Skeleton class="h-10 w-10 rounded-lg" />
          <Skeleton class="h-3 w-16 rounded" />
        </div>
      </div>
    </section>

    <!-- Project Summary skeleton -->
    <section class="mx-auto w-full max-w-6xl px-6 py-20 animate-in fade-in" style="animation-delay: 440ms; animation-fill-mode: both; animation-duration: 500ms;">
      <div class="space-y-32">
        <div
          v-for="n in 4"
          :key="n"
          class="grid items-center gap-10 md:grid-cols-2 animate-in fade-in"
          :style="{ animationDelay: `${440 + n * 120}ms`, animationFillMode: 'both', animationDuration: '500ms' }"
        >
          <div :class="n % 2 === 1 ? 'md:order-1' : 'md:order-2'" class="space-y-4">
            <div class="space-y-3">
              <Skeleton class="h-5 w-full rounded sm:h-6" />
              <Skeleton class="h-5 w-5/6 rounded sm:h-6" />
              <Skeleton class="h-5 w-2/3 rounded sm:h-6" />
            </div>
            <Skeleton class="h-4 w-48 rounded sm:h-5" />
          </div>
          <div :class="n % 2 === 1 ? 'md:order-2' : 'md:order-1'">
            <Skeleton class="h-72 w-full rounded-3xl sm:h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
