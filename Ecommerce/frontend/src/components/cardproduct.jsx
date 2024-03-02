import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../APIs/ProductsAPI";
import { selectToken } from "../slices/AuthSlice";
import { useSelector } from "react-redux";

function ProductCard({ product }) {
  const [admin, setAdmin] = useState(false);
  const styleImage = {
    height: "18rem",
    // width: "100%",
  };

  const token = useSelector(selectToken);
  // console.log(token);

  const handleDeleteProduct = async (id) => {
    // console.log(id);
    try {
      await deleteProduct(id, token);
      // Refresh the page after deleting the product
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userString = sessionStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      if (user.isAdmin === true) {
        setAdmin(true);
      }
    }
  }, []);

  // console.log("Product Image:", product.image);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 text-center mb-3 px-4">
        <div className="card mx-auto border-0">
          <img
            src={product.image}
            className="card-img-top mx-auto rounded-5 shadow"
            alt={product.name}
            style={styleImage}
          />

          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-text">₹{product.price}</h6>

            <Link
              to={`/productDetails/${product._id}`}
              className="btn btn-dark me-2"
            >
              <i className="fa-solid fa-bookmark me-2"></i>
              More...
            </Link>
            {admin && (
              <>
                <Link
                  to={`/editProduct/${product._id}`}
                  className="btn btn-dark me-2 mt-2"
                >
                  {/* <i className="fa-solid fa-user-pen fa-md me-1"></i> */}
                  Edit
                </Link>
                <Link
                  to="/allproducts"
                  className="btn btn-dark mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteProduct(product._id);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
