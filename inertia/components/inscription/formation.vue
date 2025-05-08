<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Choisissez votre formation</h2>

    <UFormField label="Formation" required class="w-full" description="Choisissez une formation">
      <USelect
        color="secondary"
        v-model="data.formation"
        :items="['BTS', 'Bachelor', 'Master']"
        class="w-full"
        size="lg"
      />
    </UFormField>

    <UFormField label="Domaine" required class="w-full" description="Choisissez un domaine">
      <USelect
        v-model="data.domaine"
        color="secondary"
        :items="['Informatique', 'Ressources Humaines', 'Marketing', 'Journalisme', 'Immobilier']"
        class="w-full"
        size="lg"
      />
    </UFormField>

    <UFormField label="Ecole" required class="w-full" description="Choisissez une école">
      <USelect
        color="secondary"
        v-model="data.ecole"
        :items="['ESGI', 'PPA', 'EFAB', 'ECITV']"
        class="w-full"
        size="lg"
      />
    </UFormField>

    <UFormField
      label="Date de rentree souhaiter"
      required
      class="w-full"
      description="Choisissez une date de rentrée"
    >
      <USelect
        color="secondary"
        v-model="data.dateDeRentre"
        :items="['Septembre 2025', 'Janvier 2026', 'Septembre 2026', 'Janvier 2027']"
        class="w-full"
        size="lg"
      />
    </UFormField>
  </div>
</template>

<style scoped></style>
