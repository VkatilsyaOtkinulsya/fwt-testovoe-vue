import { getAuthors, getLocations } from "@/service/getPaintingsInfo.ts";
import type { PaintingsInfo } from "@/types/painting.types";
import { defineStore } from "pinia";

export const useInfoStore = defineStore("info", {
  state: () => ({
    data: { authors: [], locations: [] } as PaintingsInfo,
    loaded: false
  }),
  actions: {
    async getPaintingsInfo() {
      try {
        const [authors, locations] = await Promise.all([getAuthors(), getLocations()]);
        const authorsRecords: Record<number, string> = Object.fromEntries(
          authors.map((a) => [a.id, a.name])
        );

        const locationsRecords: Record<number, string> = Object.fromEntries(
          locations.map((l) => [l.id, l.location])
        );
        this.data.authors = locationsRecords;
        this.data.locations = authorsRecords;
        this.loaded = true;
      } catch (e) {
        console.error(e, "ОШИБКА");
      }
    }
  }
});
