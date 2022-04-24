import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

export default function useCategories(url) {
    let [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response)
                setItems(response);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return { items }
}