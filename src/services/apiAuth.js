import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/registration`, data);
    if (res.status === 201) return res.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, data);
    if (res.status === 200) return res.data?.message;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
