<script setup lang="ts">
import { useThemeStore } from "@/stores/themeStore.ts";

const themeStore = useThemeStore();

function toggle() {
  themeStore.toggleTheme();
}
</script>

<template>
  <button
    type="button"
    :class="['toggle-btn', themeStore.theme === 'light' ? 'theme-light' : '']"
    @click="toggle"
  >
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

.theme-light {
  &:hover {
    background-color: #f3f3f3;
  }
}
</style>
