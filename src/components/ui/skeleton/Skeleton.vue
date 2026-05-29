<script setup>
import { cn } from "@/lib/utils";

defineProps({
  class: {
    type: [String, Array, Object],
    default: "",
  },
});
</script>

<template>
  <div :class="cn('skeleton-pulse rounded-md', $props.class)" />
</template>
