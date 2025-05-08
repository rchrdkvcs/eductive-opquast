<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-2 w-full min-h-screen">
    <div class="flex flex-col gap-4 justify-center">
      <h2 class="font-semibold color-blue text-2xl">1 Campus 9 Écoles</h2>
      <h3 class="leading-loose line-height-tight">
        Situé au sein de la vibrante métropole bretonne, le campus Eductive Rennes abrite 9 écoles
        de l’enseignent supérieur dans les domaines suivants :
      </h3>
      <ul class="list-disc list-inside text-sm leading-loose">
        <li>Le Digital, le Web et L'Audiovisuel à L'ECITV</li>
        <li>L’Immobilier et le Notariat à l’EFAB</li>
        <li>L’Informatique, l’IOT, la VR & les Jeux-Vidéo à l’ESGI</li>
        <li>Le Design Graphique et d’Intérieur à l’EFET Studio Créa</li>
        <li>La Banque, l’Assurance, la Comptabilité et les Transports à Maestris BTS</li>
        <li>Le Commerce, les Ressources Humaines, le Marketing et la Communication à PPA</li>
        <li>La Gestion et l'expertise comptable à l'ENGDE</li>
        <li>Le marketing du luxe à l'EIML</li>
        <li>Le journalisme, de la communication et de la fiction à l'École W</li>
      </ul>
    </div>
    <div class="flex items-center justify-center">
      <div class="relative aspect-ratio [16/9] h-2/3">
        <img
          alt="A beautiful view of a mountain landscape"
          class="rounded-2xl size-full"
          loading="lazy"
          src="/public/images/ecoles.jpg"
        />
        <iframe
          allowfullscreen
          class="absolute top-0 right-0 translate-x-[15%] translate-y-[-25%] rounded-2xl shadow-lg"
          height="200"
          referrerpolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/wBn2zEzzccw"
          title="CAMPUS EDUCTIVE RENNES -  PRÉSENTATION DES ÉCOLES"
          width="360"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
