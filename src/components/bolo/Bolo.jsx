import React from "react";

export default function Bolo({ linki }) {
  return (
    <div>
      <div className="bolo">
        <button style={{ width: "", height: "50px", background: "gray" }}>
          <a href={linki}>იხილეთ</a>
        </button>
      </div>
    </div>
  );
}
