import { getPaintings } from "@/service/getPaintings.ts";
import type { Painting } from "@/types/painting.types";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useInfoStore } from "./infoStore.ts";
import { enrichPaintings } from "@/composables/useCardsGallery.ts";

export const usePaintingsStore = defineStore("paintings", () => {
  const paintings = ref<Painting[]>([]);
  const isLoading = ref(false);

  const page = ref(1);

  const pages = computed(() => {
    console.log(paintings.value.length);
    return Math.ceil(paintings.value.length / 6);
  });
  const search = ref("");
  const authorId = ref<number | null>(null);

  async function fetchPaintings() {
    isLoading.value = true;

    try {
      const data = await getPaintings({
        page: page.value,
        search: search.value,
        authorId: authorId.value
      });

      paintings.value = data;
    } catch (e) {
      console.error(e, "ОШИБКА");
    } finally {
      isLoading.value = false;
    }
  }

  watch([page, search, authorId], fetchPaintings, { immediate: true });

  const infoStore = useInfoStore();
  const enrichedItems = computed(() => enrichPaintings(paintings.value, infoStore.data));

  return { paintings, enrichedItems, isLoading, page, pages, search, authorId, fetchPaintings };
});
