import react, { useState, useEffect } from "react";
const UseCartItems = () => {
    const [cartItems, setCartItems] = useState([]);
    // const [cartItemIds,setCartItemIds] = useState( [] );
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const addCartItem = (newItem) => {
        // console.log(newItem)
        const matchingItem = cartItems.find((item) => newItem.id === item.id);
        // console.log(matchingItem)
        if (!matchingItem) {
            const updatedItem = { ...newItem, qty: 1 };

            setCartItems([...cartItems, updatedItem]);
            // setCartItemIds([...cartItemIds,newItem.id]);

            console.log("newItem added");
        } else {
            let newCartItems = cartItems.map((item) => {
                if (item.id === newItem.id) {
                    const updatedItem = { ...item, qty: item.qty + 1 };
                    return updatedItem;
                }
                return item;
            });
            setCartItems(newCartItems);
            console.log("updated qty");
        }
        // console.log(cartItems)
        // console.log(cartItemIds)
        setTotal(total + newItem.price);
        setTotalItems(totalItems + 1);
    };
    const removeCartItem = (newItem) => {
        const qty = cartItems.find((item) => item.id === newItem.id).qty;

        if (qty === 1) {
            setCartItems(cartItems.filter((item) => item.id !== newItem.id));
            // setCartItemIds(cartItemIds.filter(id=>id!==newItem.id));
        } else {
            let newCartItems = cartItems.map((item) => {
                if (item.id === newItem.id) {
                    const updatedItem = { ...item, qty: item.qty - 1 };
                    console.log("updated qty:", item.qty - 1);
                    return updatedItem;
                }
                return item;
            });
            setCartItems(newCartItems);
        }
        setTotal(total - newItem.price);
        setTotalItems(totalItems - 1);
    };
    return { cartItems, addCartItem, removeCartItem, total, totalItems };
};
export default UseCartItems;
