import react from "react";
import SvgFavourite from "../../components/common/SvgFavourite";
import { Link } from "react-router-dom";


const ProductCard = ({ id, title, description, price, discount, rating, brand, thumbnail }) => {
    return (
        <div className="flex flex-col hover:scale-105 relative">
            <Link to={`/product/${id}`}>
                <img className={`h-[320px] w-[280px] object-cover border rounded-lg cursor-pointer block`} src={thumbnail} alt='Jean' />
            </Link>
            <div className="flex justify-between items-center">
                <div className="flex flex-col pt-2">
                    <p className="text-[16px] p-1">{title}</p>
                    {description && <p className="text-[12px] p-1 text-gray-600">{brand}</p>}
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
            <button onClick={() => console.log("Click button")} className="absolute top-0 right-0 pt-2 pr-2"><SvgFavourite /></button>
        </div>
    )
}

export default ProductCard