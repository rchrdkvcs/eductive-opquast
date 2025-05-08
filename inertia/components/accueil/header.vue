<script lang="ts" setup>
import Mouse from '~/components/icones/mouse.vue'
</script>

<template>
  <header class="w-full max-w-7xl mx-auto h-[calc(100vh-128px)] mt-8">
    <div class="relative size-full">
      <img
        alt="Eductive Rennes"
        class="size-full object-cover rounded-3xl"
        loading="lazy"
        src="/public/images/hero-image.jpeg"
      />
      <span class="bg-[#20284F]/50 absolute inset-0 rounded-3xl" />

      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-6xl font-semibold text-white text-center text-shadow-color-background">
          Préparez votre avenir chez <br />
          Eductive Rennes
        </h1>
      </div>

      <UButton
        to="#nos-ecoles"
        color="secondary"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full animate-bounce py-2.5"
      >
        <Mouse class="size-8" />
      </UButton>
    </div>
  </header>
</template>

<style scoped></style>
