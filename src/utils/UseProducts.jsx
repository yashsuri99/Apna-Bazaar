import React, { useState, useEffect } from "react";
import FetchProducts from "../services/FetchProducts";
import { useNavigate } from "react-router-dom";

const UseProducts = () => {
    const [currCategory, setCurrCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    
    const navigate = useNavigate();


    const handleCurrCategoryHome = (category) => {
        if(category===""||category===currCategory){
            setCurrCategory("");
            setFilteredProducts(products)
        }
        else{
            
        setCurrCategory(category);
            setFilteredProducts(
                products.filter((product) => product.category === category)
            ); 
            
        }
        navigate("/products")
    };
    const handleCurrCategoryPlp = (category) => {
        if(category===""||category===currCategory){
            setCurrCategory("");
            setFilteredProducts(products)
        }
        else{
            
        setCurrCategory(category);
            setFilteredProducts(
                products.filter((product) => product.category === category)
            ); 
            
        }
       
    };
    const getProducts = async () => {
        try {
            setFilteredProducts(await FetchProducts());
            setProducts(await FetchProducts());
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    // console.log("filtered products are",filteredProducts)
    return {
        currCategory,
        filteredProducts,
        handleCurrCategoryHome,
        handleCurrCategoryPlp,

    };
};
export default UseProducts;
