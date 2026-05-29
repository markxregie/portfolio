<script setup>
import Contribution from "@/components/contribution.vue";
import Footer from "@/components/footer.vue";
import ContributionSkeleton from "@/components/skeletons/ContributionSkeleton.vue";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton.vue";
import Projects from "@/pages/projects.vue";
import { usePageLoading } from "@/composables/usePageLoading";

const { isLoading } = usePageLoading(900);
</script>

<template>
  <main class="flex flex-col">
    <template v-if="isLoading">
      <ContributionSkeleton />
      <ProjectsSkeleton />
    </template>
    <template v-else>
      <section id="projects" class="scroll-mt-24 space-y-0">
        <Contribution />
        <Projects />
      </section>
      <Footer />
    </template>
  </main>
</template>
