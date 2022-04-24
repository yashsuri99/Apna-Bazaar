import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../../services/Login";

const useFormLogin = (validate) => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const getEmail = () => {
        return localStorage.getItem("EMAIL");
    };

    const removeEmail = () => {
        localStorage.removeItem("EMAIL");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
        login(values);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            navigate("/home");
        }
    }, [errors, isSubmit, navigate]);

    return {
        handleChange,
        values,
        errors,
        handleSubmit,
        getEmail,
        removeEmail,
    };
};

export default useFormLogin;
