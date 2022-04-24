import React, {useState} from "react";
import "./Cart.scss";
import Image from "../../Atoms/Image1/Image1";
import CartEmpty from "../../Molecules/CartEmpty/CartEmpty";
import Cart1 from "../../Molecules/Cart/Cart";

const Cart = ({cartItems,addCartItem,removeCartItem,total,totalItems}) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const setIsPopUpOpenFalse = () =>{
        setIsPopUpOpen(false)
    }
    return (
        <>
        <div className="cart-wrapper">
            <Image
                source="/static/images/cart.svg"
                className={"cart-wrapper-image"}
                alt={"Cart Image"}
                onClick={(evt) => { evt.preventDefault(); setIsPopUpOpen(true) }}
            />
            {totalItems === 1 || totalItems === 0 ? (
                <p className="cart-wrapper-text">{totalItems} item</p>
            ) : (
                <p className="cart-wrapper-text">{totalItems} items</p>
            )}
        </div>
        {isPopUpOpen && (<div className='cartLayout'>
            {totalItems === 0 ? (
                <CartEmpty setIsPopUpOpen={setIsPopUpOpenFalse}/>
            ):(
                <Cart1  total= {total} totalItems={totalItems} cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem} setIsPopUpOpen={ setIsPopUpOpenFalse}/>
            )}
        </div>)
    }
    </>
    );
};

export default Cart;
