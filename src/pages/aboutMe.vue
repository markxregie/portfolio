<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";

const { setRevealRef, visibleItems } = useScrollReveal();
</script>

<template>
  <section
    id="about"
    :ref="(el) => setRevealRef(el, 0)"
    data-reveal-index="0"
    :class="[
      'mx-auto flex min-h-[86vh] w-full max-w-5xl scroll-mt-24 flex-col items-center justify-center px-6 py-24 text-center transition-all duration-700',
      visibleItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    ]"
  >
    <div class="space-y-10">
      <img
        src="/Magtangob.jpg"
        alt="About me"
        class="mx-auto h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
      />

      <div class="space-y-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">About Me</h2>
        <p class="text-muted-foreground mx-auto max-w-4xl text-xl leading-9 sm:text-2xl sm:leading-10">
          I am a passionate developer who enjoys building clean, thoughtful, and
          user-friendly web experiences. I love turning ideas into simple,
          polished interfaces and continuously improving my craft through real
          projects.
        </p>
      </div>
    </div>
  </section>
</template>
