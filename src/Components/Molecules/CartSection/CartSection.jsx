import React from "react";
import "./CartSection.scss";
import Button from "../../Atoms/Button3/Button";
import { useEffect, useState } from "react";
import UseCartItems from "../../../utils/UseCartItems";

const CartSection = ({ cartItems, addCartItem, removeCartItem, total }) => {

    return (
        <>
            {cartItems.map((item, index) => {
                return (
                    <div className="cartProducts" key={index}>
                        
                            <img
                                src={item.imageURL}
                                className="cart_section_image"
                                alt="not load"
                                height="60px"
                            />
                        
                        <div>
                            <p className="cart_section_text">
                                <b>{item.name}</b>
                            </p>
                            <div className="buttonCounter">
                                <Button
                                    className="button right cart_sectioncount_button"
                                    method={() => removeCartItem(item)}>
                                    <b>-</b>
                                </Button>
                                <p className="cart_sectioncount_text">
                                    {item.qty}
                                </p>
                                <Button
                                    className="button left cart_sectioncount_button"
                                    method={() => addCartItem(item)}>
                                    <b>+</b>
                                </Button>
                                <p className="cart_sectioncount_multiply">✕</p>
                                <p className="cart_sectioncount_text">
                                    Rs.{item.price}
                                </p>
                                <div className="cart_sectioncount_final">
                                <p>Rs.{item.price * item.qty}</p>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default CartSection;
