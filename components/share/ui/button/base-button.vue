<template>
  <button class="base-button" :class="buttonClass" :disabled="isDisabled" :type>
    <div v-if="$slots['base-button-left']" class="base-button__left">
      <slot name="base-button-left"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots['base-button-right']" class="base-button__right">
      <slot name="base-button-right"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: "base-button",
});

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    btnType?: "primary";
    isLoading?: boolean;
  }>(),
  {
    disabled: false,
    isLoading: false,
    type: "button",
    btnType: "primary",
  },
);

const isDisabled = computed(() => props.disabled || props.isLoading);

const buttonClass = computed(() => [{ "base-button_primary": props.btnType === "primary" }]);
</script>

<style lang="scss">
.base-button {
  padding: var(--button-padding);

  display: flex;
  gap: 4px;
  justify-content: center;

  color: var(--white);
  background-color: var(--accent-color);

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: var(--accent-hover-color);
    color: #d1d5db;
  }

  &:active {
    background-color: var(--accent-dark-color);
    // transform: scale(0.98);
  }

  &:disabled {
    background-color: var(--disabled-color);
    color: var(--subtext-color);
    cursor: not-allowed;
  }

  &__left {
  }

  &__right {
  }
}
</style>
