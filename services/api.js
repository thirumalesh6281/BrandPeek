import axios from "axios";

const API_URL = "https://6898ce9cddf05523e55dfd52.mockapi.io";

export const getBrands = async () => {
  try {
    const response = await axios.get(`${API_URL}/brands`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
};
