const express = require("express");
const upload = require("../config/multer");
const {
  addProduct,
  productDetails,
  searchProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/product_controller");
const authorization = require("../middlewares/user_security");
const isAdmin = require("../middlewares/admin_security");

const productRouter = express.Router();

productRouter.get("/getAllProducts",getAllProducts);

// Route to add a new product
productRouter.post(
  "/addProduct",
  authorization,
  isAdmin,
  upload.single("image"),
  addProduct
);

productRouter.get("/productDetails/:id", productDetails);

productRouter.get("/searchProduct", searchProduct);

productRouter.patch(
  "/updateProduct/:id",
  authorization,
  isAdmin,
  updateProduct
);

productRouter.delete(
  "/deleteProduct/:id",
  authorization,
  isAdmin,
  deleteProduct
);


module.exports = productRouter;
