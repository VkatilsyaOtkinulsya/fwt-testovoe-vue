<script setup lang="ts">
import type { FinalPainting } from "@/composables/useCardsGallery";
defineProps<{ paint: FinalPainting }>();
</script>

<template>
  <div class="card">
    <img
      loading="lazy"
      :src="`${paint.imageUrl}?q=70&w=800`"
      :alt="paint.name"
      class="card-image"
    />
    <div class="card-text">
      <div class="author-info">
        <p>{{ paint.authorName }}</p>
        <p>{{ paint.location }}</p>
      </div>
      <div class="dash"></div>
      <div class="paint-info">
        <p>{{ paint.name }}</p>
        <p>{{ paint.created }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  height: 260px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  z-index: 4;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
    z-index: 10;
  }

  img {
    border-bottom: 1px solid transparent;
  }

  .card-text {
    width: 680px;
    height: 82px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    transform: translateX(calc(-50% - 38px));
    background-color: var(--primary-bg);

    &:hover {
      .author-info {
        transform: translateX(calc(100% + 20px));
      }

      .dash {
        background-color: var(--accent-color);
      }
      .paint-info {
        transform: translateY(calc(100% + 20px));
        border: none;
      }
    }

    .author-info {
      flex: 1;
      position: relative;
      display: flex;
      margin: 20px 20px 20px 0;
      padding-left: 20px;
      flex-direction: column;
      transition: transform 1s;
      white-space: nowrap;
    }

    .dash {
      position: relative;
      width: 2px;
      height: 42px;
      margin: 20px 0;
      box-sizing: content-box;
      background-color: var(--accent-red);
      transition: all 0.6s;
    }

    .paint-info {
      width: 260px;
      position: relative;
      display: flex;
      padding: 20px;
      flex-direction: column;
      gap: 8px;
      box-sizing: content-box;
      transition: transform 0.6s;
      white-space: nowrap;
    }
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
