import React from "react";
import "./ProductCard.css";

export default function ProductCard({
  name = null,
  odenoba = null,
  fasi = 0,
  desc = "no desc",
  bg = "white",
}) {
  return (
    <div>
      <div className="productCard" style={{ background: bg }}>
        <h3>სახელი: {name} </h3>
        <h3>რაოდენობა: {odenoba}</h3>
        <h5>ფასი :{fasi} $</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
}
