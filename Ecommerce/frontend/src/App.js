import { BrowserRouter, Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Homecover from "./components/Homecover";
import Login from "./components/login";
import Register from "./components/register";
import Adminpanel from "./components/adminpanel";
import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserEditForm from "./components/UserEditForm";
import Cart from "./components/Cart";
import AddProduct from "./components/Addproducts";
import MyOrders from "./components/myorder";
import ProductList from "./components/listproduct";
import ProductEditForm from "./components/editProduct";
import ProductDetails from "./components/productdetails";
import Checkout from "./components/checkout";
// import { useSelector } from "react-redux";
import { selectUser } from "./slices/UserSlice";
import { useEffect, useState } from "react";





function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [isAdmin,setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAdmin(user.isAdmin);
    }
  }, [user]);
  return (

    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<><Homecover /><Slider /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allproducts" element={<ProductList />} />
        <Route path='/productDetails/:productId' element={<ProductDetails />} />


        {user && <>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart /> } />
           
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/checkout" element={<Checkout />} />
        </>}

        {isAdmin && <>
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/editproduct/:id" element={<ProductEditForm />} />
        <Route path="/editUser/:userId" element={<UserEditForm />} />
        <Route path="/addproduct" element={<AddProduct />} />
        </>}


      </Routes>
      {/* <Homecover/>
      <Slider/> */}
      <Footer />

    </BrowserRouter>




  );
}

export default App;
