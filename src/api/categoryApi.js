import { api } from "./api";

export const getCategories = async () => {
  try {
    const res = await api.get("/api/categories");
    return res.data;
  } catch (err) {
    console.error("Get categories failed:", err);
    return [];
  }
};

export const createCategory = async (data) => {
  try {
    const res = await api.post("/api/categories", data);
    return res.data;
  } catch (err) {
    console.error("Create category failed:", err);
    throw err;
  }
};

export const updateCategory = async (id, data) => {
  try {
    const res = await api.put(`/api/categories/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update category failed:", err);
    throw err;
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await api.delete(`/api/categories/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete category failed:", err);
    throw err;
  }
};
