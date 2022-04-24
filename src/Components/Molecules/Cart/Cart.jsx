import React from "react";
import "./Cart.scss";
import CartHeader from "../../Organism/CartHeader/CartHeader";
import CartWrapper from "../../Organism/CartWrapper/CartWrapper";
import CartFooter from "../../Organism/CartFooter/CartFooter";

const Cart = ({cartItems,addCartItem,removeCartItem,total,totalItems ,setIsPopUpOpen}) => {
    return (
        <div className="mainCart">
            <CartHeader totalItems={totalItems} setIsPopUpOpen={setIsPopUpOpen}/>
            <div className="scroll-a cartProduct">
                <CartWrapper cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem}  />

                <CartFooter total={total}/>
            </div>
        </div>
    );
};
export default Cart;
