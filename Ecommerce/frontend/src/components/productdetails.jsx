import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProductDeatils } from '../APIs/ProductsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../slices/CartSlice';
import { selectUser } from '../slices/UserSlice';

function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = sessionStorage.getItem("user");
  console.log(user);

  const styleImage = {
    height: "25rem",
    width: "80%",
  };

  const handleAddToCart = () => {
    dispatch(addItem({ productId, quantity: 1 }));
    navigate('/cart');
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchProductDeatils(productId);
        setProduct(data.Product);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container mt-4 mb-4"'>
      <div className="row container mt-4 mb-5 border border-dark">
        <div className="col-12 col-md-6 ms-4 ms-md-0">
          <img src={product.image} alt={product.title} style={styleImage} className='rounded-5 ms-md-5 mx-auto'/>
        </div>
        <div className="col-12 col-md-6 mt-md-4 ms-5 ms-md-0">
          <h3>Title: {product.title}</h3>
          <h5 className='my-3'>Cost: ₹{product.price}</h5>
          <p> {product.description}</p>
          <p>Quantity: {product.quantity}</p> 
          {user ?(

            <button className='btn btn-dark mt-1' onClick={handleAddToCart}>Add to Cart</button>             
          ):(
            <Link to="/login" className=' text-decoration-none fw-bold btn btn-dark'>Register or login first!</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
