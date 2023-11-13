import axios from "axios";

const BASE_URL = "https://rrreact-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/menu`);
    const { data, status } = res.data;
    if (status === "success") return data;
    throw Error("Failed to load data");
  } catch (error) {
    throw Error("Failed to load data");
  }
};
