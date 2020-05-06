import React from "react";
import "./Button.css";

//since the button won't have a state, it will be a stateless functional component

const Button = ({ buttonDisplayName, clickHandler, changeBackgroundColor }) => (
  <button
    id="new-quote"
    onClick={() => {
      clickHandler();
      changeBackgroundColor();
    }}
  >
    {buttonDisplayName}
  </button>
);

export default Button;
