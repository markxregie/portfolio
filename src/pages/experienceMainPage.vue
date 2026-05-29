<script setup>
import Footer from "@/components/footer.vue";
import ExperienceSkeleton from "@/components/skeletons/ExperienceSkeleton.vue";
import Experience from "@/pages/experience.vue";
import { usePageLoading } from "@/composables/usePageLoading";

const { isLoading } = usePageLoading(900);
</script>

<template>
  <main>
    <template v-if="isLoading">
      <ExperienceSkeleton />
    </template>
    <template v-else>
      <Experience />
      <Footer />
    </template>
  </main>
</template>
