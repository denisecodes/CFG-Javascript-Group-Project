import React from "react";
import './Button.css';

const Button = (props) => {
  return <button type="button">{props.message}</button>;
};

export default Button;