<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Navbar from "@/components/navbar.vue";
import ExperienceMainPage from "@/pages/experienceMainPage.vue";
import HomePage from "@/pages/homePage.vue";
import ProjectMainPage from "@/pages/projectMainPage.vue";

const currentPath = ref(window.location.pathname);

function syncPath() {
  currentPath.value = window.location.pathname;
}

onMounted(() => {
  window.addEventListener("popstate", syncPath);
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", syncPath);
});

const activePage = computed(() =>
  currentPath.value === "/projects"
    ? ProjectMainPage
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
