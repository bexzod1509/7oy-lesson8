import React from "react";
import "./Product.css";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import useStore from "../../context/store";
function Product({ data }) {
  let cart = useStore((state) => state.addToCart);
  let card = useStore((state) => state.arr);
  let wish = useStore((state) => state.toggleLike);
  let wishList = useStore((state) => state.value);
  let Products = data?.map((el) => (
    <div key={el.id} className="c2">
      <img src={el.images[0]} alt="" />
      <div className="c3">
        <button onClick={() => wish(el)}>
          {wishList?.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => cart(el)}>
          {card?.some((item) => item.id === el.id) ? (
            <BsCartCheckFill />
          ) : (
            <MdOutlineShoppingCart />
          )}
        </button>
      </div>
      <p>{el.title}</p>
      <div className="c4">
        <FaStar />
        <h4>{el.rating}</h4>
        <h4>{el.stock} купили</h4>
      </div>
      <h1>{el.price} USD</h1>
    </div>
  ));
  return (
    <div className="container">
      <div className="c">
        <p> Топ-товары</p>
        <p>Рекомендуем вам</p>
      </div>
      <div className="c1">{Products}</div>
    </div>
  );
}

export default Product;
