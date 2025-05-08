<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'ECITV',
  },
  {
    label: 'Ecole W',
  },
  {
    label: 'EFAB',
  },
  {
    label: 'EFET Crea',
  },
  {
    label: 'EIML',
  },
  {
    label: 'ENGDE',
  },
  {
    label: 'ESGI',
  },
  {
    label: 'Maestris BTS',
  },
  {
    label: 'PPA',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-16 w-full min-h-screen">
    <h2 class="font-semibold color-blue text-2xl">Trouvez l’école qui vous correspond</h2>

    <UTabs
      :items="items"
      color="secondary"
      class="w-full"
      :ui="{
        trigger: 'cursor-pointer',
      }"
    />

    <div class="grid grid-cols-3 gap-16 size-full">
      <div class="col-span-1 flex justify-center items-center">
        <img
          alt="logo-ecole"
          class="rounded-2xl size-full aspect-ratio [9/16]"
          src="/public/images/esgi.jpeg"
        />
      </div>
      <div class="col-span-2 flex flex-col justify-start items-start gap-4">
        <h3 class="font-semibold color-blue text-3xl">
          ESGI
          <span class="text-base font-normal">(École Supérieure de Génie Informatique)</span>
        </h3>
        <p class="color-blue">
          L’ESGI Rennes est notre école supérieure de génie informatique. Nous formons nos étudiants
          aux métiers liés à l’univers de l’informatique et ce, en totale adéquation avec les
          évolutions de ce secteur. <br />
          <br />
          Notre établissement propose des formations allant de bac à bac + 5, reconnues par l’État.
          Nous considérons l’informatique comme une science à part entière. <br />
          <br />
          Notre corps enseignant est principalement constitué de professionnels du secteur qui
          transmettent leurs connaissances pour former les étudiants aux problématiques de demain.
          <br />
          <br />
          Dotée de nombreux laboratoires et construite sur une proximité très forte du monde de
          l’entreprise, l’ESGI se positionne comme le leader des formations d’ingénierie en
          informatique en alternance.
        </p>
        <ULink to="/esgi"> En savoir plus sur l’ESGI </ULink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
