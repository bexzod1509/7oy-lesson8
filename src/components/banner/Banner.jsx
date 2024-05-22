import React from "react";
import "./Banner.css";
import { FaChevronRight } from "react-icons/fa6";
import banner from "../../assets/banner.webp";
function Banner() {
  return (
    <div className="container">
      <img className="b" src={banner} alt="" />
      <div className="b1">
        <h1>ОДНА ЦЕНА</h1>
        <p>При заказе от 3 до 10 товаров</p>
        <button>
          Купить <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Banner;
