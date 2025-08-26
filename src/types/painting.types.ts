export interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

export interface PaintingsInfo {
  authors: Record<number, string>;
  locations: Record<number, string>;
}

export interface Author {
  id: number;
  name: string;
}
export interface Location {
  id: number;
  location: string;
}
