import { api } from "./api";

export const getDevelopers = async () => {
  try {
    const res = await api.get("/api/developers");
    return res.data;
  } catch (err) {
    console.error("Get developers failed:", err);
    return [];
  }
};

export const createDeveloper = async (data) => {
  try {
    const res = await api.post("/api/developers", data);
    return res.data;
  } catch (err) {
    console.error("Create developer failed:", err);
    throw err;
  }
};

export const updateDeveloper = async (id, data) => {
  try {
    const res = await api.put(`/api/developers/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update developer failed:", err);
    throw err;
  }
};

export const deleteDeveloper = async (id) => {
  try {
    const res = await api.delete(`/api/developers/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete developer failed:", err);
    throw err;
  }
};
