import "./PLP.scss";
import ProductCard from "../../Organism/ProductCard/ProductCard";
import React from "react";
import Footer from "../../Organism/Footer/Footer";

import UseMediaQuery from "../../../utils/UseMediaQuery";
import Dropdown from "../../Molecules/Dropdown/Dropdown";
import SideNavbar from "../../Organism/SideNavbar/SideNavbar";

import UseCategories from "../../../utils/UseCategories";
import { Helmet } from "react-helmet";


const PLP = ({ addCartItem, cartItems, removeCartItem, filteredProducts,handleCurrCategory, currCategory }) => {
    
    
    const { filteredCategory } = UseCategories();
    
    const browserWidth = UseMediaQuery("(max-width: 767px)");
    

    return (
        <>
            <Helmet>
                <title>Sabka-Bazaar | Products</title>
            </Helmet>
            <main className="PLP container">
                {browserWidth ? (
                    <section className="dropdown">
                        <Dropdown
                            items={[
                                ...filteredCategory,
                                { id: "", name: "All Products" },
                            ]}
                            handleProduct={handleCurrCategory}
                            filteredProduct={filteredProducts}
                            currCategory={currCategory}
                        />
                    </section>
                ) : (
                    <section className="sidenavbar">
                        <SideNavbar
                            filteredCategory={filteredCategory}
                            handleProduct={handleCurrCategory}
                            currCategory={currCategory}
                        />
                    </section>
                )}
                <section className="product-container">
                    {filteredProducts.map((product) => (
                        <div
                            className="product-container_card"
                            key={product.id}>
                            <ProductCard
                                product={product}
                                addCartItem={() => addCartItem(product)}
                                cartItems={cartItems}
                                removeCartItem={removeCartItem}
                            />
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};
export default PLP;
