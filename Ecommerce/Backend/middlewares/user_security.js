const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const UserModel = require("../models/user_model");

// User Authentication
const authorization = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({ Message: "Please log-in first!" });
    }
    const token = authHeader.replace("Bearer ", "");
    if (!token) {
        return res.status(400).json({ Message: "Please log-in first!" });
      }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await UserModel.findById({ _id: decoded.id }, { password: 0 });
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log("Error occured in authorization:", error);
    res.send(500).json({ Message: "Internal Server Error" });
  }
};

module.exports = authorization;
