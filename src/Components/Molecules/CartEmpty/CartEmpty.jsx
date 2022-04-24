import React from "react";
import Button from "../../Atoms/Button3/Button";
import CartHeader from "../../Organism/CartHeader/CartHeader";
import "./CartEmpty.scss";
import { Link } from "react-router-dom";

const CartEmpty = ({setIsPopUpOpen}) => {
    
  return (
    <div className="empty-cart">
      <CartHeader setIsPopUpOpen={setIsPopUpOpen}/>
      <div className="empty-cart__section">
        <h2 className="empty-cart__section__heading">No items in your cart</h2>
        <p className="empty-cart__section__text">
          Your favorite items are just a click away
        </p>
        <Button className="button empty-cart__button shopButton" method={()=>setIsPopUpOpen()}>
          Start Shopping
        </Button>
      </div>
      <footer className="empty-cart__footer">
        
      </footer>
    </div>
  );
};
export default CartEmpty;
