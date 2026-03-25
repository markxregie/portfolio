<script setup>
const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];
</script>

<template>
  <footer class="w-full bg-background/95">
    <div
      class="mx-auto flex w-full max-w-6xl items-start justify-between gap-6 px-6 py-8"
    >
      <div class="flex items-center pt-8">
        <p class="text-muted-foreground text-base sm:text-lg">
          Frontend Developer
        </p>
      </div>

      <div class="flex flex-col items-start">
        <h2 class="text-foreground text-base font-semibold sm:text-lg">Socials</h2>
        <div class="mt-2 flex flex-row items-center gap-6">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            class="text-muted-foreground hover:text-foreground text-base transition-colors sm:text-lg"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
