import React from "react";
import Logo from "../../Atoms/Logo/Logo";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { logout } from "../../../services/Login";
import { useLocation,useNavigate } from "react-router-dom";
import useFormLogin from "../Form/useFormLogin";
// import CartEmpty from "../../Pages/CartEmpty/CartEmpty";

const Navbar = ({cartItems,addCartItem,removeCartItem,total,totalItems,handleCurrCategory}) => {
    const location = useLocation();
    const navigate=useNavigate()
    const { getEmail, removeEmail } = useFormLogin();
    let searchQuery = location.pathname;
    let data = <div></div>;
    let logoutBtn = <div></div>;
    if (getEmail() === null) {
        data = <div></div>;
    } else {
        if (searchQuery === "/") {
            data = <div></div>;
            logoutBtn = <div></div>;
            removeEmail();
        } else if (searchQuery === "/signup") {
            data = <div></div>;
            logoutBtn = <div></div>;
            removeEmail();
        } else {
            data = (
                <span className="header-welcome-user">
                    <span className="welcome-text">Hello&nbsp;</span>
                    {getEmail()}
                </span>
            );
            logoutBtn = (
                <Link
                    to="/"
                    className="header-container-navbarWrapper-login-link"a
                    onClick={logout}>
                    Logout
                </Link>
            );
        }
    }
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Link to="/home">
                        <Logo />
                    </Link>

                    <nav className="header-container-navbar">
                        <Link
                            to="/home"
                            className="header-container-navbar-link">
                            Home
                        </Link>

                        <Link
                            to="/products"
                            onClick={(event)=>{event.preventDefault(); handleCurrCategory(""); navigate("/products")}}
                            className="header-container-navbar-link">
                            Products
                        </Link>
                    </nav>
                    <div className="header-container-navbarWrapper">
                        {getEmail() !== null ? (
                            <nav className="header-container-navbarWrapper-login">
                                <span className="header-container-navbarWrapper-login-link">
                                    {data}
                                </span>
                                {logoutBtn}
                            </nav>
                        ) : (
                            <nav className="header-container-navbarWrapper-login">
                                <Link
                                    to="/"
                                    className="header-container-navbarWrapper-login-link">
                                    SignIn
                                </Link>

                                <Link
                                    to="/signup"
                                    className="header-container-navbarWrapper-login-link">
                                    Register
                                </Link>
                            </nav>
                        )}
                        {/* <Link
                            to="/cart"
                            className="header-container-navbarWrapper-cart">
                            
                        </Link> */}
                        <Cart totalItems={totalItems} cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem} total= {total}/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
