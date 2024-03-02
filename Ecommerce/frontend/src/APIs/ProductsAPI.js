import axios from "axios";

const API_URL = "http://localhost:8080/api/product";

export const fetchProductDeatils = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/productDetails/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllProducts`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}/addProduct`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization':`Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/searchProduct?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

export const updateProduct = async (productId, updatedFields, token) => {
  try {
    const response = await axios.patch(
      `${API_URL}/updateProduct/${productId}`,
      updatedFields,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId, token) => {
  try {
    const response = await axios.delete(
      `${API_URL}/deleteProduct/${productId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
