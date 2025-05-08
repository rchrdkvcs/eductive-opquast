<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Informations personnelles</h2>

    <UFormField label="Nom" required class="w-full">
      <UInput color="secondary" v-model="data.nom" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Prénom" required class="w-full">
      <UInput color="secondary" v-model="data.prenom" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="CNI" required class="w-full" description="Téléchargez votre CNI">
      <UInput color="secondary" v-model="data.cni" class="w-full" size="lg" type="file" />
    </UFormField>

    <UFormField label="Genre" required class="w-full">
      <USelect
        color="secondary"
        v-model="data.genre"
        :items="['Homme', 'Femme']"
        class="w-full"
        size="lg"
      />
    </UFormField>

    <UFormField label="Lieu de naissance" required class="w-full">
      <UInput color="secondary" v-model="data.paysNaissance" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Nationalité" required class="w-full">
      <UInput color="secondary" v-model="data.nationalite" class="w-full" size="lg" />
    </UFormField>

    <UFormField label="Numéro de sécurité sociale" required class="w-full">
      <UInput color="secondary" v-model="data.secu" type="number" class="w-full" size="lg" />
    </UFormField>

    <UFormField
      label="Numéro étudiant"
      class="w-full"
      description="Uniquement si déjà inscrit dans le réseau"
    >
      <UInput
        color="secondary"
        v-model="data.numeroEtudiant"
        type="number"
        class="w-full"
        size="lg"
      />
    </UFormField>
  </div>
</template>

<style scoped></style>
