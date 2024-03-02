const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user_model");
const { JWT_SECRET } = require("../config/env");
const ProductModel = require("../models/product_model");
const OrderModel = require("../models/order_model");

// Create User
const register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password || !address) {
      return res.status(400).json({ Message: "All fields are mandatory!" });
    }
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res
        .status(400)
        .json({ Message: "You are already registered with us!" });
    }
    const hashPassword = await bcrypt.hash(password, 6);
    const newUser = new UserModel({
      name,
      email,
      address,
      password: hashPassword,
      isAdmin: false,
      orders: [],
    });
    console.log(newUser);
    await newUser.save();
    return res.status(201).json({ Message: "Registration Successfull!" });
  } catch (error) {
    console.log("Error occured in registration:", error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

// Sign-In
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ Message: "All fields are mandatory!" });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ Message: "Please register first!" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({ Message: "Please check password!" });
  }
  const payload = { id: user._id, email: user.email };
  const token = jwt.sign(payload, JWT_SECRET);
  res.status(200).json({ Message: "Logged-In successfully!", token,user });
};

// My Profile
const myProfile = async (req, res) => {
  const myId = req.user._id;
  const user = await UserModel.findById({ _id: myId }, { password: 0 });
  if (!user) {
    return res.status(400).json({ Message: "No user found" });
  }
  res.status(200).json({ user });
};

// Update Profile
const updateProfile = async (req, res) => {
  const myId = req.user._id;
  const { name, email, address } = req.body;
  const user = await UserModel.findById({ _id: myId }, { password: 0 });
  if (!user) {
    return res.status(404).json({ Message: "User not found" });
  }
  const updateFields = {};
  if (name && name !== user.name) updateFields.name = name;
  if (email && email !== user.email) updateFields.email = email;
  if (address && address !== user.address) updateFields.address = address;
  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ Message: "Please edit atleast one field!" });
  }
  const updatedUser = await UserModel.findByIdAndUpdate(myId, updateFields, {
    new: true,
    select: "-password",
  });
  // console.log("Updated user:", updatedUser);
  res
    .status(200)
    .json({ Message: "Profile updated successfully", user: updatedUser });
};

// Order Product
const orderProduct = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(404).json({ Message: "Product not found!" });
  }
  const userId = req.user._id;
  const { quantity, paymentMethod } = req.body;
  if (!quantity || !paymentMethod) {
    return res.status(400).json({ Message: "All fields are required!" });
  }
  const product = await ProductModel.findById(productId);
  const totalamount = product.price * quantity;
  if (quantity > product.quantity) {
    return res
      .status(400)
      .json({ Message: "Requested quantity not available!" });
  }
  const order = new OrderModel({
    user: userId,
    products: { product: product._id, quantity },
    totalamount,
    paymentMethod,
  });
  await order.save();
  await UserModel.findByIdAndUpdate(userId, { $push: { orders: order._id } });
  await ProductModel.findByIdAndUpdate(productId, {
    quantity: product.quantity - quantity,
  });
  res.status(200).json({ Message: "Order placed successfully!" });
};

// Cancel Order
const cancelOrder = async (req, res) => {
  const orderId = req.params.id;
  if (!orderId) {
    return res.status(404).json({ Message: "No id in params found!" });
  }
  const userId = req.user._id;
  const order = await OrderModel.findById(orderId);
  if (!order) {
    return res.status(404).json({ Message: "Order not found!" });
  }
  if (userId.toString() === order.user.toString()) {
    const userUpdation = await UserModel.findByIdAndUpdate(userId, {
      $pull: { orders: order._id },
    });
    const productUpdation = await ProductModel.findOneAndUpdate(
      { _id: order.products.product },
      { $inc: { quantity: order.products.quantity } }
    );
    await OrderModel.findByIdAndDelete(orderId);
    res.status(200).json({
      Message: "Order cancelled successfully!",
      userUpdation,
      productUpdation,
      order,
    });
  } else {
    res
      .status(400)
      .json({ Message: "You are not authorized to cancel this order!" });
  }
};

const myOrders = async (req, res) => {
  const userId = req.user._id;
  const orderUser = await UserModel.findById(userId).populate({
    path: "orders",
    populate: {
      path: "products.product",
      select: "title description image",
    },
  });
  const myOrderData = orderUser.orders;
  res.status(200).json({ myOrderData });
};

module.exports = {
  register,
  login,
  myProfile,
  updateProfile,
  orderProduct,
  cancelOrder,
  myOrders,
};
