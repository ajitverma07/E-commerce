// Import Link from react-router-dom and necessary CSS file
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './header.css';

// Import images
import logo from '../imgs/logo5.png';
import carticon from '../imgs/bag-fill.svg';
import usericon from '../imgs/person-badge-fill.svg';
import people from "../imgs/people.svg"
import registericon from "../imgs/registration-1.svg"


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearUser } from '../slices/UserSlice';
import { clearToken, selectToken } from '../slices/AuthSlice';
import { searchProducts } from '../APIs/ProductsAPI';

// Functional component for the Header
function Header() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await searchProducts(searchQuery);
      setSearchResults(response.searchResults);
      setShowModal(true);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (user) {
      setAdmin(user.isAdmin);
    }
  }, [user]);
  return (
    <>
      {/* Header section */}
      <div id="header">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid me-5 ms-5">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width="90vw" height="40vh" />
            </Link>

            {/* Toggler button */}
            <button
              className="navbar-toggler float-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Slider in header navbar */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Slider container */}
              <div className="container-fluid m-auto rounded-pill bg-black text-center justify-content-center" style={{ color: 'white', width: '45vw' }}>
                {/* Slider content */}
                <div id="carouselExampleSlidesOnly" className="carousel slide mt-2" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h6 className="d-block w-100">
                        <b>SHOP NOW & GET EXCLUSIVE REWARDS</b>
                      </h6>
                    </div>
                    <div className="carousel-item">
                      <h6 className="d-block w-100">
                        <b>UPI IS AVAILABLE!</b>
                      </h6>
                    </div>
                    <div className="carousel-item">
                      <h6 className="d-block w-100">
                        <b>BUY ONE GET ONE ALSO AVAILABLE</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search bar */}
              <form className="d-flex navbar-nav form-control-sm" role="search">
              
              <div className="input-group">
                    <input
                      type="text"
                      className="form-control ms-2 border-dark rounded-start-pill"
                      placeholder="Search"
                      style={{ width: "150"  }}
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button
                      className="btn btn-outline-dark rounded-end-pill"
                      type="button"
                      onClick={handleSearch}
                    >
                      {loading ? (
                        <i className="fas fa-spinner fa-spin"></i>
                      ) : (
                        <i className="fas fa-search"></i>
                      )}
                    </button>
                  </div>

                   {/* Modal */}
              <div
                className={`modal fade ${showModal ? "show" : ""}`}
                id="searchModal"
                tabIndex="-1"
                data-bs-backdrop="static"
                aria-labelledby="searchModalLabel"
                aria-hidden={!showModal}
                style={{ display: showModal ? "block" : "none" }}
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="searchModalLabel">
                        Search Results
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {searchResults.length > 0 ? (
                        <ul className="list-group">
                          {searchResults.map((result) => (
                            <li
                              key={result._id}
                              className="list-group-item"
                              onClick={handleCloseModal}
                            >
                              <Link to={`/productDetails/${result._id}`}>
                                {result.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No results found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
                {/* User and cart icons */}
                {!token && (
                  <>
                  <button className="btn btn-outline-white ms-3 ">
                  <Link to="/login">
                    <img src={usericon} alt="" style={{ width: '30px' }} />
                  </Link>
                </button>
                <button className="btn btn-outline-white">
                  <Link to="/register">
                    <img src={registericon} alt="" style={{ width: '45px' }} />
                  </Link>
                </button></>
                )}
                {token && (
                  <><button className="btn btn-outline-white ms-3 ">
                  <Link  to="/" onClick={() => {
                    dispatch(clearToken());
                    dispatch(clearUser());
                    navigate("/")
                  }} className="linkcolor">logout</Link>
                </button>
                <button className="btn btn-outline-white">
                  <Link to="/profile" className="linkcolor">
                    {/* <img src={carticon} alt="" style={{ width: '30px' }} /> */}
                    Profile
                  </Link>
                </button>
                
                {admin && (
                  <>
                  <button className="btn btn-outline-white">
                  <Link to="/adminpanel" className="linkcolor">
                    {/* <img src={carticon} alt="" style={{ width: '30px' }} /> */}
                    admin panel
                  </Link>
                </button>
                <button className="btn btn-outline-white">
                  <Link to="/addproduct" className="linkcolor">
                    {/* <img src={carticon} alt="" style={{ width: '30px' }} /> */}
                    add product
                  </Link>
                </button>
                  </>
                )}
                <button className="btn btn-outline-white">
                  <Link to="/cart">
                    <img src={carticon} alt="" style={{ width: '30px' }} />
                  </Link>
                </button>
                  </>

                )}
                
              </form> 
            </div>
          </div>
        </nav>

        {/* Navtabs start from here */}
        <ul className="nav justify-content-center bg-white">
          {/* Home and general product link */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allproducts">
              All Products
            </Link>
          </li>

          {/* Woman section with dropdown */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdownWoman"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Woman
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/allproducts">
                  All products
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Face
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Eyes
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Lips
                </Link>
              </li>
            </ul>
          </li>

          {/* Man section with dropdown */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdownMan"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Man
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMan">
              <li>
                <Link className="dropdown-item" to="/allproducts">
                  All products
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Face
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Beard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Hair
                </Link>
              </li>
            </ul>
          </li>

          {/* Kids, Contacts us, and FAQs */}
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Kids
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={()=>{alert("Contact us not availabe right now!")}}>
              Contacts us
            </Link>
          </li>
         {user && (
           <><li className="nav-item">
           <Link to="/myorders" className="nav-link">
             My Orders
           </Link>
         </li>
          </>
         )}
        </ul>
      </div>
    </>
  );
}

export default Header;
