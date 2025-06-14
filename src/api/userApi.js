import { api } from "./api";

export const getUserProfile = async (id) => {
  try {
    const res = await api.get(`/api/users/${id}`);
    return res.data;
  } catch (err) {
    console.error("Get user profile failed:", err);
    throw err;
  }
};

export const updateUserProfile = async (id, data) => {
  try {
    const res = await api.patch(`/api/users/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update user profile failed:", err);
    throw err;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/api/users/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete user failed:", err);
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.get(`/api/users`);
    return res.data;
  } catch (err) {
    console.error("Get all users failed:", err);
    return [];
  }
};
