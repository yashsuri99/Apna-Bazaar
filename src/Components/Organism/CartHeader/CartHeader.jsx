import React from "react";
import "./CartHeader.scss";
import Button from "../../Atoms/Button3/Button";
// import { AiFillCloseCircle } from "react-icons/ai";


const CartHeader = ({totalItems, setIsPopUpOpen }) => {
    return (
        <header className="cart__header">
            <h2 className="cart__header__text">My Cart ({totalItems} items)</h2>
            <Button className="button cart__header__button " method={()=>setIsPopUpOpen()}>
                <p>✖</p>
               
            </Button>
        </header>
    );
};
export default CartHeader;
