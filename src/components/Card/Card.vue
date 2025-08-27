<script setup lang="ts">
import type { FinalPainting } from "@/composables/useCardsGallery";
import { ref } from "vue";
defineProps<{ paint: FinalPainting }>();

const animate = ref(false);
</script>

<template>
  <div
    :class="['card', animate ? 'text-animation' : '']"
    :style="`background-image: url(${paint.imageUrl})`"
  >
    <button class="play" type="button" @click="animate = !animate"></button>

    <div class="card-text">
      <div class="author-info">
        <p class="name">{{ paint.authorName }}</p>
        <p class="info">{{ paint.location }}</p>
      </div>
      <div class="dash"></div>
      <div class="paint-info">
        <p class="name">{{ paint.name }}</p>
        <p class="info">{{ paint.created }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 4;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
}

.play {
  position: absolute;
  right: 6px;
  top: 6px;
  width: 0px;
  height: 0px;
  opacity: 0.3;
  border-left: 20px solid var(--play-white);
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

.card-text {
  width: 300px;
  height: 82px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: var(--primary-bg);
  overflow: hidden;

  .author-info {
    position: absolute;
    left: -320px;
    width: 280px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    transition: transform 0.6s;
  }

  .dash {
    width: 2px;
    height: 42px;
    background-color: transparent;
    margin: 0;
    transition: all 0.5s;
    flex-shrink: 0;
  }

  .paint-info {
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 20px;
    transition: transform 0.6s;
    flex-shrink: 0;
  }

  .name {
    text-transform: uppercase;
    font-family: "Cormorant SC", serif;
    font-weight: 500;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .info {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

// Анимация
.text-animation {
  .author-info {
    transform: translateX(calc(100% + 40px));
  }

  .dash {
    background-color: var(--accent-color);
  }

  .paint-info {
    transform: translateY(calc(100% + 22px));
  }
}

// (1024px)
@include laptop {
  .card-text {
    width: 300px;
    height: 66px;

    .author-info {
      width: 100%;
      left: -100%;
      padding: 0 20px;
    }

    .dash {
      height: 36px;
    }

    .paint-info {
      width: 100%;
      gap: 6px;
      padding-right: 15px;
    }
  }

  .text-animation {
    .author-info {
      transform: translateX(100%);
    }
    .paint-info {
      transform: translateY(calc(100% + 15px));
    }
  }
}

// (768px)
@include tablet {
  .card-text {
    width: 300px;
    height: 60px;
    .author-info {
      width: 100%;
      left: -100%;
      padding: 12px;
    }

    .dash {
      height: 25px;
    }

    .paint-info {
      width: 100%;
      gap: 4px;
      padding: 12px;
    }
  }

  .text-animation {
    .author-info {
      transform: translateX(100%);
    }
    .paint-info {
      transform: translateY(calc(100% + 10px));
    }
  }
}

@include mobile {
  .card-text {
    width: 256px;
    height: 45px;

    .author-info {
      width: 100%;
      left: -100%;

      padding: 8px 0 8px 12px;
    }

    .dash {
      height: 24px;
    }

    .paint-info {
      width: 100%;
      gap: 4px;

      padding: 8px 8px 8px 12px;
    }

    .name {
      font-size: 12px;
      line-clamp: 1;
      white-space: nowrap;
    }

    .info {
      font-size: 8px;
    }
  }

  .text-animation {
    .author-info {
      transform: translateX(100%);
    }
    .paint-info {
      transform: translateY(calc(100% + 8px));
    }
  }
}
</style>
