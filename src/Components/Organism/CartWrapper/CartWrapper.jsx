import React from "react";
import "./CartWrapper.scss";
import CartSection from "../../Molecules/CartSection/CartSection";
import CartLabel from "../../Molecules/CartLabel/CartLabel";

const CartWrapper = ({cartItems,addCartItem,removeCartItem,total}) => {
    return (
        <div className="cart__wrapper">
            <CartSection cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem} total={total} />
            <CartLabel />
        </div>
    );
};
export default CartWrapper;
