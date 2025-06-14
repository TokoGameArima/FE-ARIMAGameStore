import { api } from "./api";

export const getRandomGames = async () => {
  const res = await api.get("/api/products");
  const allGames = res.data;

  const shuffled = allGames.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};
