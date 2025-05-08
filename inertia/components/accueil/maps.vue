<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-8 w-full min-h-screen max-h-[calc(100vh-128px)]"
  >
    <h2 class="font-semibold color-blue text-2xl">Nous Trouver</h2>

    <div class="flex flex-wrap gap-4 items-center justify-center">
      <div
        class="bg-[#FFF6F3] rounded-lg py-1.5 px-3 border-l-8 border-[#FF685F] flex items-center gap-3 max-w-sm w-full"
      >
        <UIcon name="lucide:map-pin" style="width: 28px; height: 28px" class="text-[#FF685F]" />
        <div>
          <p>14 Rue du Bourg Nouveau</p>
          <p>35000 Rennes</p>
        </div>
      </div>

      <div
        class="bg-[#FFF6F3] rounded-lg py-1.5 px-3 border-l-8 border-[#FF685F] flex items-center gap-3 max-w-sm w-full"
      >
        <UIcon name="lucide:phone" style="width: 28px; height: 28px" class="text-[#FF685F]" />
        <div>
          <p>Tel: 02 99 84 70 00</p>
          <p>Mail: rennes@eductive.fr</p>
        </div>
      </div>
      <div
        class="bg-[#FFF6F3] rounded-lg py-1.5 px-3 border-l-8 border-[#FFA777] flex items-center gap-3 max-w-sm w-full"
      >
        <UIcon name="lucide:bus" style="width: 28px; height: 28px" class="text-[#FFA777]" />
        <div>
          <p>Metro Ligne A - J.F Kennedy</p>
          <p>Bus : 14, 53 & 76</p>
        </div>
      </div>
      <div
        class="bg-[#FFF6F3] rounded-lg py-1.5 px-3 border-l-8 border-[#34A853] flex items-center gap-3 max-w-sm w-full"
      >
        <UIcon name="lucide:signpost" style="width: 28px; height: 28px" class="text-[#34A853]" />
        <div>
          <p>10 min à pied du métro</p>
          <p>3 min à pied du bus</p>
        </div>
      </div>
      <div
        class="bg-[#FFF6F3] rounded-lg py-1.5 px-3 border-l-8 border-[#20284F] flex items-center gap-3 max-w-sm w-full"
      >
        <UIcon
          name="lucide:accessibility"
          style="width: 28px; height: 28px"
          class="text-[#20284F] shrink-0"
        />
        <div>
          <p>Notre campus est accessible pour les personnes à mobilité réduite.</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <img
        class="rounded-xl object-cover size-full"
        alt="Salle Info"
        src="/public/images/rennes.jpg"
      />
      <div class="overflow-hidden rounded-xl col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.4472695044655!2d-1.7179008704052938!3d48.1145402409289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edfc22635c6fd%3A0xfbfd78369d9bc374!2sCampus%20Eductive%20Rennes!5e0!3m2!1sfr!2sfr!4v1746718705437!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
