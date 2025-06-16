import { api } from "./api";

export const getAllReviews = async () => {
  try {
    const res = await api.get("/api/reviews");
    return res.data;
  } catch (err) {
    console.error("Get reviews failed:", err);
    return [];
  }
};

export const createReview = async (data) => {
  try {
    const res = await api.post("/api/reviews", data);
    return res.data;
  } catch (err) {
    console.error("Create review failed:", err);
    throw err;
  }
};

export const getReviewsByGame = async (gameId) => {
  try {
    const res = await api.get(`/api/reviews/game/${gameId}`);
    return res.data;
  } catch (err) {
    console.error("Get reviews by game failed:", err);
    return [];
  }
};

export const deleteReview = async (id) => {
  try {
    const res = await api.delete(`/api/reviews/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete review failed:", err);
    throw err;
  }
};
