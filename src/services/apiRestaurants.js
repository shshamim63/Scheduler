import axios from "axios";

const BASE_URL = "https://react-fast-pizza-api.onrender.com/api";

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

export const getOrder = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/order/${id}`);
    const { data, status } = res.data;
    if (status === "success") return data;
    throw Error("Failed to load data");
  } catch (error) {
    throw Error("Failed to load data");
  }
};

export const createOrder = async (newOrder) => {
  try {
    const res = await axios.post(`${BASE_URL}/order`, newOrder, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data, status } = res.data;
    if (status === "success") return data;
    throw Error("Failed to create order");
  } catch (error) {
    throw Error("Failed to create order");
  }
};
