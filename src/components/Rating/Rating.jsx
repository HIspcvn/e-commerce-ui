import React, { useMemo } from "react";
import SvgStarIcon from "../common/SvgStartIcon";
import { SvgEmptyStar } from "../common/SvgEmptyStart";

export const Rating = ({ rating }) => {
    const ratingNumber = useMemo(() => {
        return Array(Math.floor(Number(rating))).fill()
    }, [rating])

    return (
        <div className="flex items-center">
            {ratingNumber.map((_, index) => (
                <SvgStarIcon key={index} />
            ))}

            {
                Array(5 - Math.floor(Number(rating))).fill().map((_, index) => (
                    <SvgEmptyStar key={index} />
                ))
            }
            <p className="px-2 text-gray-500">{rating}</p>
        </div>
    )
}