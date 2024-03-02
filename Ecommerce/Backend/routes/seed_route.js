const express = require("express");
const { seedProducts, seedUsers } = require("../controllers/sample_controller");
const seedRouter = express.Router();

seedRouter.post("/seedProducts",seedProducts);
seedRouter.post("/seedUsers",seedUsers);

module.exports = seedRouter;