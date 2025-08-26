<script setup lang="ts">
import LogoIcon from "../icons/LogoIcon.vue";
import ThemeIcon from "../icons/ThemeIcon.vue";
import ToggleThemeButton from "../ui/button/ToggleThemeButton.vue";
</script>

<template>
  <header class="header">
    <div class="logo">
      <LogoIcon />
    </div>
    <div>
      <ToggleThemeButton>
        <ThemeIcon :is-dark="true" />
      </ToggleThemeButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 44px;
  transition:
    height 0.3s ease-in-out,
    margin-bottom 0.3s ease-in-out;

  @media screen and (max-width: 1280px) {
    margin-bottom: 27px;
  }

  @include mobile {
    height: 64px;
  }
}
.logo {
  box-sizing: content-box;
}
</style>
