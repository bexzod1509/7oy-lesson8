import React from "react";
import ProductCart from "../../components/productcart/ProductCart";
import Empty from "../../components/empty/Empty";
import useStore from "../../context/store";
function Cart() {
  let cart = useStore((state) => state.arr);
  return <div>{cart?.length ? <ProductCart /> : <Empty />}</div>;
}

export default Cart;
