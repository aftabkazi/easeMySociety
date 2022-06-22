import React from "react";
import "./css/App.css";
const NavNext = () => {
  return (
    <div
      id="carouselExampleControls "
      className="carousel_slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="holi.jpg" className="fit " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="aprt.jpg" className="fit" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="3.jpg" className="fit" alt="..." />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default NavNext;
