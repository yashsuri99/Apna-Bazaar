import React from "react";
import "./CartLabel.scss";
// import icon from "../../../static/images/lowest-price.png";

const CartLabel = () => {
    return (
        <div className="cart__label">
            <img
                src="/static/images/lowest-price.png"
                className="cart__label__image"
                alt="Not Load"
            />
            <p className="cart__label__text">
                You won't find it cheaper anywhere
            </p>
        </div>
    );
};
export default CartLabel;
