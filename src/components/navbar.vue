<script setup>
import { onMounted, ref } from "vue";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

const isDark = ref(false);

function applyTheme(value) {
  document.documentElement.classList.toggle("dark", value);
}

function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme(isDark.value);
}

function handleNavigate(event, href) {
  if (!href.startsWith("/")) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));

  const hash = href.split("#")[1];
  if (hash) {
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
  applyTheme(isDark.value);
});
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
    <nav
      class="mx-auto grid w-full max-w-6xl grid-cols-[2.25rem_1fr_2.25rem] items-center gap-2 px-3 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-6 sm:py-4"
      aria-label="Primary"
    >
      <div></div>

      <div class="flex min-w-0 items-center justify-center gap-1 text-sm sm:gap-2 sm:text-base">
        <Button
          v-for="item in navItems"
          :key="item.href"
          as="a"
          :href="item.href"
          variant="ghost"
          class="rounded-full px-2 text-sm sm:px-5 sm:text-base"
          @click="handleNavigate($event, item.href)"
        >
          {{ item.label }}
        </Button>
      </div>

      <div class="flex shrink-0 justify-end sm:pr-0">
        <Button
          variant="outline"
          size="icon"
          class="aspect-square rounded-lg sm:aspect-auto sm:h-9 sm:w-auto sm:min-w-24 sm:px-4"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="toggleTheme"
        >
          <span class="hidden sm:inline">{{ isDark ? "Light" : "Dark" }}</span>
          <svg
            v-if="isDark"
            aria-hidden="true"
            class="sm:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg
            v-else
            aria-hidden="true"
            class="sm:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 7 9 9 0 1 1-9-7Z" />
          </svg>
        </Button>
      </div>
    </nav>
  </header>
</template>
