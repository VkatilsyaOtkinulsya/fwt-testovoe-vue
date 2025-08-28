import { usePaintingsStore } from "@/stores/paintingsStore.ts";
import { computed, ref } from "vue";

export function usePagination() {
  const currentPage = ref(1);
  const totalPages = ref(9);

  const store = usePaintingsStore();

  const displayedPages = computed(() => {
    const pages = [];
    const maxVisiblePages = 3;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    const startPage = Math.max(1, currentPage.value - halfVisible);
    const endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Добавляем последнюю страницу, если нужно
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

  return { goToPage, goToPreviousPage, goToNextPage, displayedPages };
}
