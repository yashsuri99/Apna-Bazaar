import React from "react";
import Navbar from "../../Organism/Navbar/Navbar";
import "./Login.scss";
import LoginForm from "../../Organism/Form/LoginForm";
import Wrapper from "../../Molecules/Wrapper/Wrapper";
import Footer from "../../Organism/Footer/Footer";
import { Helmet } from "react-helmet";
const Login = () => {
    const inputLabel = [
        {
            type: "email",
            placeholder: "Email",
            inputId: "email",
        },
        {
            type: "password",
            placeholder: "Password",
            inputId: "password",
        },
    ];
    return (
        <>
            <Helmet>
                <title>Sabka-Bazaar | Login</title>
            </Helmet>
            <main className="login-container">
                <Wrapper
                    className={"login-container-text"}
                    title={"Login"}
                    description={
                        "Get Access to your Orders, Wishlist and Recommendations"
                    }
                />
                <LoginForm
                    inputLabel={inputLabel}
                    button={"Login"}
                    className={"login-container-form"}
                />
            </main>

            <Footer />
        </>
    );
};

export default Login;
