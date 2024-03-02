const express = require("express");
const isAdmin = require("../middlewares/admin_security");
const {
  getAllUsers,
  updateUser,
  getAllOrders,
} = require("../controllers/admin_controller");
const authorization = require("../middlewares/user_security");

const adminRouter = express.Router();

adminRouter.use(authorization, isAdmin);
adminRouter.get("/getAllUsers", getAllUsers);
adminRouter.patch("/updateUser/:id", updateUser);
adminRouter.get("/getAllOrders", getAllOrders);

module.exports = adminRouter;
