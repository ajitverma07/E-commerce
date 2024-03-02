import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const adminAPI = {
  getUserById: async (userId, token) => {
    try {
      const response = await axios.get(`${API_URL}/getUserById/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/getAllUsers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userId, userData, token) => {
    try {
      const response = await axios.patch(
        `${API_URL}/updateUser/${userId}`,
        userData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllOrders: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/getAllOrders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateOrderStatus: async (orderId, updatedStatus, token) => {
    try {
      const response = await axios.patch(
        `${API_URL}/updateOrderStatus/${orderId}`,
        { updatedStatus },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default adminAPI;
