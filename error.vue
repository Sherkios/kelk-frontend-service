<template>
  <page-block class="error-page">
    <base-container class="error-page__container">
      <div class="error-page__info">
        <h1 class="error-page__title">404 Not Found</h1>
        <p class="error-page__text">We can't find the page you're looking for.</p>
      </div>

      <nuxt-link to="/">
        <base-button>Go home</base-button>
      </nuxt-link>
    </base-container>
  </page-block>
</template>

<script setup lang="ts">
defineOptions({
  name: "error-page",
});
</script>

<style lang="scss">
.error-page {
  display: flex;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-size: 4rem;
    color: var(--negative-color);
  }

  &__text {
    font-size: 1.2rem;
    color: var(--subtext-color);
  }
}
</style>
