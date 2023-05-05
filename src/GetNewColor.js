import React from "react";

const GetNewColor = () => {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;
  document.getElementById("hex").innerHTML = color;

  return (
    <div className="content">
      <span id="hex">#9980FA</span>

      <button>Get Random Color</button>
    </div>
  );
};

export default GetNewColor;
