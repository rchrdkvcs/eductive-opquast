<script lang="ts" setup>
const navItems = [
  {
    name: "Brochure",
    link: "/brochure",
  },
  {
    name: "Portes Ouvertes",
    link: "/portes-ouvertes",
  },
  {
    name: "Candidature",
    link: "/candidature",
  },
];
</script>

<template>
  <AppHeader :nav-items="navItems" />

  <slot />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  background: #f5f7ff;
  font-family: "Poppins", sans-serif;
}
</style>
