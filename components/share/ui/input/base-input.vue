<template>
  <input-field class="base-input">
    <template v-if="$slots['default']" #input-field-label> <slot></slot> </template>

    <input
      v-model="model"
      :name
      :type
      :disabled
      :placeholder
      class="base-input__input"
      :class="inputClass"
    />

    <template v-if="error" #input-field-error>{{ error }}</template>
  </input-field>
</template>

<script setup lang="ts">
defineOptions({
  name: "base-input",
});

const props = withDefaults(
  defineProps<{
    name: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "text" | "password" | "email";
    error?: string;
  }>(),
  {
    placeholder: "",
    disabled: false,
    type: "text",
    error: "",
  },
);

const model = defineModel<string>();

const inputClass = computed(() => {
  return {
    "base-input__input_error": props.error,
  };
});
</script>

<style scoped lang="scss">
.base-input {
  &__input {
    appearance: none;
    width: 100%;
    padding: 4px 8px;

    border: 1px solid var(--border-color);
    border-radius: 4px;
    outline: none;

    background-color: var(--white);

    color: var(--text-color);

    font-size: 1rem;
    line-height: 1em;

    transition: all 0.3s ease;

    &:hover {
      background-color: var(--background-color);
    }

    &:disabled {
      background-color: var(--disabled-color);
    }

    &:focus {
      background-color: var(--white);
      border-color: var(--primary-color);
    }

    &::placeholder {
      color: var(--helptext-color);
    }

    &_error {
      border-color: var(--negative-color);
      color: var(--negative-color);

      &:focus {
        color: inherit;
      }
    }
  }
}
</style>
