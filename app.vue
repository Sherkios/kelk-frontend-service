<template>
  <div class="app">
    <transition name="preloader">
      <preloader-block v-if="isLoadingWebsite" class="app__preloader" />
    </transition>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const isLoadingWebsite = ref<boolean>(true);

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
  }
}

.preloader {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
