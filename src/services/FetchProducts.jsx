import axios from "axios";

const FetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/products", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        alert(error.message);
    }
};

export default FetchProducts;
