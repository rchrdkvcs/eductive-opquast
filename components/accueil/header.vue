<script lang="ts" setup></script>

<template>
  <header class="w-full max-w-7xl mx-auto h-[calc(100vh-128px)] mt-8">
    <div class="relative size-full">
      <NuxtImg
        alt="A beautiful view of a mountain landscape"
        class="size-full object-cover rounded-3xl"
        height="1080"
        loading="lazy"
        src="/images/hero-image.jpeg"
        width="1920"
      />
      <span class="bg-blue/50 mix-blend-normal absolute inset-0 rounded-3xl" />

      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-6xl font-semibold text-white text-center text-shadow-color-background"
        >
          Préparez votre avenir chez <br >
          Eductive Rennes
        </h1>
      </div>

      <NuxtLink
        class="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] rounded-full size-16 bg-orange color-white flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out animate-bounce"
        to="#nos-ecoles"
      >
        <Mouse class="size-8" />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped></style>
