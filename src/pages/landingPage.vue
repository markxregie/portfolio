<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";

const { setRevealRef, visibleItems } = useScrollReveal();
</script>

<template>
  <section
    id="home"
    :ref="(el) => setRevealRef(el, 0)"
    data-reveal-index="0"
    :class="[
      'mx-auto flex min-h-[calc(90vh-72px)] w-full max-w-5xl -translate-y-6 flex-col items-center justify-center px-6 text-center transition-all duration-700',
      visibleItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    ]"
  >
    <div class="space-y-3">
      <p class="font-sans text-2xl text-foreground sm:text-3xl">
        Hello, my name is
      </p>
      <h1 class="font-sans text-7xl font-bold tracking-tight text-foreground sm:text-8xl md:text-[9rem]">
        Regie
      </h1>
    </div>
  </section>
</template>
