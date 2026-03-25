<script setup>
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<template>
  <main class="bg-background text-foreground min-h-screen">
    <section class="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-6 py-16">
      <div class="space-y-4">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
          Vue + Vite + shadcn-vue
        </p>
        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Your project is now ready for shadcn-vue components.
        </h1>
        <p class="text-muted-foreground max-w-2xl text-base sm:text-lg">
          Start replacing custom UI one section at a time with generated components from the shadcn-vue registry.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <Button>Primary Action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <Card class="max-w-xl">
        <CardHeader>
          <CardTitle>Next commands</CardTitle>
          <CardDescription>
            Add more components as you build:
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 font-mono text-sm">
          <p>npx shadcn-vue@latest add input</p>
          <p>npx shadcn-vue@latest add dialog</p>
          <p>npx shadcn-vue@latest add form</p>
        </CardContent>
      </Card>
    </section>
  </main>
</template>
