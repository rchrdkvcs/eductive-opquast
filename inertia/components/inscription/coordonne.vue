<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Coordonnées</h2>

    <USeparator class="my-2" label="Contact" />

    <UFormField label="Adresse e-mail" required class="w-full">
      <UInput color="secondary" v-model="data.email" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Numéro de téléphone portable" required class="w-full">
      <UInput color="secondary" v-model="data.portable" type="number" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Téléphone fixe" class="w-full">
      <UInput color="secondary" v-model="data.fixe" type="number" class="w-full" size="lg" />
    </UFormField>

    <USeparator class="my-2" label="Adresse" />

    <UFormField label="Pays de residence" required class="w-full">
      <UInput color="secondary" v-model="data.paysResidence" class="w-full" size="lg" />
    </UFormField>

    <div class="flex gap-4">
      <UFormField label="Code Postal" required class="w-full">
        <UInput
          color="secondary"
          v-model="data.codePostal"
          type="number"
          class="w-full"
          size="lg"
        />
      </UFormField>

      <UFormField label="Ville" required class="w-full">
        <UInput color="secondary" v-model="data.ville" class="w-full" size="lg" />
      </UFormField>
    </div>

    <UFormField label="Rue" required class="w-full">
      <UInput color="secondary" v-model="data.rue" class="w-full" size="lg" />
    </UFormField>

    <UFormField
      label="Justificatif de domicile"
      required
      class="w-full"
      description="Justificatif de domicile de moins de 3 mois"
    >
      <UInput
        color="secondary"
        v-model="data.justifDomicile"
        class="w-full"
        size="lg"
        type="file"
      />
    </UFormField>

    <USeparator class="my-2" label="Transport" />

    <UFormField label="Zone géographique" class="w-full">
      <UInput color="secondary" v-model="data.zoneGeo" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Temps de transport estimé" description="En minutes" class="w-full">
      <UInput color="secondary" v-model="data.tempsTransport" class="w-full" size="lg" />
    </UFormField>
  </div>
</template>

<style scoped></style>
