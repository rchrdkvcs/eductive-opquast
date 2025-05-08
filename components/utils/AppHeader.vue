<script lang="ts" setup>
defineProps<{
  navItems: {
    name: string;
    link: string;
  }[];
}>();

const route = useRoute();
const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  if (window.scrollY > 16) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
}
</script>

<template>
  <div
    :class="[
      'flex items-center justify-between px-4 h-16 bg-white fixed max-w-7xl w-full mx-auto z-10 border border-gray-200 transition-all duration-300 ease-in-out sticky',
      isScrolled
        ? 'top-0 rounded-none w-full max-w-none'
        : 'top-4 rounded-full',
    ]"
  >
    <Logo />

    <ul class="flex items-center gap-2">
      <li v-for="item in navItems" :key="item.name">
        <NuxtLink
          :class="
            route.path.startsWith(item.link)
              ? 'bg-orange color-white hover:color-white'
              : ''
          "
          :to="item.link"
          class="px-4 py-2 text-sm font-medium text-gray-900 border border-transparent rounded-full hover:(border-orange color-orange) transition ease-in-out duration-150"
          >{{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sticky {
  position: sticky;
}
</style>
