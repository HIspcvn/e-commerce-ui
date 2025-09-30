import React, { useCallback, useState } from "react";

export const colorSelector = {
    "Purple": "#8434E1",
    "Black": "#252525",
    "White": "#FFFFFF",
    "Gray": "#808080",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
    "Grey": "#808080",
    "Yellow": "#FFFF00",
    "Pink": "#FFC0CB",
    "Green": "#008000"

}

const ColorsFilter = ({ colors }) => {

    const [appliedColors, setAppliedColors] = useState([])
    const onClickDiv = useCallback((item) => {
        if (appliedColors.includes(item)) {
            setAppliedColors(appliedColors.filter(color => color !== item));
        } else {
            setAppliedColors([...appliedColors, item])
        }
    }, [appliedColors])


    return (
        <div className="flex flex-col mb-4">
            <p className="text-[16px] text-black mt-5 mb-5">Color</p>
            <div className="flex flex-wrap px-2">
                {colors.map(item => {
                    return (
                        <div className="flex flex-col">
                            <div className="w-8 h-8 border rounded-xl mb-1 mr-4 cursor-pointer hover:outline-4 hover:scale-125"
                                style={{ background: colorSelector[item] }}
                                onClick={() => onClickDiv(item)}></div>
                            <p className="text-sm text-gray-400 mb-2" style={{ color: appliedColors.includes(item) ? 'black' : '' }}>{item}</p>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default ColorsFilter