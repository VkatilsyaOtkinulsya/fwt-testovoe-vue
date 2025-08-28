import type { Painting, PaintingsInfo } from "@/types/painting.types";

export type FinalPainting = Painting & {
  authorName: string;
  location: string;
};

export const enrichPaintings = (
  paintings: readonly Painting[],
  info: PaintingsInfo
): FinalPainting[] => {
  return paintings.map((paint) => ({
    ...paint,
    authorName: info.authors[paint.authorId],
    location: info.locations[paint.locationId]
  }));
};
