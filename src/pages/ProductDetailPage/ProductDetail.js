import react, { use } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams()
    return (
        <div>ProductDetail {productId}</div>
    )
}


export default ProductDetail