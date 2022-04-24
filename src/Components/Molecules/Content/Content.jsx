import React from "react";
import "./Content.scss";
import Button from "../../Atoms/Button2/Button";

export default function Content({
    className,
    heading,
    text,
    button,
    id,
    handleProduct,
    handleCurrCategory
}) {
    return (
        <div className={`${className} content`}>
            <h2 className="content__header">{heading}</h2>
            <p className="content__text">{text}</p>
            <Button onClick={() => handleCurrCategory(id)}>Explore {button}</Button>
        </div>
    );
}
