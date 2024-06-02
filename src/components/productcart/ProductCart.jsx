import React from "react";
import "./ProductCart.css";
import { FaStore } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../context/cartSlice";
import { incrementCart } from "../../context/cartSlice";
import { decrementCart } from "../../context/cartSlice";
import { deleteAllCart } from "../../context/cartSlice";
function ProductCart() {
  let dispatch = useDispatch();
  let card = useSelector((state) => state.cart.value);
  let total = card?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let dataImg = card?.map((el) => (
    <div key={el.id} className="e8">
      <img src={el.images[0]} alt="" />
    </div>
  ));
  let data = card?.map((item) => (
    <div key={item.id} className="e4">
      <img src={item.images[0]} alt="" />
      <p>{item.description}</p>
      <div className="e5">
        <button
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCart(item))}
        >
          -
        </button>
        <h4>{item.quantity}</h4>
        <button onClick={() => dispatch(incrementCart(item))}>+</button>
      </div>
      <div className="e6">
        <h3>{item.price * item.quantity} USD</h3>
        <h4>Доставка 41 USD </h4>
      </div>
      <button
        className="cardbtn"
        onClick={() => dispatch(removeFromCart(item))}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  ));
  return (
    <div className="container">
      <div className="e">
        <div>
          <div className="e1">
            <h1>Корзина</h1>
            <div className="e2">
              <button style={{ paddingRight: "60px" }}>
                <FaStore />
                <p>По магазинам</p>
              </button>
              <button style={{ border: "2px solid #000" }} className="e3">
                <FaList style={{ color: "#000" }} />
                <p style={{ color: "#000" }}>Списком</p>
              </button>
              <button
                onClick={() => dispatch(deleteAllCart())}
                style={{ border: "none" }}
              >
                <RiDeleteBin6Line style={{ color: "#000", fontSize: "25px" }} />
              </button>
            </div>
          </div>
          {data}
        </div>
        <div className="e7">
          <h1>Оформите заказ</h1>
          {dataImg}
          <div className="e9">
            <p>{card?.length} товара</p>
            <p>{total} USD</p>
          </div>
          <div className="e9">
            <p>Доставка</p>
            <p>41 USD</p>
          </div>
          <div id="e10">
            <h3>К оформлению</h3>
            <h3>{total + 41} USD</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
