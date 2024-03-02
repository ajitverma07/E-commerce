const UserModel = require("../models/user_model");

// Check if user is admin
const isAdmin = async (req, res, next) => {
  const adminId = req.user._id;
  const admin = await UserModel.findById(adminId);
  if (!admin) {
    return res.status(404).json({ Message: "User not found" });
  }
  if (admin.isAdmin === true) {
    next();
  } else {
    res
      .status(400)
      .json({ Message: "You are not authorized to access this page!" });
  }
};

module.exports = isAdmin;
