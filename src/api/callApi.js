import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "",
  timeout: 10000,
});

export const callAPI = async ({ method, url, data = null, params = null }) => {
  try {
    const response = await api({
      method,
      url,
      data,
      params,
    });
    return response;
  } catch (error) {
    console.error("callAPI error:", error);
    throw error;
  }
};
