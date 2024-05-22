import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import { FaLocationDot } from "react-icons/fa6";
function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="a">
            <NavLink to={"/"}>
              <img style={{ width: "130px" }} src={logo} alt="" />
            </NavLink>
            <div className="a1">
              <div className="a2">
                <GrCatalog />
                <p>Каталог</p>
              </div>
              <div className="a3">
                <input type="search" placeholder="Search..." />
                <button>Найти</button>
              </div>
              <div className="a2">
                <NavLink to={"/wishlist"}>
                  <FaRegHeart />
                  <p>Любимые</p>
                </NavLink>
              </div>
              <div className="a2">
                <NavLink to={"/cart"}>
                  <MdOutlineShoppingCart />
                  <p>Корзина</p>
                </NavLink>
              </div>
              <div className="a2">
                <FiUser />
                <p>Войти</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="a4">
          <div className="a5">
            <p>
              Горящие товары <FaFire style={{ color: "orange" }} />
            </p>
            <p>Одна цена</p>
          </div>
          <div className="a5">
            <p>
              <FaLocationDot />
              Yakkasaroy Tumani
            </p>
            <p>RU</p>
            <p>UZ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
