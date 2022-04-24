import React from "react";
import "./Button2.scss";

export default function Button({
    children,
    className = "",
    onClick,
    ...props
}) {
    return (
        <button
            className={`${className} button-wrapper`}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
}
