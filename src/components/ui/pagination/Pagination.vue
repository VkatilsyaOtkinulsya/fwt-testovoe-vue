<script setup lang="ts">
import { usePaintingsStore } from "@/stores/paintingsStore.ts";
import { ref, computed, watch } from "vue";

const store = usePaintingsStore();
const currentPage = ref(1);
const totalPages = ref(6);

watch(
  () => store.page,
  (newPage) => {
    currentPage.value = newPage;
  }
);

const displayedPages = computed(() => {
  const pages = [];
  const maxVisiblePages = 3;
  const halfVisible = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage.value - halfVisible);
  const endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages.value) {
    if (endPage < totalPages.value - 1) {
      pages.push("...");
    }
    pages.push(totalPages.value);
  }

  return pages;
});

function goToPage(page: number | string) {
  if (typeof page === "number") {
    store.page = page;
    currentPage.value = page;
  }
}

function goToPreviousPage() {
  if (currentPage.value > 1) {
    const prevPage = currentPage.value - 1;
    store.page = prevPage;
    currentPage.value = prevPage;
  }
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    const nextPage = currentPage.value + 1;
    store.page = nextPage;
    currentPage.value = nextPage;
  }
}
</script>

<template>
  <footer class="footer">
    <div class="pagination">
      <button
        type="button"
        class="page nav-button"
        :disabled="currentPage === 1"
        @click="goToPreviousPage"
      >
        &lt;
      </button>

      <button
        v-for="(page, index) in displayedPages"
        :key="index"
        type="button"
        :class="[
          'page',
          page === currentPage ? 'active' : '',
          typeof page === 'string' ? 'ellipsis' : ''
        ]"
        :disabled="typeof page === 'string'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        type="button"
        class="page nav-button"
        :disabled="currentPage === totalPages"
        @click="goToNextPage"
      >
        &gt;
      </button>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  .pagination {
    display: flex;
    gap: 4px;
  }
}
.page {
  padding: 1px 8px;
  line-height: 140%;
  font-weight: 300;
  color: var(--primary-text);

  &:hover {
    background: var(--secondary-bg);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.ellipsis {
  cursor: default;
  background: transparent;
  border: none;
  min-width: auto;

  &:hover {
    background: var(--secondary-bg);
  }
}

.active {
  background-color: var(--secondary-bg);
  font-weight: 500;
}
</style>
