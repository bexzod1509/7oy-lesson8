import React from "react";
import ProductCart from "../../components/productcart/ProductCart";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
function Cart() {
  let cart = useSelector((state) => state.cart.value);
  return <div>{cart?.length ? <ProductCart /> : <Empty />}</div>;
}

export default Cart;
