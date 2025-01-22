<template>
  <div class="preloader-block">
    <div class="preloader-block__title">Загружаем...</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "preloader-block",
});
</script>

<style scoped lang="scss">
.preloader-block {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--minor-color);

  &__title {
    font-size: 2rem;
    color: var(--primary-color);

    animation: preloader 3s infinite;
  }
}

@keyframes preloader {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
