const express = require("express");
const {
  register,
  login,
  myProfile,
  updateProfile,
  orderProduct,
  cancelOrder,
  myOrders,
} = require("../controllers/user_controller");
const authorization = require("../middlewares/user_security");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/myProfile", authorization, myProfile);
userRouter.patch("/updateProfile", authorization, updateProfile);
userRouter.post("/orderProduct/:id", authorization, orderProduct);
userRouter.delete("/cancelOrder/:id", authorization, cancelOrder);
userRouter.get("/myOrders", authorization, myOrders);

module.exports = userRouter;
