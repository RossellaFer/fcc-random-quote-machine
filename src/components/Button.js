import React from "react";
import "./Button.css";

//since the button won't have a state, it will be a stateless functional component

const Button = ({ buttonDisplayName, clickHandler }) => (
  <button id="new-quote" onClick={clickHandler}>
    {buttonDisplayName}
  </button>
);

export default Button;
