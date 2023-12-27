import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoImg from "/logo.png"

const Navbar = (props) => {
  const location = useLocation();
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid justify-content-start">
          <span className={`pointer material-symbols-outlined text-${props.mode == "light" ? "dark" : "light"} mx-3`}>
            menu
          </span>
          <a className="navbar-brand fs-4 font-lg" href="#">
            <img className="nav-logo-image me-1" src={LogoImg} alt="logo" />
            Keep
          </a>
          {!localStorage.getItem("token") ? (
            <form className="d-flex ms-auto">
              <Link className="btn btn-primary mx-1 font-lg" to={"/login"}>
                Login
              </Link>
              <Link className="btn btn-primary mx-1 font-lg" to={"/signup"}>
                Signup
              </Link>
            </form>
          ) : (
            <div className="d-flex ms-auto align-items-center">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-flex">
                  <span className={`pointer material-symbols-outlined text-${props.mode == "light" ? "dark" : "light"}`} onClick={props.toggleMode}>
                    dark_mode
                  </span>
                  <span className={`pointer material-symbols-outlined text-${props.mode == "light" ? "dark" : "light"} mx-2 mx-sm-4`}>
                    grid_view
                  </span>
                  <span className={`pointer material-symbols-outlined text-${props.mode == "light" ? "dark" : "light"} me-2 me-sm-4`}>
                    settings
                  </span>
                </li>
              </ul>

              <button onClick={handleLogout} className="btn btn-primary font-lg">
                Logout
              </button>
            </div>
          )}
      </div>
      </nav>
    </>
  );
};

export default Navbar;
