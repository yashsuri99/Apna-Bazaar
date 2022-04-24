const validateFormLogin = (values) => {
    let errors = {};

    // Email
    const emailRegex = RegExp(/^[a-zA-Z0-9_.]+@[a-zA-Z.]+$/);

    if (!values.email) {
        errors.email = "Email required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    // Password
    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

export default validateFormLogin;
