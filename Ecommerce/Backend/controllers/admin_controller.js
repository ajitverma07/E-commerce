const OrderModel = require("../models/order_model");
const UserModel = require("../models/user_model");

// Get All Users
const getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json({ Users: users });
};

// Update User
const updateUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(404).json({ Message: "No user id found!" });
  }
  const user = await UserModel.findById(userId).select("-password");
  const { name, email, address, isAdmin } = req.body;
  const updateFields = {};
  if (name && name !== user.name) updateFields.name = name;
  if (email && email !== user.email) updateFields.email = email;
  if (address && address !== user.address) updateFields.address = address;
  if (isAdmin && isAdmin !== user.isAdmin) updateFields.isAdmin = isAdmin;
  if (Object.keys(updateFields).length === 0) {
    return res.status(401).json({ Message: "Please edit atleast one field!" });
  }
  const newUser = await UserModel.findByIdAndUpdate(userId, updateFields, {
    new: true,
    select: "-password",
  });
  res
    .status(200)
    .json({ Message: "User Updated Successfully!", user: newUser });
};

// Get All Orders
const getAllOrders = async (req, res) => {
  const ordersData = await OrderModel.find()
    .populate({ path: "user", select: "name email" })
    .populate({ path: "products.product", select: "title description" });
  if (!ordersData) {
    return res.status(400).json({ Message: "No orders found" });
  }
  res.status(200).json({ ordersData });
};

// Update Order Status
const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  if (!orderId) {
    return res.status(404).json({ Message: "No orders found!" });
  }
  const { updatedStatus } = req.body;
  const order = await OrderModel.findByIdAndUpdate(orderId, {
    status: updatedStatus,
  });
  res.status(200).json({ order });
};

module.exports = { getAllUsers, updateUser, getAllOrders, updateOrderStatus };
