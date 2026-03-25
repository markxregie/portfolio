<script setup>
import { onMounted, ref } from "vue";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const isDark = ref(false);

function applyTheme(value) {
  document.documentElement.classList.toggle("dark", value);
}

function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme(isDark.value);
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
  applyTheme(isDark.value);
});
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
    <nav
      class="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4"
      aria-label="Primary"
    >
      <div></div>

      <div class="flex items-center justify-center gap-2 text-base">
        <Button
          v-for="item in navItems"
          :key="item.href"
          as="a"
          :href="item.href"
          variant="ghost"
          class="rounded-full px-5 text-base"
        >
          {{ item.label }}
        </Button>
      </div>

      <div class="flex justify-end pr-1 sm:pr-0">
        <Button variant="outline" class="min-w-24" @click="toggleTheme">
          {{ isDark ? "Light" : "Dark" }}
        </Button>
      </div>
    </nav>
  </header>
</template>
