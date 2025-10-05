import React from "react";

const ProductColor = ({ colors }) => {
    return (
        <div className="flex">
            {colors.map((color, index) => (
                <input type="radio" value={color.toLowerCase()} name="selectColor" />
            ))}
        </div>
    )
}

export default ProductColor