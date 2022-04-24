import "./Button.scss";
const Button = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`button-wrapper1
            ${className}`}
            onClick={onclick}
            {...props}>
            {children}
        </button>
    );
};
export default Button;
