import axios from "axios";

const getApiBaseUrl = () => process.env.REACT_APP_API_URL || "";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const getStoredUser = () => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const fetchDataFromApi = async (url) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    console.error("REACT_APP_API_URL is not set");
    return null;
  }

  try {
    const { data } = await axios.get(`${baseUrl}${url}`, {
      headers: getAuthHeaders(),
      timeout: 5000,
    });
    return data;
  } catch (error) {
    console.error("API request failed:", url, error?.message);
    return null;
  }
};

export const postData = async (url, formData) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    return { status: false, msg: "API URL is not configured" };
  }

  try {
    const { data } = await axios.post(`${baseUrl}${url}`, formData, {
      headers: getAuthHeaders(),
      timeout: 5000,
    });
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { status: false, msg: "Network error. Please try again." };
  }
};

export const editData = async (url, updatedData) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) return null;

  try {
    const { data } = await axios.put(`${baseUrl}${url}`, updatedData, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.error("API request failed:", url, error?.message);
    return null;
  }
};

export const deleteData = async (url) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) return null;

  try {
    const { data } = await axios.delete(`${baseUrl}${url}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.error("API request failed:", url, error?.message);
    return null;
  }
};

export const uploadImage = async (url, formData) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) return null;

  try {
    const { data } = await axios.post(`${baseUrl}${url}`, formData);
    return data;
  } catch (error) {
    console.error("API request failed:", url, error?.message);
    return null;
  }
};

export const deleteImages = async (url, image) => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) return null;

  try {
    const { data } = await axios.delete(`${baseUrl}${url}`, image);
    return data;
  } catch (error) {
    console.error("API request failed:", url, error?.message);
    return null;
  }
};
