import React from "react";

function Footer() {
  return (
    <footer className="mt-5">

      {/* Top Offer Banner */}
      <div className="text-center py-4 shadow-sm" style={{ backgroundColor: "#F5F5DC" }}>
        <p className="mb-1 text-uppercase fw-semibold">Special Offer</p>
        <h2 className="fw-bold">UP TO 50% OFF</h2>
      </div>

      {/* Main Footer */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">

            {/* Brand / About */}
            <div className="col-md-5 mb-4">
              <h3 className="fw-bold">Marco Polo</h3>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h3 className="fw-bold mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
                <li><a href="#" className="text-white text-decoration-none">Reviews</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-5 mb-4">
              <h3 className="fw-bold mb-3">Newsletter</h3>
              <form className="d-flex">
                <input type="email" className="form-control me-2" placeholder="Enter your email" />
                <button
                  type="submit"
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#e9c810" }}
                >
                  SUBSCRIBE
                </button>
              </form>

              {/* Social Icons */}
              <div className="mt-4 d-flex gap-3">
                <a href="#" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-telegram"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
