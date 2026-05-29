<script setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-2 pt-8 pb-2 text-center sm:-mt-16 sm:min-h-[48vh] sm:px-6 sm:pt-2 sm:pb-0 animate-in fade-in"
    style="animation-delay: 80ms; animation-fill-mode: both; animation-duration: 500ms;"
  >
    <div class="w-full space-y-6 sm:space-y-8">
      <div class="space-y-3">
        <Skeleton class="mx-auto h-7 w-64 rounded sm:h-12 sm:w-96" />
      </div>
      <div class="overflow-hidden rounded-3xl border border-border p-2 sm:p-4">
        <Skeleton class="mx-auto h-24 w-full max-w-5xl rounded-xl sm:h-36" />
      </div>
    </div>
  </section>
</template>
