<script setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <main class="mx-auto w-full max-w-6xl space-y-14 px-6 py-12 sm:space-y-20 sm:py-16">
    <!-- Education skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 80ms; animation-fill-mode: both; animation-duration: 500ms;">
      <div class="mb-8 space-y-2 sm:mb-14">
        <Skeleton class="h-9 w-48 rounded sm:h-12 sm:w-72" />
      </div>
      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px opacity-30"></div>
        <article class="relative flex items-start gap-6 sm:gap-8">
          <Skeleton class="h-16 w-16 shrink-0 rounded-full" />
          <div class="mt-1 flex-1 rounded-xl border border-border p-6 sm:p-8 space-y-4">
            <Skeleton class="h-3 w-40 rounded sm:h-4" />
            <div class="space-y-2">
              <Skeleton class="h-6 w-3/4 rounded sm:h-8" />
              <Skeleton class="h-4 w-2/3 rounded sm:h-5" />
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Work Experience skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 200ms; animation-fill-mode: both; animation-duration: 500ms;">
      <div class="mb-8 space-y-2 sm:mb-14">
        <Skeleton class="h-9 w-56 rounded sm:h-12 sm:w-80" />
      </div>
      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px opacity-30"></div>
        <article class="relative flex items-start gap-6 sm:gap-8">
          <Skeleton class="h-16 w-16 shrink-0 rounded-full" />
          <div class="mt-1 flex-1 rounded-xl border border-border p-6 sm:p-8 space-y-4">
            <Skeleton class="h-3 w-44 rounded sm:h-4" />
            <div class="space-y-2">
              <Skeleton class="h-6 w-2/3 rounded sm:h-8" />
            </div>
            <div class="mt-4 space-y-4">
              <div v-for="i in 3" :key="i" class="flex gap-3">
                <Skeleton class="mt-1 h-3 w-3 shrink-0 rounded-full" />
                <div class="flex-1 space-y-2">
                  <Skeleton class="h-4 w-full rounded sm:h-5" />
                  <Skeleton class="h-4 w-5/6 rounded sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Projects & Experience skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 320ms; animation-fill-mode: both; animation-duration: 500ms;">
      <div class="mb-8 space-y-2 sm:mb-14">
        <Skeleton class="h-9 w-72 rounded sm:h-12 sm:w-96" />
      </div>
      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px opacity-30"></div>
        <div class="space-y-12">
          <article
            v-for="n in 3"
            :key="n"
            class="relative flex items-start gap-6 sm:gap-8 animate-in fade-in"
            :style="{ animationDelay: `${320 + n * 120}ms`, animationFillMode: 'both', animationDuration: '500ms' }"
          >
            <Skeleton class="h-16 w-16 shrink-0 rounded-full" />
            <div class="mt-1 flex-1 rounded-xl border border-border p-6 sm:p-8 space-y-4">
              <Skeleton class="h-3 w-32 rounded sm:h-4" />
              <div class="space-y-2">
                <Skeleton class="h-6 w-3/4 rounded sm:h-8" />
                <Skeleton class="h-4 w-1/2 rounded sm:h-5" />
              </div>
              <div class="mt-4 space-y-4">
                <div v-for="i in 2" :key="i" class="flex gap-3">
                  <Skeleton class="mt-1 h-3 w-3 shrink-0 rounded-full" />
                  <div class="flex-1 space-y-2">
                    <Skeleton class="h-4 w-full rounded sm:h-5" />
                    <Skeleton class="h-4 w-4/5 rounded sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Leadership skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 700ms; animation-fill-mode: both; animation-duration: 500ms;">
      <Skeleton class="mb-8 h-7 w-64 rounded sm:h-10 sm:w-80" />
      <div class="rounded-xl border border-border p-6 sm:p-8 space-y-4">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-2">
            <Skeleton class="h-5 w-3/4 rounded sm:h-7" />
            <Skeleton class="h-4 w-1/2 rounded sm:h-5" />
          </div>
          <Skeleton class="h-3 w-28 rounded sm:h-4" />
        </div>
        <div class="mt-6 space-y-3">
          <div v-for="i in 2" :key="i" class="flex gap-3">
            <Skeleton class="mt-1 h-3 w-3 shrink-0 rounded-full" />
            <Skeleton class="h-4 w-full rounded sm:h-5" />
          </div>
        </div>
      </div>
    </section>

    <!-- Publications skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 820ms; animation-fill-mode: both; animation-duration: 500ms;">
      <Skeleton class="mb-8 h-7 w-56 rounded sm:h-10 sm:w-72" />
      <div class="space-y-6">
        <div v-for="n in 2" :key="n" class="rounded-xl border border-border p-6 shadow-sm space-y-3">
          <Skeleton class="h-3 w-56 rounded sm:h-4" />
          <Skeleton class="h-4 w-full rounded sm:h-5" />
          <Skeleton class="h-4 w-4/5 rounded sm:h-5" />
        </div>
      </div>
    </section>

    <!-- Skills skeleton -->
    <section class="animate-in fade-in" style="animation-delay: 940ms; animation-fill-mode: both; animation-duration: 500ms;">
      <Skeleton class="mb-8 h-7 w-52 rounded sm:h-10 sm:w-64" />
      <div class="rounded-xl border border-border p-6 shadow-sm">
        <div class="space-y-5">
          <div v-for="n in 4" :key="n" class="space-y-1">
            <Skeleton class="h-4 w-full rounded sm:h-5" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications skeleton -->
    <section class="pb-16 animate-in fade-in" style="animation-delay: 1060ms; animation-fill-mode: both; animation-duration: 500ms;">
      <Skeleton class="mb-8 h-7 w-48 rounded sm:h-10 sm:w-64" />
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div v-for="n in 2" :key="n" class="rounded-xl border border-border p-6 shadow-sm space-y-3">
          <Skeleton class="h-5 w-2/3 rounded sm:h-6" />
          <Skeleton class="h-4 w-full rounded sm:h-5" />
          <Skeleton class="h-4 w-5/6 rounded sm:h-5" />
        </div>
      </div>
    </section>
  </main>
</template>
