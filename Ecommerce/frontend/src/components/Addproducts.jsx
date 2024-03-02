import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../slices/AuthSlice";
import { addProduct } from "../APIs/ProductsAPI";
import { toast } from "react-toastify";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
    image: null,
  });
  const token = useSelector(selectToken);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct(formData, token);
      console.log(response);
      // Optionally, you can handle success response here (e.g., show success message)
      // Reset form after successful submission
      setFormData({
        title: "",
        description: "",
        quantity: "",
        price: "",
        image: null,
      });
      toast.success(response.Message)
    } catch (error) {
      console.error("Error adding product:", error);
      // Optionally, you can handle error response here (e.g., show error message)
    }
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  return (
    <div className="container mt-5 mb-5 border border-dark p-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title" className="form-control border-dark"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            name="description" className="form-control border-dark"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            name="quantity" className="form-control border-dark"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            name="price" className="form-control border-dark"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="my-3">
            <label className="text-secondary me-2">Image:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              className="text-secondary"
              onChange={handleImageChange}
              required
            />
          </div>
        <button type="submit" className="btn btn-dark">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
