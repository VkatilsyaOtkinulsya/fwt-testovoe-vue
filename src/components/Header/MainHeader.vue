<script setup lang="ts">
import ToggleThemeButton from "../ui/button/ToggleThemeButton.vue";
</script>

<template>
  <header class="header">
    <div class="logo"></div>
    <div>
      Header
      <ToggleThemeButton>
        <template #icon></template>
      </ToggleThemeButton>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
