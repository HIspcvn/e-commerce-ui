import React, { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css'
const PriceFilter = () => {

    const [range, setRange] = useState({
        min: 10,
        max: 250
    })

    return (
        <div className="mb-2">
            <p className="text-[16px] text-black mt-5">Price</p>
            <RangeSlider className="custom-range-slider" min={0} max={400} defaultValue={[range.min, range.max]}
                onInput={(values) => setRange({
                    min: values[0],
                    max: values[1]
                })} />

            <div className="flex justify-between">
                <input type="text" value={`  $ ${range.min}`} className="max-w-[50%] border rounded-lg w-[40%] mt-4 p-2" placeholder="min" />
                <input type="text" value={`  $ ${range.max}`} className="max-w-[50%] border rounded-lg w-[40%] mt-4 p-2" placeholder="max" />
            </div>
        </div>
    )
}

export default PriceFilter


