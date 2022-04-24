import React from "react";
import "./Form.scss";
import Button1 from "../../Atoms/Button1/Button1";
import Input from "../../Atoms/Input/Input";
import useFormLogin from "./useFormLogin";
import validate from "./validateFormLogin";

const LoginForm = ({ className = "", inputLabel, button }) => {
    const { handleChange, values, handleSubmit, errors } =
        useFormLogin(validate);

    return (
        <form className={`${className} form`} onSubmit={handleSubmit}>
            {inputLabel.map((input) => (
                <Input
                    key={input.inputId}
                    input={input}
                    handleChange={handleChange}
                    hint={inputLabel.hint}
                    values={values[input.inputId]}
                    errors={errors[input.inputId]}
                />
            ))}
            <Button1 className={"form-login-button"}>{button}</Button1>
        </form>
    );
};

export default LoginForm;
