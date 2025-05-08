<script lang="ts" setup>
import Campus from "~/components/accueil/campus.vue";
import Schools from "~/components/accueil/schools.vue";

const schoolTabs = [
  {
    name: "ECITV",
  },
  {
    name: "Ecole W",
  },
  {
    name: "EFAB",
  },
  {
    name: "EFET Créa",
  },
  {
    name: "EIML",
  },
  {
    name: "ENGDE",
  },
  {
    name: "ESGI",
  },
  {
    name: "Maestris BTS",
  },
  {
    name: "PPA",
  },
];
</script>

<template>
  <div class="w-full min-h-screen">
    <Header />

    <main class="w-full max-w-7xl mx-auto">
      <Campus />
      <Schools :school-tabs="schoolTabs" />
    </main>
  </div>
</template>
