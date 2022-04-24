import React, { useState } from "react";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp/SignUp";
import "./styles/utils.scss";
import PLP from "./Components/Pages/PLP/PLP";
import "./styles/app.scss";
import Cart from "./Components/Molecules/Cart/Cart";
import UseCartItems from "./utils/UseCartItems";
import Navbar from "./Components/Organism/Navbar/Navbar";
import UseProducts from "./utils/UseProducts";
// import RequireAuth from "./RequireAuth";

const App = () => {
    const { cartItems, addCartItem, removeCartItem, total, totalItems } =
        UseCartItems();
    const {filteredProducts,handleCurrCategoryHome,handleCurrCategoryPlp, currCategory} = UseProducts();

    return (
        <>
            <Navbar
                totalItems={totalItems}
                cartItems={cartItems}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
                total={total}
                handleCurrCategory={handleCurrCategoryHome}
            />
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/home" element={<Home handleCurrCategory={handleCurrCategoryHome}/>}></Route>
                {/* <Route path="/cart" element={<Cart />}></Route> */}

                <Route
                    path="/products"
                    element={
                        <PLP
                            addCartItem={addCartItem}
                            cartItems={cartItems}
                            removeCartItem={removeCartItem}
                            filteredProducts={filteredProducts}
                            handleCurrCategory={handleCurrCategoryPlp}
                            currCategory={currCategory}
                        />
                    }></Route>
            </Routes>
        </>
    );
};

export default App;
