<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-8 w-full min-h-screen max-h-[calc(100vh-200px)]"
  >
    <h2 class="font-semibold color-blue text-2xl">Le campus en quelques images</h2>

    <div class="grid grid-cols-3 grid-rows-3 gap-4">
      <img
        class="rounded-lg object-cover size-full"
        alt="Salle Info"
        src="/public/images/salle-info.jpg"
      />
      <img
        class="col-span-2 row-span-2 rounded-lg object-cover size-full"
        alt="Campus"
        src="/public/images/campus.jpg"
      />
      <img
        class="row-span-2 rounded-lg object-cover size-full"
        alt="Image du campus"
        src="/public/images/cafet1.jpg"
      />
      <img
        class="rounded-lg object-cover size-full"
        alt="Image du campus"
        src="/public/images/cafet2.jpg"
      />
      <img
        class="rounded-lg object-cover size-full"
        alt="Image du campus"
        src="/public/images/cafet3.jpg"
      />
    </div>
  </div>
</template>

<style scoped></style>
