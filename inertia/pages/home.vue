<script lang="ts" setup>
import Campus from '~/components/accueil/campus.vue'
import Schools from '~/components/accueil/schools.vue'
import Header from '~/components/accueil/header.vue'
import Galerie from '~/components/accueil/galerie.vue'
import Maps from '~/components/accueil/maps.vue'
</script>

<template>
  <div class="w-full min-h-screen">
    <Header />

    <main class="w-full max-w-7xl mx-auto">
      <Campus />
      <Schools />
      <Galerie />
      <Maps />
    </main>
  </div>
</template>
