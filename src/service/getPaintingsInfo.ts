import type { Author, Location } from "@/types/painting.types";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAuthors = async (): Promise<Author[]> => {
  try {
    const { data } = await axios.get<Author[]>(`${BASE_URL}/authors`, {
      headers: {
        accept: "application/json"
      }
    });
    if (!data) return [];

    return data;
  } catch (e) {
    console.error(e, "Возникла ошибка при получении аутхорс");
    return [];
  }
};

export const getLocations = async (): Promise<Location[]> => {
  try {
    const { data } = await axios.get<Location[]>(`${BASE_URL}/locations`, {
      headers: {
        accept: "application/json"
      }
    });
    if (!data) return [];

    return data;
  } catch (e) {
    console.error(e, "Возникла ошибка при получении локатионс");
    return [];
  }
};
