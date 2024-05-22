import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import axios from "../../api/index";
import Product from "../../components/products/Product";
function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Banner />
      <Product data={data} />
    </div>
  );
}

export default Home;
