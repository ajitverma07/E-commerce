// Import Link from react-router-dom and the external CSS file
import { Link } from 'react-router-dom'; 
import "./Footer.css"

// Functional component for the Footer
function Footer() {
    return (
        <>
            {/* Footer section */}
            <div id="footer" className="bg-dark pt-4 ">
                <div className="row">
                    {/* Column 1: Home and navigation links */}
                    <div className="col-sm-12 col-md-3 mb-3 text-center">
                        <h5 className="copyright">
                            {/* Home link */}
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        </h5>
                        {/* Navigation links */}
                        <ul className="nav flex-column unique">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover" onClick={()=>{alert("Contact us not availabe right now!")}}>Contact us</Link></li>
                            <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-body-secondary footerhover">Login</Link></li>
                            <li className="nav-item mb-2"><Link to="/cart" className="nav-link p-0 text-body-secondary footerhover">Cart</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Woman section */}
                    <div className="col-sm-12 col-md-3 mb-3 text-center">
                        <h5 className="copyright">Woman</h5>
                        <ul className="nav flex-column unique">
                            <li className="nav-item mb-2"><Link to="/allproducts" className="nav-link p-0 text-body-secondary footerhover">All products</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Face</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Eyes</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Lips</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Men section */}
                    <div className="col-sm-12 col-md-3 mb-3 text-center">
                        <h5 className="copyright">Men</h5>
                        <ul className="nav flex-column unique">
                            <li className="nav-item mb-2"><Link to="/allproducts" className="nav-link p-0 text-body-secondary footerhover">All products</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Face</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Beard</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Hair</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Kids section */}
                    <div className="col-sm-12 col-md-3 mb-3 text-center">
                        <h5 className="copyright">Kids</h5>
                        <ul className="nav flex-column unique">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary footerhover">Kids</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and year */}
                <div className="d-flex flex-column flex-sm-row py-4 border-top justify-content-center">
                    <p className="copyright"> &copy; <i><b>Diamond Cosmetics</b></i> 2023, Inc. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
