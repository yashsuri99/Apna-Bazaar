import "./Image.scss";
const Image = ({ source, alt = "", className = "", onClick }) => {
    return (
        <img src={source} alt={alt} className={`${className} image-wrapper`} onClick={onClick} />
    );
};
export default Image;
