import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  let [cartItems, setItems] = useState<number>(0);

  useEffect(() => setItems(0), []);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbg justify-content-center">
        <button
          className="navbar-toggler position-fixed start-0 ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav" style={{ fontFamily: "Oswald, sans-serif" }}>
          <Link to={"/"} className="navbar-brand m-0 me-lg-3">
            Asher's Essentials
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Styles
              </a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <a href="#">
                <ShoppingCart
                  size={35}
                  color="#ffffff"
                  className="nav-link ms-2 m-lg-0"
                ></ShoppingCart>
              </a>
              <div className="m-0 border rounded itemCircle">{cartItems}</div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
