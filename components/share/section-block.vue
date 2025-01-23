<template>
  <div class="section-block">
    <div
      v-if="$slots['section-block-title'] || $slots['section-block-header-right']"
      class="section-block__header"
    >
      <div v-if="$slots['section-block-title']" class="section-block__title">
        <slot name="section-block-title"></slot>
      </div>

      <div v-if="$slots['section-block-header-right']" class="section-block__header-right">
        <slot name="section-block-header-right"></slot>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "section-block",
});
</script>

<style scoped lang="scss">
.section-block {
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--white);

  border-radius: 8px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__header-right {
  }
}
</style>
