<script lang="ts" setup>
defineProps<{
  schoolTabs: {
    name: string;
  }[];
}>();

const activeTab = ref(6);
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-16 w-full min-h-screen"
  >
    <h2 class="font-semibold color-blue text-2xl">
      Trouvez l’école qui vous correspond
    </h2>

    <div class="relative flex items-center justify-center">
      <div
        class="flex overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 gap-1"
      >
        <button
          v-for="(tab, index) in schoolTabs"
          :key="index"
          :class="[
            'relative px-6 py-3 text-sm font-medium transition-colors duration-300 ease-in-out z-10 cursor-pointer rounded-xl',
            activeTab === index
              ? 'color-white bg-orange'
              : 'color-blue hover:color-orange',
          ]"
          @click="activeTab = index"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-16 size-full">
      <div class="col-span-1 flex justify-center items-center">
        <NuxtImg
          class="rounded-2xl size-full aspect-ratio [9/16]"
          src="/images/esgi.jpeg"
        />
      </div>
      <div class="col-span-2 flex flex-col justify-start items-start gap-4">
        <h3 class="font-semibold color-blue text-3xl">
          ESGI
          <span class="text-base font-normal"
            >(École Supérieure de Génie Informatique)</span
          >
        </h3>
        <p class="color-blue">
          L’ESGI Rennes est notre école supérieure de génie informatique. Nous
          formons nos étudiants aux métiers liés à l’univers de l’informatique
          et ce, en totale adéquation avec les évolutions de ce secteur. <br />
          <br />
          Notre établissement propose des formations allant de bac à bac + 5,
          reconnues par l’État. Nous considérons l’informatique comme une
          science à part entière. <br />
          <br />
          Notre corps enseignant est principalement constitué de professionnels
          du secteur qui transmettent leurs connaissances pour former les
          étudiants aux problématiques de demain. <br />
          <br />
          Dotée de nombreux laboratoires et construite sur une proximité très
          forte du monde de l’entreprise, l’ESGI se positionne comme le leader
          des formations d’ingénierie en informatique en alternance.
        </p>
        <a
          class="color-blue font-semibold text-sm mt-4"
          href="https://www.esgi.fr/campus-rennes.html"
        >
          En savoir plus sur l’ESGI
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
