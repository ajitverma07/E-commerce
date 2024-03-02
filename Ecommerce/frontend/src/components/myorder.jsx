import React, { useEffect, useState } from "react";
import userAPI from "../APIs/UserAPI";
import { useSelector } from "react-redux";
import { selectToken } from "../slices/AuthSlice";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = useSelector(selectToken);

  const handleCancelOrder = async (orderId) => {
    await userAPI.CancelOrder(orderId, token);
    fetchOrders();
  };

  const fetchOrders = async () => {
    try {
      const ordersData = await userAPI.GetMyOrders(token);
      setOrders(ordersData.myOrderData);
      console.log(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="mt-5 mb-5">
      <h2>My Orders</h2>
      {orders.length === 0 && (
        <>
          <h6>No Orders Available</h6>
        </>
      )}
      {orders.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Payment Method</th>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Quantity</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.status}</td>
                <td>{order.totalamount}</td>
                <td>{order.paymentMethod}</td>
                <td>
                  <img
                    src={order.products.product.image}
                    alt={order.products.product.title}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>{order.products.product.title}</td>
                <td>{order.products.quantity}</td>
                <td>
                  <Link
                    onClick={() => {
                      handleCancelOrder(order._id);
                    }}
                  >
                    Cancel Order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
