import React from "react";
import "./Button.scss";

const Button = ({ className, method, children, disabled, type }) => {
  return (
    <button
      className={className}
      onClick={method}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export default Button;
