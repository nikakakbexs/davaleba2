import React from "react";

export default function Text({ zoma, feri, adgili }) {
  return (
    <div>
      <h1
        style={{
          fontSize: zoma,
          color: feri,
          display: "flex",
          justifyContent: adgili,
        }}
      >
        დავიბრუნე კომპიუტერი
      </h1>
    </div>
  );
}
