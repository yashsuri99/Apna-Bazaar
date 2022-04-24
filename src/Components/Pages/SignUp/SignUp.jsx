import React from "react";
import "./SignUp.scss";
import RegisterForm from "../../Organism/Form/RegisterForm";
import WrapperText from "../../Molecules/Wrapper/Wrapper";
import Footer from "../../Organism/Footer/Footer";
import { Helmet } from "react-helmet";

const Signin = () => {
    const inputLabel = [
        {
            type: "text",
            placeholder: "First Name",
            inputId: "firstName",
        },

        {
            type: "text",
            placeholder: "Last Name",
            inputId: "lastName",
        },

        {
            type: "email",
            placeholder: "Email",
            inputId: "email",
            hint: "example@sapient.com",
        },

        {
            type: "password",
            placeholder: "Password",
            inputId: "password",
            hint: "example:pass123",
        },

        {
            type: "password",
            placeholder: "Confirm Password",
            inputId: "confirmPassword",
        },
    ];

    return (
        <>
            {/* <Navbar isAuth={false} /> */}
            <Helmet>
                <title>Sabka-Bazaar | SignIn</title>
            </Helmet>
            <main className="register-container">
                <WrapperText
                    className={"register-container-text"}
                    title={"SignUp"}
                    description={"We do not share your personal details"}
                />

                <RegisterForm
                    inputLabel={inputLabel}
                    button={"SignUp"}
                    className={"register-container-form"}
                />
            </main>

            <Footer />
        </>
    );
};

export default Signin;
