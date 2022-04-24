import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const useFormRegister = (validate) => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            navigate("/");
        }
    }, [errors, isSubmit, navigate]);

    return { handleChange, values, errors, handleSubmit };
};

export default useFormRegister;
