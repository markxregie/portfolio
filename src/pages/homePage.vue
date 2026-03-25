<script setup>
import Contribution from "@/components/contribution.vue";
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar.vue";
import AboutMe from "@/pages/aboutMe.vue";
import Frameworks from "@/pages/frameworks.vue";
import LandingPage from "@/pages/landingPage.vue";
</script>

<template>
  <main class="bg-background text-foreground min-h-screen overflow-x-hidden">
    <Navbar />
    <LandingPage />
    <AboutMe />
    <Frameworks />
  
    <section id="projects" class="h-px scroll-mt-28" />
    <section id="experience" class="h-px scroll-mt-28" />
    <Footer />
  </main>
</template>
