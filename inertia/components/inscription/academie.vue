<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Académie</h2>

    <USeparator class="my-2" label="Diplôme" />

    <UFormField label="Dernier diplôme obtenu" required class="w-full">
      <UInput color="secondary" v-model="data.dernierDiplome" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Année d’obtention du diplôme" required class="w-full">
      <UInput color="secondary" v-model="data.anneDiplome" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Copie du diplôme" required class="w-full">
      <UInput color="secondary" v-model="data.copieDiplome" type="file" class="w-full" size="lg" />
    </UFormField>

    <USeparator class="my-2" label="Établissement précédent" />

    <UFormField label="Nom" required class="w-full">
      <UInput color="secondary" v-model="data.nomEcole" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Ville" required class="w-full">
      <UInput color="secondary" v-model="data.nomVille" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Copie du dernier bulletin scolaire" required class="w-full">
      <UInput color="secondary" v-model="data.copieBulletin" type="file" class="w-full" size="lg" />
    </UFormField>
  </div>
</template>

<style scoped></style>
