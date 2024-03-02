import axios from "axios";

const API_URL = "http://localhost:8080/api/user";

const userAPI = {
  register: async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProfile: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/myProfile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  UpdateProfile: async (updatedData, token) => {
    try {
      const response = await axios.patch(
        `${API_URL}/updateProfile`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  OrderProduct: async (productId, quantity, paymentMethod, token) => {
    try {
      const response = await axios.post(
        `${API_URL}/orderProduct/${productId}`,
        { quantity, paymentMethod },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  CancelOrder: async (orderId, token) => {
    try {
      const response = await axios.delete(`${API_URL}/cancelOrder/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  GetMyOrders: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/myOrders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userAPI;
