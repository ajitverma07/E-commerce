const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    products: {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
      },
      quantity: {
        type: Number, 
        required: true,
      },
    },
    totalamount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Rejected"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "PayPal"],
      default: "PayPal",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("OrderModel", orderSchema);

module.exports = OrderModel;
