import react, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { getProductById } from "./api"
const ProductDetails = () => {
    const params = useParams();
    const [ProductDetails, setProductDetails] = useState ();
    
      const fetchProductsData = async () => {
        const data = await getProductById(id);
        setProductDetails(data);
      };
      console.log(ProductDetails);
    const id = params.id;

    useEffect(() => {
        fetchProductsData();
      }, []);


    console.log("Params",params);
    return <div> I am the product</div>
}

export default ProductDetails;