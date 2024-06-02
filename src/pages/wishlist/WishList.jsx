import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/products/Product";
import Empty from "../../components/empty/Empty";
function WishList() {
  let wishList = useSelector((state) => state.heart.value);
  console.log(wishList);
  return <div>{wishList.length ? <Product data={wishList} /> : <Empty />}</div>;
}

export default WishList;
