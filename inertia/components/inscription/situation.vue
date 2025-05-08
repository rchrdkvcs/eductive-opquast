<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Situation familiale</h2>

    <UFormField label="Situation" required class="w-full">
      <USelect
        color="secondary"
        v-model="data.situation"
        class="w-full"
        size="lg"
        :items="['Celibataire', 'Marie', 'Pacse']"
      />
    </UFormField>

    <USeparator class="my-2" label="Responsables légal" />

    <UFormField label="Nom et Prenom" class="w-full">
      <UInput color="secondary" v-model="data.respName" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Lien" class="w-full">
      <USelect
        color="secondary"
        v-model="data.respLien"
        class="w-full"
        size="lg"
        :items="['Pere', 'Mere', 'Tuteur', 'Autre']"
      />
    </UFormField>

    <UFormField label="Telephone" class="w-full">
      <UInput color="secondary" v-model="data.respTel" type="number" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="E-mail" class="w-full">
      <UInput color="secondary" v-model="data.respEmail" class="w-full" size="lg" />
    </UFormField>

    <UCheckbox
      color="secondary"
      label="Definir comme contact d'urgence"
      class="w-full items-left"
    />
  </div>
</template>

<style scoped></style>
