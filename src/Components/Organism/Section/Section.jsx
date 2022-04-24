import React from "react";
import Image from "../../Atoms/Image/Image";
import Content from "../../Molecules/Content/Content";
import "./Section.scss";

export default function Section({
    url,
    heading,
    text,
    button,
    order,
    id,
    handleProduct,
    handleCurrCategory,
}) {
    return (
        <section className="categories">
            {order % 2 === 0 ? (
                <>
                    <Content
                        className="categories__content"
                        heading={heading}
                        text={text}
                        button={button}
                        id={id}
                        handleCurrCategory={handleCurrCategory}
                    />
                    <Image source={url} alt={`${heading} Image`} />
                </>
            ) : (
                <>
                    <Image source={url} alt={`${heading} Image`} />
                    <Content
                        className="categories__content"
                        heading={heading}
                        text={text}
                        button={button}
                        id={id}
                        handleCurrCategory={handleCurrCategory}
                    />
                </>
            )}
        </section>
    );
}
