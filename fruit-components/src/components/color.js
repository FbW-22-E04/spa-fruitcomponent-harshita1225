import React, { useEffect, useState } from "react";

import "./color.css";
const colors = ["grey", "blue", "green", "black", "purple"];
const Color = () => {
  const [orange, setOrange] = useState("red");
  const [mango, setMango] = useState("red");
  const [banana, setBanana] = useState("red");
  const [cherry, setCherry] = useState("red");
  const [apple, setApple] = useState("red");
  const [hide, setHide] = useState(false);

  let handleOrange = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setOrange(colors[newColor]);
  };

  let handleApple = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setApple(colors[newColor]);
  };
  let handleBanana = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setBanana(colors[newColor]);
  };

  let handleCherry = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setCherry(colors[newColor]);
  };

  let handleMango = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setMango(colors[newColor]);
  };

  const handleDelete = (event) => {
    //console.log(event.currentTarget.closest("div"));
    event.currentTarget.closest("div").classList.add("close");
  };

  return (
    <div className="container">
      <h1>Components</h1>
      <div className="card">
        <div className="fruit" id="apple">
          <h5 style={{ color: orange }}>Orange</h5>
          <button
            className="change"
            onClick={() => {
              handleOrange();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: apple }}>Apple</h5>
          <button
            className="change"
            onClick={() => {
              handleApple();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: mango }}>Mango</h5>
          <button
            className="change"
            onClick={() => {
              handleMango();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: banana }}>Banana</h5>
          <button
            className="change"
            onClick={() => {
              handleBanana();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: cherry }}>Cherry</h5>
          <button
            className="change"
            onClick={() => {
              handleCherry();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Color;
