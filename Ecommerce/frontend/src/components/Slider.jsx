import { Link } from 'react-router-dom';
import React from 'react';
import "./slider.css"

function Slider() {
    return (
        <div className="container-fluid featured-product text-center p-5">
            <span id="featured-product">FEATURED PRODUCTS</span><br />

            <div id="carouselExampleDark" className="carousel carousel-dark slide container" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/nivea-lip-bustter-raspberry-rose-melts-your-dry-lips-kharkiv-ukraine-october-nivea-lip-butter-raspberry-rose-melts-your-165322582.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">lip balm</h2>
                                        <h4>
                                            $20
                                        </h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>Add to
                                            cart</Link></button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/london-uk-april-revlon-professionals-style-masters-shampoo-white-baground-london-uk-april-revlon-professionals-style-115594399.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">shampoo</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ipsam.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>Add to
                                            cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">maskara</h2>
                                        <h4>
                                            $20
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Delectus, esse!
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>Add to
                                            cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/london-uk-march-mac-cosmetics-skin-powder-foundation-container-white-background-was-founded-toronto-ontario-88715531.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">skin powder</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ea, mollitia?
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>Add to
                                            cart</Link></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row" id="iron">
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">eye liner</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/nottingham-uk-may-p-g-herbal-essences-bio-renew-shampoo-conditioner-white-background-essence-illustrative-editorial-117901465.jpg?w=768"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">conditioner</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/bottle-rose-essential-oil-flower-white-bottle-rose-essential-oil-flower-isolated-white-151361733.jpg?w=576"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">serum</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Deleniti, facilis.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/fashionable-lipstick-close-up-white-background-fashionable-lipstick-close-up-white-background-197398348.jpg?w=2048"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">lipsticks</h2>
                                        <h4>$30</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Beatae, velit?
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="row gx-0" id="iron">
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/black-mascara-wand-applicator-stroke-against-white-background-50531852.jpg?w=576"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">maskara</h2>
                                        <h4>
                                            $20
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, modi.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/blue-nail-polish-21517.jpg?w=992" alt=""
                                        className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">nail pants</h2>
                                        <h4>
                                            $20
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Delectus, esse!
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/z/perfume-bottle-close-up-isolated-white-background-109202524.jpg?w=576"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">perfumes</h2>
                                        <h4>$20</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ea, mollitia?
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg"
                                        alt="" className="card-img-top" style={{ width: '18rem', height: '18rem' }} />
                                    <div className="card-body">
                                        <h2 className="card-title">kajal</h2>
                                        <h4>$30</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Minus, aliquid.
                                        </p>
                                        <button className="btn btn-dark"><Link to="/allproducts"
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            <i className="fa-solid fa-bag-shopping me-2"
                                                style={{ color: '#ffffff' }}></i>
                                            Add to cart</Link></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;
