import React from "react";
import "./css/App.css";
import { Route, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"


function NavBar() {
  const navigate = useNavigate()
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-info"
      variant="dark"
    >
      <div className="container-fluid">
        <img src="OIP.jpg" className="Logo" />
        <a className="navbar-brand" style={{fontWeight:'bold'}} href="/">
          {/* <strong>My-socity</strong> */}
          My-socity
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={{fontWeight:'bold'}} href="/dashboard">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" style={{fontWeight:'bold'}} href="/dashboard/events">
                Events
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{fontWeight:'bold'}}
              >
                Servies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/dashboard/electrician">
                    Electrician
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/dashboard/plumber">
                    Plumber
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="/dashboard/carpenter">
                    Carpenter
                  </a>
                </li> */}
                {/* <li>
                  <hr className="dropdown-divider" />
                </li> */}
                {/* <li>
                  <a className="dropdown-item" href="/dashboard/groscery">
                    Groscery
                  </a>
                </li> */}
                <li>
                  {/* <a className="dropdown-item" href="">
                    Home repaire
                  </a> */}
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Resister as flate owenr</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" style={{fontWeight:'bold'}} href="/dashboard/orders">
              Orders
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active "style={{fontWeight:'bold'}} href="/dashboard/feedback">
              Complaint and Feedback
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex"> */}
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>
      <div>
        <div className="mx-2">
          {/* <img   src="avatar.png" className="log_prof"/> */}
          <a href="/"><button onClick={navigate("/logout")} className="btn btn-danger" style={{fontWeight:'bold',borderRadius:'20px'}}>LogOut</button></a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
