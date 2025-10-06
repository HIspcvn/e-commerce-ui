import React from "react";
import { colorSelector } from "../../components/Filters/ColorsFilter";

const ProductColor = ({ colors }) => {
    return (
        <div className="flex">
            {colors.map((color, index) => (
                <div key={index}
                    style={{ backgroundColor: colorSelector[color] }}
                    className="rounded-[50%] w-4 h-4 mx-2">

                </div>
            ))}
        </div>
    )
}

export default ProductColor