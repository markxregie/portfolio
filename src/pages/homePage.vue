<script setup>
import Footer from "@/components/footer.vue";
import AboutMe from "@/pages/aboutMe.vue";
import Frameworks from "@/pages/frameworks.vue";
import LandingPage from "@/pages/landingPage.vue";
import ProjectSummary from "@/pages/projectSummary.vue";
</script>

<template>
  <main>
    <LandingPage />
    <AboutMe />
    <Frameworks />
    <ProjectSummary />
    <section id="experience" class="h-px scroll-mt-28" />
    <Footer />
  </main>
</template>
