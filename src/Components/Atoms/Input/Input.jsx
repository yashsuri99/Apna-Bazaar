import React from "react";

import "./Input.scss";

const Input = ({ input, handleChange, values, errors }) => {
    const { type, placeholder, inputId, hint } = input;

    return (
        <>
            <input
                type={type}
                className="input"
                id={inputId}
                placeholder={placeholder}
                hint={hint}
                name={inputId}
                value={values}
                onChange={handleChange}
                noValidate
            />

            {errors ? (
                <p className="form-error">{errors}</p>
            ) : (
                <label htmlFor={inputId} className="label">
                    <span className="required">{placeholder}:</span>
                    <span className="hint">{hint}</span>
                </label>
            )}
        </>
    );
};

export default Input;
