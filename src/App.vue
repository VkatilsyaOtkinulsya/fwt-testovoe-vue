<script setup lang="ts">
import { onMounted } from "vue";
import CardsGallery from "./components/CardsGallery/CardsGallery.vue";
import MainHeader from "./components/Header/MainHeader.vue";
import SearchInput from "./components/ui/input/SearchInput.vue";
import Pagination from "./components/ui/pagination/Pagination.vue";
import { useInfoStore } from "./stores/infoStore.ts";
import { useThemeStore } from "./stores/themeStore.ts";

const store = useInfoStore();
const themeStore = useThemeStore();
themeStore.applyTheme();

onMounted(() => {
  if (!store.loaded) {
    store.getPaintingsInfo();
  }
});
</script>

<template>
  <div class="container">
    <MainHeader />
    <SearchInput />
    <CardsGallery />
    <Pagination />
  </div>
</template>

<style scoped lang="scss"></style>
