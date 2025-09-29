import React, { useMemo } from "react";
import FilterIcon from "../../components/common/FilterIcon";
import content from '../../data/content.json'
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";

const categories = content.categories;


const ProductListPage = ({ categoryType }) => {

    const categoriesContent = useMemo(() => {
        return (categories.find((category) => category.code === categoryType))
    }, [categoryType])

    return (
        <div>
            <div className="flex">
                <div className="w-[20%] p-[20px] border rounded-lg m-[20px]">
                    {/* Filter  */}
                    <div className="flex justify-between">
                        <p className="text-[16px] text-gray-600">Filter</p>
                        <FilterIcon />
                    </div>

                    {/* Type Filter  */}
                    <div>
                        <p className="text-[16px] text-black mt-5">Categories</p>
                        <Categories types={categoriesContent.types} />
                        <hr></hr>
                    </div>

                    {/* Price Filter  */}
                    <div>
                        <PriceFilter />
                        <hr className="mt-2"></hr>
                    </div>

                    {/* Colors Filter  */}
                    <div>
                        <ColorsFilter colors={categoriesContent.meta_data?.colors || []} />
                        <hr />
                    </div>
                </div>

                <div className="p-[15px]">
                    {/* Product  */}
                    <p className="text-black text-lg">{categoriesContent.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductListPage