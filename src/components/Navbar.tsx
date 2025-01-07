import { Link } from "react-router-dom";

function Navbar() {
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
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <Link to={"/"} className="navbar-brand m-0 me-md-3">
              Asher's Essentials
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
