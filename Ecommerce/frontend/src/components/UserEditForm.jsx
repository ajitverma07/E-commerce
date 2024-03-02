import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { selectToken } from "../slices/AuthSlice";
import adminAPI from "../APIs/AdminAPI";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UserEditForm() {
  const { userId } = useParams();
  // console.log(userId);
  const token = useSelector(selectToken);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    admin: false,
  });

  // Fetch user details based on userId
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await adminAPI.getUserById(userId, token);
        // console.log(response);
        setFormData({
          name: response.name,
          email: response.email,
          address: response.address,
          admin: response.admin,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line
  }, [token]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await adminAPI.updateUser(userId, formData, token);
      // You may want to dispatch an action to update the user data in Redux store here
      toast.success(response.Message)
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="mb-5 mt-5 p-3 container border border-dark">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdateUser} className="mx-auto row mt-5">
        <div className="col-6">
          <label htmlFor="userName"  className="form-lable">Name</label>
          <input
            type="text"
            id="userName"
            name="name" className="form-control border-dark"
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-6">
          <label htmlFor="userEmail" className="form-lable">Email</label>
          <input
            type="email"
            id="userEmail"
            name="email" className="form-control border-dark"
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>

        <div className="row">
          <div className="col my-2">
            <label htmlFor="userAddress" className="form-lable">Address</label>
            <input
              type="text"
              id="userAddress"
              name="address" className="form-control border-dark"
              value={formData.address}
              onChange={handleFormChange}
            />
          </div>
          <div className="col my-2">
            <label htmlFor="isAdmin" className="form-lable">Admin</label>
            <select
              id="isAdmin"
              name="admin" className="form-control border-dark"
              value={formData.admin}
              onChange={handleFormChange}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>

        <button className="mt-3 btn btn-dark" type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UserEditForm;
