<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Navbar from "@/components/navbar.vue";
import ExperienceMainPage from "@/pages/experienceMainPage.vue";
import HomePage from "@/pages/homePage.vue";
import ProjectMainPage from "@/pages/projectMainPage.vue";
import ProjectUnavailable from "@/pages/projectUnavailable.vue";

const currentPath = ref(window.location.pathname);

function syncPath() {
  currentPath.value = window.location.pathname;
}

function syncScrollPosition() {
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
    return;
  }

  window.scrollTo(0, 0);
}

onMounted(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  syncScrollPosition();
  window.addEventListener("popstate", syncPath);
  window.addEventListener("popstate", syncScrollPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", syncPath);
  window.removeEventListener("popstate", syncScrollPosition);
});

const activePage = computed(() =>
  currentPath.value === "/projects"
    ? ProjectMainPage
    : currentPath.value === "/project-unavailable"
      ? ProjectUnavailable
    : currentPath.value === "/experience"
      ? ExperienceMainPage
      : HomePage,
);
</script>

<template>
  <div class="bg-background text-foreground min-h-screen overflow-x-hidden">
    <Navbar />
    <component :is="activePage" />
  </div>
</template>
