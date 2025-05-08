<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'
import { ref, useTemplateRef } from 'vue'
import Introduction from '~/components/inscription/Introduction.vue'
import Formation from '~/components/inscription/formation.vue'
import Information from '~/components/inscription/information.vue'
import Coordonne from '~/components/inscription/coordonne.vue'
import Situation from '~/components/inscription/situation.vue'
import Academie from '~/components/inscription/academie.vue'
import Profession from '~/components/inscription/profession.vue'
import Financement from '~/components/inscription/financement.vue'
import Recap from '~/components/inscription/recap.vue'
import { router } from '@inertiajs/vue3'

const items = ref<StepperItem[]>([
  {
    title: 'Inscription',
  },
  {
    title: 'Formation',
  },
  {
    title: 'Informations',
  },
  {
    title: 'Coordonnées',
  },
  {
    title: 'Situation familiale',
  },
  {
    title: 'Académie',
  },
  {
    title: 'Profession',
  },
  {
    title: 'Financement',
  },
  {
    title: 'Validation',
  },
])

const stepper = useTemplateRef('stepper')

const data = ref({})

const toast = useToast()

const submitForm = () => {
  console.log('Form submitted with data:', data.value)

  toast.add({
    title: 'Formulaire soumis',
    description: 'Votre formulaire a été soumis avec succès.',
    color: 'success',
  })

  router.visit('/')
}
</script>

<template>
  <div
    class="min-h-[calc(100vh-128px)] max-w-7xl mx-auto p-8 flex flex-col justify-start items-start"
  >
    <UStepper
      color="secondary"
      ref="stepper"
      :items="items"
      class="w-full h-fit justify-center items-start"
      orientation="vertical"
    >
      <template #content="{ item }">
        <div class="aspect-video flex justify-center items-start">
          <Introduction v-if="item.title === 'Inscription'" />
          <Formation v-if="item.title === 'Formation'" :data="data" />
          <Information v-if="item.title === 'Informations'" :data="data" />
          <Coordonne v-if="item.title === 'Coordonnées'" :data="data" />
          <Situation v-if="item.title === 'Situation familiale'" :data="data" />
          <Academie v-if="item.title === 'Académie'" :data="data" />
          <Profession v-if="item.title === 'Profession'" :data="data" />
          <Financement v-if="item.title === 'Financement'" :data="data" />
          <Recap v-if="item.title === 'Validation'" :data="data" />
        </div>
      </template>
    </UStepper>
  </div>

  <div v-if="stepper?.hasNext" class="max-w-7xl mx-auto flex justify-between items-center my-4">
    <UButton
      leading-icon="lucide:arrow-left"
      :disabled="!stepper?.hasPrev"
      @click.prevent="stepper?.prev()"
      color="secondary"
      variant="ghost"
      label="Précédent"
    />

    <UButton
      trailing-icon="lucide:arrow-right"
      :disabled="!stepper?.hasNext"
      @click.prevent="stepper?.next()"
      color="secondary"
      label="Continuer"
    />
  </div>

  <div
    v-if="!stepper?.hasNext"
    class="max-w-7xl mx-auto flex flex-col justify-center items-center my-4 gap-2"
  >
    <UCheckbox label="J'accepte les conditions générales d'utilisation" color="secondary" />

    <UButton
      trailing-icon="lucide:send"
      @click.prevent="submitForm"
      color="secondary"
      label="Envoyer"
    />
  </div>
</template>

<style scoped></style>
