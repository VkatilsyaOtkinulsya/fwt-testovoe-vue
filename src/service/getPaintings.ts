import type { Painting } from "@/types/painting.types";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Props = {
  id?: string | number;
  page?: number;
  limit?: number;
  search?: string;
  authorId?: number | null;
};

export const getPaintings = async ({
  id,
  page = 1,
  search,
  authorId
}: Props): Promise<Painting[]> => {
  try {
    const params: Record<string, string> = {
      _page: page.toString(),
      _limit: "6"
    };

    if (id) params.id = id.toString();
    if (search) params.q = search;
    if (authorId) params.authorId = authorId.toString();

    const { data } = await axios.get<Painting[]>(
      `${BASE_URL}/paintings?` + new URLSearchParams(params),
      {
        headers: {
          accept: "application/json"
        }
      }
    );
    if (!data) return [];

    data.forEach((paint) => (paint.imageUrl = `${BASE_URL}${paint.imageUrl}`));

    return data;
  } catch (e) {
    console.error(e, "Возникла ошибка при получении картины");
    return [];
  }
};
