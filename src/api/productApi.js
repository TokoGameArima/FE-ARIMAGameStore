import { api } from "./api";

export const getAllProducts = async () => {
  try {
    const res = await api.get("/api/products");
    return res.data;
  } catch (err) {
    console.error("Get products failed:", err);
    return [];
  }
};

export const createProduct = async (data) => {
  try {
    const res = await api.post("/api/products", data);
    return res.data;
  } catch (err) {
    console.error("Create product failed:", err);
    throw err;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await api.get(`/api/products/${id}`);
    return res.data;
  } catch (err) {
    console.error("Get product by ID failed:", err);
    throw err;
  }
};

export const updateProduct = async (id, data) => {
  try {
    const res = await api.put(`/api/products/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update product failed:", err);
    throw err;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/api/products/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete product failed:", err);
    throw err;
  }
};
