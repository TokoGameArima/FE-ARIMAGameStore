import { api } from "./api";

export const createOrder = async (data) => {
  try {
    const res = await api.post("/api/orders", data);
    return res.data;
  } catch (err) {
    console.error("Create order failed:", err);
    throw err;
  }
};

export const getAllOrders = async () => {
  try {
    const res = await api.get("/api/orders");
    return res.data;
  } catch (err) {
    console.error("Get all orders failed:", err);
    return [];
  }
};

export const getMyOrders = async () => {
  try {
    const res = await api.get("/api/orders/me");
    return res.data;
  } catch (err) {
    console.error("Get my orders failed:", err);
    return [];
  }
};

export const verifyOrder = async (id) => {
  try {
    const res = await api.patch(`/api/orders/${id}/verify`);
    return res.data;
  } catch (err) {
    console.error("Verify order failed:", err);
    throw err;
  }
};
