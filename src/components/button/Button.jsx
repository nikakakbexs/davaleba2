import React from "react";

export default function Button({ bg, sigr, siga, text }) {
  return (
    <div>
      <button
        style={{
          background: bg,
          width: siga,
          height: sigr,
          borderRadius: "10px",
        }}
      >
        {text}
      </button>
    </div>
  );
}
