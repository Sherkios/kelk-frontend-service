<template>
  <div class="app">
    <transition name="preloader">
      <preloader-block class="app__preloader" :class="preloaderClass" />
    </transition>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const isLoadingWebsite = ref<boolean>(true);

const preloaderClass = computed(() => [{ app__preloader_hidden: !isLoadingWebsite.value }]);

onMounted(() => {
  isLoadingWebsite.value = false;
});
</script>

<style scoped lang="scss">
.app {
  position: relative;

  &__preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    &_hidden {
      display: none;
    }
  }
}
</style>
