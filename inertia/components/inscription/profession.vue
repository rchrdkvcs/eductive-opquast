<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Profession</h2>

    <UFormField label="Statut actuelle" required class="w-full">
      <USelect
        color="secondary"
        v-model="data.statutPro"
        class="w-full"
        size="lg"
        :items="['Étudiant', 'Professionnel', 'Demandeur Demploi']"
      />
    </UFormField>

    <USeparator class="my-2" label="Dernier expériences professionnelles" />

    <UFormField label="Poste" required class="w-full">
      <UInput color="secondary" v-model="data.poste" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Entreprise" required class="w-full">
      <UInput color="secondary" v-model="data.entreprise" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Période" required class="w-full">
      <UInput color="secondary" v-model="data.periode" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Curriculum Vitae" required class="w-full">
      <UInput color="secondary" v-model="data.cv" type="file" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Lettre de motivation" required class="w-full">
      <UInput color="secondary" v-model="data.ldm" type="file" class="w-full" size="lg" />
    </UFormField>
  </div>
</template>

<style scoped></style>
