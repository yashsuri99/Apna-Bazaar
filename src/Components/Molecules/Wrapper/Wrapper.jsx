import React from "react";

import "./Wrapper.scss";

const WrapperText = ({ className = "", title, description }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>

            <p className="description">{description}</p>
        </div>
    );
};

export default WrapperText;
