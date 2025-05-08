<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Financement et Aides</h2>

    <UFormField label="Mode de financement" required class="w-full">
      <UInput color="secondary" v-model="data.modeFinance" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Nom de l’employeur ou organisme payeur" required class="w-full">
      <UInput color="secondary" v-model="data.nomPayeur" class="w-full" size="lg" />
    </UFormField>

    <UFormField
      label="Justificatif"
      description="Pièces justificatives liées au financement"
      class="w-full"
    >
      <UInput color="secondary" v-model="data.justifFinance" type="file" class="w-full" size="lg" />
    </UFormField>
  </div>
</template>

<style scoped></style>
