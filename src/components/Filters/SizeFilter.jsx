import React, { useCallback, useState } from "react";

const SizeFilter = ({ sizes, hiddenTitle }) => {

    const [appliedSizes, setAppliedSizes] = useState([])
    const onClickDiv = useCallback((item) => {
        if (appliedSizes.includes(item)) {
            setAppliedSizes(appliedSizes.filter(size => size !== item));
        } else {
            setAppliedSizes([...appliedSizes, item])
        }
    }, [appliedSizes])

    return (
        <div className={`flex flex-col ${hiddenTitle ? '' : 'mb-4'}`}>
            {hiddenTitle || <p className="text-[16px] text-black mt-5 mb-5">Size</p>}
            <div className="flex flex-wrap px-2">
                {sizes.map(item => {
                    return (
                        <div className="flex flex-col">
                            <div className="w-[50px] h-8 mb-4 text-center border rounded-lg mb-1 mr-4 cursor-pointer hover:outline-4 hover:scale-125
                                bg-white border-gray-500 text-gray-500"
                                style={
                                    appliedSizes.includes(item) ? {
                                        background: 'black',
                                        color: 'white'

                                    } : {}
                                } onClick={() => onClickDiv(item)}
                            >
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SizeFilter