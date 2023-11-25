import axios from 'axios';

export const getAddress = async ({ latitude, longitude }) => {
  try {
    const res = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );
    return res.data;
  } catch (error) {
    throw Error('Failed getting address');
  }
};
