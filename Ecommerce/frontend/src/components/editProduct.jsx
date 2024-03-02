import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {   fetchProductDeatils, updateProduct } from "../APIs/ProductsAPI";
import { selectToken } from "../slices/AuthSlice";
import { useSelector } from "react-redux";

const ProductEditForm = () => {
  const { id } = useParams();
  const token = useSelector(selectToken);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productDetails = await fetchProductDeatils(id);
        const product = productDetails.Product;
        setFormData({
          title: product.title,
          description: product.description,
          quantity: product.quantity,
          price: product.price,
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, formData, token);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="product-edit-form-container container m-5 border-dark">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-lable">Title:</label>
          <input
            type="text"
            id="title"
            name="title" className="form-control border-dark"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-lable">Description:</label>
          <textarea
            id="description"
            name="description" className="form-control  border-dark"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-lable">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity" className="form-control  border-dark"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-lable">Price:</label>
          <input
            type="number"
            id="price"
            name="price" className="form-control  border-dark"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="update-product-btn btn btn-dark">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ProductEditForm;
