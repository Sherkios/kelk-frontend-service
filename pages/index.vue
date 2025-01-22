<template>
  <page-block class="home-page">
    <base-container class="home-page__container">
      <h1 class="home-page__title">Welcome to Kelk</h1>

      <p class="home-page__text">Take control of your financial life with ease.</p>

      <base-button class="home-page__button">Get Started</base-button>
    </base-container>
  </page-block>
</template>

<script setup lang="ts">
defineOptions({
  name: "home-page",
});
</script>

<style lang="scss">
.home-page {
  display: flex;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
    background-color: var(--white);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  &__text {
    font-size: 1.2rem;
    color: var(--subtext-color);
  }
}
</style>
