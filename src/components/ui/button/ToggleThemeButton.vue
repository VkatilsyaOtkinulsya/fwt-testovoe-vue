<script setup lang="ts">
defineEmits(["click"]);
</script>

<template>
  <button type="button" class="toggle-btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.toggle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--secondary-bg);
}
</style>
