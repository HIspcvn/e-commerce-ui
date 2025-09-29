import React from "react";

const Categories = ({ types }) => {
    return (
        <div>
            {types.map((type) => {
                return (
                    <div className="flex p-1">
                        <input type="checkbox" id={type.id} name="type" className="border rounded-lg w-4 h-4 accent-black text-black" />
                        <label htmlFor={type.id} className="px-2 text-gray-600 mb-2 text-[14px]">{type.name}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories