import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import adminAPI from '../APIs/AdminAPI';
import { useSelector } from 'react-redux';
import { selectToken } from '../slices/AuthSlice';
import { Link } from 'react-router-dom';

function Adminpanel() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const token = useSelector(selectToken);

  // Function to fetch users and orders data
  const getData = async () => {
    try {
      const usersData = await adminAPI.getAllUsers(token);
      setUsers(usersData.Users);
      const ordersData = await adminAPI.getAllOrders(token);
      setOrders(ordersData.ordersData);
      console.log(ordersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateOrderStatus = async (orderId, updatedStatus) => {
    try {
      const response = await adminAPI.updateOrderStatus(
        orderId,
        updatedStatus,
        token
      );
      console.log(response);
      // Handle success response if needed
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleStatusChange = async (orderId, e) => {
    const updatedStatus = e.target.value;
    await updateOrderStatus(orderId, updatedStatus);
    getData();
    // Optionally, you can update the order list after the status is updated
    // For example, by fetching the updated orders from the server again
  };

  // useEffect to fetch data on component mount
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Panel</h2>
      <h4>All Users</h4>
      <table className="table table-striped mb-4 border-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edituser</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td><button className="btn btn-outline-white ms-3 ">
                  <Link to={`/editUser/${user._id}`}>User {index + 1}

                  </Link>
                </button></td>
              </tr>
            ))}
        </tbody>
      </table>
      <h4>All Orders</h4>
      <table className="table table-striped mb-5 border-dark">
        <thead>
          <tr>
            <th>Ordered by</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Total Amount</th>
            <th>Mode of Payment</th>
            <th>Order status</th>
            <th> Edit order</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.user.name}</td>
                <td>{order.products.quantity}</td>
                <td>{order.products.product.title}</td>
                <td>{order.totalamount}</td>
                <td>{order.paymentMethod}</td>
                <td>            <div>

                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div></td>
                <td><button className="btn btn-outline-white ms-3 ">
                  <Link to="/adminpanel" onClick={()=>{
                    alert(" Edit of Orders is not available now!")
                  }}>Order {index + 1}</Link>
                </button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Adminpanel;
