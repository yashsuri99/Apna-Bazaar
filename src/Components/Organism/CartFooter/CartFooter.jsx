import React from "react";
import "./CartFooter.scss";
import Button from "../../Atoms/Button3/Button";

const CartFooter = ({total}) => {
    return (
        <footer className="cart__footer">
            <div className="cart__footer__label">
                <p className="cart__footer__label__text">
                    Promo code can be applied on payment page
                </p>
            </div>
            <Button className="button cart__footer__button">
                <span>Proceed To Checkout </span>
                <span>{total} ❯ </span>
            </Button>
        </footer>
    );
};
export default CartFooter;
