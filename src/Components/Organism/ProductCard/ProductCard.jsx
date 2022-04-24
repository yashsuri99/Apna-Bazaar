import Image from "../../Atoms/Image/Image";
import Button from "../../Atoms/Button/Button";
import "./ProductCard.scss";
import "./ProductCard.scss";
import Button3 from "../../Atoms/Button3/Button";
import UseMediaQuery from "../../../utils/UseMediaQuery";
const ProductCard = ({ product, addCartItem, cartItems, removeCartItem }) => {
    const matchingItem = cartItems.find((item) => item.id === product.id);
    const browserWidth = UseMediaQuery("(min-width: 1022px)");
    return (
       
        <section className="card-container">
            <h2 className="card-container__title">{product.name}</h2>
            <figure className="card-container__image">
                <Image
                    source={product.imageURL}
                    alt={product.name}
                    className={"product-image"}
                />
            </figure>
            <p className="card-container__text" title={product.description}>
                {product.description}
            </p>
            <section className="card-container__section">
                {browserWidth ? (
                    matchingItem === undefined ? (
                        <>
                            <p className="card-container__section__price">
                                MRP Rs.{product.price}
                            </p>
                            <Button
                                onClick={() => addCartItem()}
                                className={
                                    "card-container__section__buy-button"
                                }>
                                Buy Now
                            </Button>
                        </>
                    ) : (
                        <>
                            <p className="card-container__section__new-price">
                                MRP Rs.{product.price}
                            </p>
                            <div className="buttonCounter  float-r">
                                <Button3
                                    className="button right cart_sectioncount_button"
                                    method={() => removeCartItem(product)}>
                                    <b>-</b>
                                </Button3>
                                <p className="cart_sectioncount_text">
                                    {matchingItem.qty}
                                </p>
                                <Button3
                                    className="button left cart_sectioncount_button"
                                    method={() => addCartItem(product)}>
                                    <b>+</b>
                                </Button3>
                            </div>
                        </>
                    )
                ) : (
                    matchingItem===undefined ? ( <Button
                        onClick={() => addCartItem()}
                        className={"card-container__section__buy-button"}>
                        Buy Now @ Rs.{product.price}
                    </Button>) : (<>
                            <p className="card-container__section__new-price">
                                MRP Rs.{product.price}
                            </p>
                            <div className="buttonCounter  float-r">
                                <Button3
                                    className="button right cart_sectioncount_button"
                                    method={() => removeCartItem(product)}>
                                    <b>-</b>
                                </Button3>
                                <p className="cart_sectioncount_text">
                                    {matchingItem.qty}
                                </p>
                                <Button3
                                    className="button left cart_sectioncount_button"
                                    method={() => addCartItem(product)}>
                                    <b>+ </b>
                                </Button3>
                            </div>
                        </>)
                   
                )}
            </section>
        </section>
    );
};

export default ProductCard;
