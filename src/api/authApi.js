import { api } from "./api";

export const register = async (data) => {
  try {
    const res = await api.post("/api/auth/register", data);
    return res.data;
  } catch (err) {
    console.error("Register failed:", err);
    throw err;
  }
};

export const login = async (data) => {
  try {
    const res = await api.post("/api/auth/login", data);
    return res.data;
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
};

export const changePassword = async (data) => {
  try {
    const res = await api.post("/api/auth/change-password", data);
    return res.data;
  } catch (err) {
    console.error("Failed to change your password:", err);
    throw err;
  }
};
