<script setup>
import Contribution from "@/components/contribution.vue";
import Footer from "@/components/footer.vue";
import Projects from "@/pages/projects.vue";
</script>

<template>
  <main class="flex flex-col">
    <section id="projects" class="scroll-mt-24 space-y-0">
      <Contribution />
      <Projects />
    </section>
    <Footer />
  </main>
</template>
