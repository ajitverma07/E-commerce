import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../slices/ProductSlice";
import ProductCard from "./ProductCard";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // Accessing products from Redux store

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="row container mx-auto">
        {products.map((product) => (
            <ProductCard product={product} key={product._id}/>
        ))}
      </div>
    </>
  );
}

export default ProductList;
