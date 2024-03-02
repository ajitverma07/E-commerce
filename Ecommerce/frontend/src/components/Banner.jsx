import React from "react";

function Banner() {
  const mainImgStyle = {
    height: "33em",
    width: "100%",
    borderRadius: "40px",
    objectFit: "cover",
    filter: "blur(1px)",
  };

  const bannerTextStyle = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const sideImgStyle = {
    borderRadius: "40px",
    height: "15em",
    filter: "blur(0.85px)"
  }
  return (
    <>
      {/* Container for the banner */}
      <div className="container-fluid mt-2 mb-5">
        <div className="row">
          {/* Left column for large screens */}
          <div className="col-lg-3 d-none d-lg-block mt-3">
            {/* First side image */}
            <div className="row m-1 banner-side-img">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
                alt="Bookshelf having lots of books"
                style={sideImgStyle}
              />
            </div>
            {/* Second side image */}
            <div className="row m-1 mt-3 banner-side-img">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                alt="Collection of books"
                style={sideImgStyle}
              />
            </div>
          </div>

          {/* Middle column for medium and small screens */}
          <div className="col-lg-6 col-md-8 col-sm-12 mt-2">
            <div className="banner-book">
              {/* Main banner image */}
              <img
                src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJvb2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                alt="Book's World Banner White Colored"
                style={mainImgStyle}
              />

              {/* Banner text */}
              <div style={bannerTextStyle}>
                <h2 className="fs-1">Books</h2>
                <p>Beyond Words, Beyond Worlds</p>
              </div>
            </div>
          </div>

          {/* Right column for medium screens */}
          <div className="col-lg-3 col-md-4 d-none d-md-block mt-3">
            {/* Third side image */}
            <div className="row m-1 banner-side-img">
              <img
                src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                alt="Open book with a cup of tea"
                style={sideImgStyle}
              />
            </div>
            {/* Fourth side image */}
            <div className="row m-1 mt-3 banner-side-img">
              <img
                src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJvb2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                alt="10 Books on a table with pen and paper"
                style={sideImgStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
