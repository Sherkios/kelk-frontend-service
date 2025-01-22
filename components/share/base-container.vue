<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "base-container",
});
</script>

<style lang="scss">
.base-container {
  margin: 0 auto;
  padding: 0 20px;
}
</style>
