import React from "react";
import ArrowIcon from "../common/ArrowIcon";

const Card = ({ imagePath, title, description, actionArrow, height, width }) => {
    return (
        <div className="flex flex-col p-6">
            <img style={{
                height: height ? height : "320px",
                width: width ? width : "260px",
            }} className={` object-cover object-center border hover:scale-105 cursor-pointer rounded-lg `} src={imagePath} alt={title} />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-[16px] p-1">{title}</p>
                    {description && <p className="text-[12px] p-1 text-gray-600">{description}</p>}
                </div>
                {actionArrow && <span className="cursor-pointer pr-2  items-center"><ArrowIcon /></span>}
            </div>
        </div>
        // h-[${height ? height : '260px'}] w-[${width ? width : '240px'}]
    )
}

export default Card