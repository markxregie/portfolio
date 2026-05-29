<script setup>
import Footer from "@/components/footer.vue";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton.vue";
import AboutMe from "@/pages/aboutMe.vue";
import Frameworks from "@/pages/frameworks.vue";
import LandingPage from "@/pages/landingPage.vue";
import { usePageLoading } from "@/composables/usePageLoading";

const { isLoading } = usePageLoading(800);
</script>

<template>
  <template v-if="isLoading">
    <HomeSkeleton />
  </template>
  <template v-else>
    <main>
      <LandingPage />
      <AboutMe />
      <Frameworks />
      <ProjectSummary />
      <section id="experience" class="h-px scroll-mt-28" />
      <Footer />
    </main>
  </template>
</template>
