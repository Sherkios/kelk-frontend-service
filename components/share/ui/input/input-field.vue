<template>
  <label class="input-field">
    <p class="input-field__label"><slot name="input-field-label"></slot></p>

    <div class="input-field__bottom">
      <slot></slot>

      <div v-if="$slots['input-field-error']" class="input-field__error">
        <slot name="input-field-error"></slot>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
defineOptions({
  name: "input-field",
});
</script>

<style scoped lang="scss">
.input-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__label {
    font-size: 14px;
    font-weight: 500;
    color: var(--subtext-color);
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__error {
    font-size: 12px;
    color: var(--negative-color);
  }
}
</style>
