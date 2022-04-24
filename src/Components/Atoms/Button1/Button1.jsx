import React from "react";

import "./Button1.scss";

const Button1 = ({ children, className = "", onClick, ...props }) => {
    return (
        <button className={`${className} button1`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button1;
