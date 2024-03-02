import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/CartSlice";
import { fetchProductsAsync } from "../slices/ProductSlice";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const products = useSelector((state) => state.products.products);

  const getProductQuantity = (productId) => {
    const product = products.find((product) => product._id === productId);
    return product ? product.quantity : 0;
  };

  const getCartItems = () => {
    const items = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    setCartItems(items);
  };

  useEffect(() => {
    getCartItems();
    dispatch(fetchProductsAsync());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (cartItems.length > 0 && products.length > 0) {
      const filteredProducts = products.filter((product) =>
        cartItems.some((item) => item.productId === product._id)
      );
      setCartProducts(filteredProducts);
    }
  }, [cartItems, products]);

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
    getCartItems();
    // Update the cartItems state to trigger re-render
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (productId) => {
    const productQuantity = getProductQuantity(productId);
    // Update the cartItems state to trigger re-render
    const updatedCartItems = cartItems.map((item) => {
      if (item.productId === productId) {
        if (productQuantity <= item.quantity) {
          console.log(item.quantity);
          alert("No more quantity available");
          console.log(item);
          return item;
        } else {
          dispatch(increaseQuantity(productId));
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
    // Update the cartItems state to trigger re-render
    const updatedCartItems = cartItems.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mt-5 mb-5 border border-dark">
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartProducts.map((item) => (
            <div className="row mb-3 border border-dark" key={item._id}>
              <div className="col-lg-3 col-12 mb-lg-0 mb-3">
                <img src={item.image} alt={item.title} className="img-fluid" style={{height:"25rem"}}/>
              </div>
              <div className="col-lg-9 col-12">
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-danger me-2"
                    onClick={() => handleDecreaseQuantity(item._id)}
                  >
                    -
                  </button>
                  <span>
                    {cartItems.find(
                      (cartItem) => cartItem.productId === item._id
                    )?.quantity || 0}
                  </span>
                  <button
                    className="btn btn-outline-success mx-2"
                    onClick={() => handleIncreaseQuantity(item._id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-dark me-2"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <Link to="/checkOut">
              <button className="btn btn-dark mb-2">Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
