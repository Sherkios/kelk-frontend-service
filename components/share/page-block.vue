<template>
  <div class="page-block">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "page-block",
});
</script>

<style lang="scss">
.page-block {
  min-height: 100vh;
}
</style>
