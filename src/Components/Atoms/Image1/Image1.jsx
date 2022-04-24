import React from "react";

import "./Image1.scss";

const Image1 = ({ source, alt = "", className = "", onClick }) => {
    return <img src={source} className={`${className} image`} alt={alt} onClick={onClick} />;
};

export default Image1;
