import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAPI from "../APIs/UserAPI";
import { clearCart } from "../slices/CartSlice";
import { selectToken } from "../slices/AuthSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD"); // Default payment method
  const token = useSelector(selectToken);
  const products = useSelector((state) => state.products.products);
  // console.log(products);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  const totalAmount = useSelector((state) =>
    state.cart.items.reduce((total, item) => {
      const product = products.find((p) => p._id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0)
  );
  // console.log(totalAmount);
  // console.log(typeof(totalAmount));

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async () => {
    try {
      if (shippingAddress === "") {
        return alert("Please Enter Shipping Address!");
      }
      // Iterate through each item in the cart
      for (const item of cartItems) {
        // Make the API call to place the order for the current item
        await userAPI.OrderProduct(
          item.productId, // Pass productId as req.params
          item.quantity, // Pass quantity in the request body
          paymentMethod,
          token
        );
      }

      // Clear the cart after placing all orders
      dispatch(clearCart());
      alert("Order placed Successfully!");
      // Redirect to the orders page
      navigate("/myOrders");
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error here, such as displaying an error message to the user
    }
  };

  return (
    <div className="container mt-5 mb-5 border border-dark p-4">
      <h2>Checkout</h2>
      <div className="mb-3 mt-4 ">
        <h3>Shipping Address</h3>
        <input
          type="text"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          placeholder="Enter your shipping address"
          className="form-control border-dark"
        />
      </div>
      <div className="mb-3">
        <h3>Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          className="form-select border-dark"
        >
          <option value="COD">Cash on Delivery</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>
      <div className="mb-3">
        <h3>Order Summary</h3>
        <p>Total Amount: ₹{totalAmount}</p>
      </div>
      <button className="btn btn-dark" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
