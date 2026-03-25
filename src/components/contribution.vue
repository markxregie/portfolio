<script setup>
const username = "markxregie";
const contributionChart = `https://ghchart.rshah.org/000000/${username}`;
const profileUrl = `https://github.com/${username}`;
</script>

<template>
  <section
    id="contributions"
    class="mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center"
    aria-labelledby="contributions-title"
  >
    <div class="w-full space-y-8">
      <div class="space-y-3">
        <h2
          id="contributions-title"
          class="text-4xl font-bold text-black sm:text-5xl"
        >
          GitHub Contributions
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-black/70 sm:text-xl">
          A snapshot of my contribution activity on GitHub.
        </p>
      </div>

      <a
        :href="profileUrl"
        target="_blank"
        rel="noreferrer"
        class="block overflow-hidden rounded-3xl bg-[#F2F0EF] p-4"
      >
        <img
          :src="contributionChart"
          :alt="`${username} GitHub contribution graph`"
          class="mx-auto w-full max-w-5xl"
        />
      </a>
    </div>
  </section>
</template>
