<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { usePaintingsStore } from "@/stores/paintingsStore.ts";
import { useThemeStore } from "@/stores/themeStore.ts";
import { computed, ref, watch } from "vue";

const store = usePaintingsStore();

const themeStore = useThemeStore();
const theme = computed(() => (themeStore.theme === "dark" ? true : false));

const inputValue = ref(store.search);
let timer: number | undefined;

watch(inputValue, (val) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    store.search = val;
    store.page = 1;
  }, 1000);
});
</script>

<template>
  <div class="search-wrapper">
    <div :class="['search', theme ? '' : 'theme-light']">
      <SearchIcon :style="'margin-right: 12px'" :theme="theme" />
      <input
        id="search"
        v-model="inputValue"
        name="search"
        type="text"
        placeholder="Поиск картин..."
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  margin-bottom: 20px;
  transition: gap 0.3s ease-in-out;

  @include laptop {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
  }
}

.search {
  grid-column: 9 / 13;
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg);
  border-radius: 4px;
  padding: 8px 16px;
  width: 100%;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:focus-within {
    border: 1px solid var(--primary-muted);
    color: var(--primary-text);
  }

  @include tablet {
    grid-column: 5 / 9;
  }

  @include mobile {
    grid-column: 5 / 9;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    grid-column: 1 / 9;
  }
}

#search {
  font-size: 14px;
  color: var(--primary-muted);
  height: 20px;
  border: none;
  outline: none;
  flex: 1;
  transition: all 0.3s ease-in-out;

  @include mobile {
    font-size: 12px;
    line-height: 17px;
  }
}

.theme-light {
  border: 1px solid var(--primary-border);
}
</style>
