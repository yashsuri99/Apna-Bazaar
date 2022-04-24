import React from "react";
import Carousel from "../../Organism/Carousel/Carousel";
import Footer from "../../Organism/Footer/Footer";
import UseCategories from "../../../utils/UseCategories";
// import UseProductsHistory from "../../../utils/UseProductsHistory";
import Section from "../../Organism/Section/Section";
import {Helmet} from "react-helmet";

export default function Home({handleCurrCategory}) {
    const { filteredCategory } = UseCategories();
    // const { handleProduct } = UseProductsHistory();


    let categories = null;
    categories = filteredCategory.map((category, index) => {
        return (
            <Section
                key={index}
                id={category.id}
                url={category.imageUrl}
                heading={category.name}
                text={category.description}
                button={category.key}
                order={category.order}
                
                handleCurrCategory={handleCurrCategory}
            />
        );
    });

    return (
        <>
            {/* <Navbar isAuth={true} /> */}
            <Carousel />
            <Helmet>
                <title>Sabka-Bazaar | Home</title>
            </Helmet>
            <main className="home-container">
                {filteredCategory.length ? (
                    categories
                ) : (
                    <div>Offers not found!!</div>
                )}
            </main>
            <Footer />
        </>
    );
}
