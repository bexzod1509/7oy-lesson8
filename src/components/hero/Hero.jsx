import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "../../api/index";
import "./Hero.css";
ChartJS.register(ArcElement, Tooltip, Legend);

function Hero() {
  const [Data, setData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(3);
  useEffect(() => {
    axios
      .get(`/products?limit=${count}&skip=${count * offset}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [offset, count]);
  const data = {
    labels: Data?.map((pro) => pro.title),
    datasets: [
      {
        label: "Остаток",
        data: Data?.map((pro) => pro.stock),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="hero">
        <div className="heroItem">
          <Pie data={data} />
        </div>
      </div>
      <div className="container">
        <div className="heroselect">
          <select onChange={(e) => setCount(+e.target.value)} name="" id="">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="herobtn">
          <button onClick={() => setOffset((p) => p + 1)}>Next</button>
          <button
            disabled={offset <= 0}
            onClick={() => setOffset((p) => p - 1)}
          >
            Prev
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
