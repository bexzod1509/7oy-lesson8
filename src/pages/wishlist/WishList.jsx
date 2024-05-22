import React from "react";
import useStore from "../../context/store";
import Product from "../../components/products/Product";
import Empty from "../../components/empty/Empty";
function WishList() {
  let wishList = useStore((state) => state.value);
  return <div>{wishList.length ? <Product data={wishList} /> : <Empty />}</div>;
}

export default WishList;
