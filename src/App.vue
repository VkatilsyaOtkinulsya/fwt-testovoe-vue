<script setup lang="ts">
import CardsGallery from "./components/CardsGallery/CardsGallery.vue";
import MainHeader from "./components/Header/MainHeader.vue";
import SearchInput from "./components/ui/input/SearchInput.vue";
import Pagination from "./components/ui/pagination/Pagination.vue";
</script>

<template>
  <div class="contai">
    <MainHeader />
    <SearchInput />
    <CardsGallery />
    <Pagination />
  </div>
</template>

<style scoped></style>
