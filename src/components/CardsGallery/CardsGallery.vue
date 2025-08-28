<script setup lang="ts">
import Card from "../Card/Card.vue";
import { usePaintingsStore } from "@/stores/paintingsStore.ts";

const store = usePaintingsStore();
</script>

<template>
  <div v-if="store.enrichedItems.length" class="cards-gallery">
    <Card v-for="paint in store.enrichedItems" :key="paint.id" :paint />
  </div>
  <div v-else class="gallery-no-matches">
    <span class="no-matches">No matches for {{ store.search }}</span>
    <span class="try-again">Please try again with a different spelling or keywords.</span>
  </div>
</template>

<style scoped lang="scss">
.cards-gallery {
  position: relative;
  z-index: 5;
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  transition: gap 0.3s ease-in-out;

  @include laptop {
    gap: 24px;
  }

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

.gallery-no-matches {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  .no-matches {
    font-size: 16px;
    font-weight: 500;
    color: vaR(--primary-muted);
  }

  .try-again {
    font-size: 14px;
    font-weight: 300;
    color: var(--secondary-muted);
  }
}
</style>
