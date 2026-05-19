<script setup>
import runnerImage from "@/assets/error/waiting.png";

function goToProjects() {
  window.history.pushState({}, "", "/projects");
  window.dispatchEvent(new PopStateEvent("popstate"));
}
</script>

<template>
  <main class="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-20">
    <section class="mx-auto max-w-xl text-center">
      <img
        :src="runnerImage"
        alt="Project unavailable illustration"
        class="mx-auto mb-8 h-auto w-48 sm:w-64"
      />
      <p class="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
        Project unavailable
      </p>
      <h1 class="mt-4 text-4xl font-semibold sm:text-5xl">
        Live demo link is not deployed yet.
      </h1>
      <p class="text-muted-foreground mt-6 text-lg leading-8">
        This project is available as a GitHub repository, but the live site is currently unavailable.
      </p>
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors"
        @click="goToProjects"
      >
        Back to projects
      </button>
    </section>
  </main>
</template>
