import React, { useMemo } from "react";
import FilterIcon from "../../components/common/FilterIcon";
import content from '../../data/content.json'
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content.categories;


const ProductListPage = ({ categoryType }) => {

    const categoriesContent = useMemo(() => {
        return (categories.find((category) => category.code === categoryType))
    }, [categoryType])

    const productListItem = useMemo(() => {
        return (content.products.filter(product => product.category_id === categoriesContent.id))
    }, [categoriesContent])

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
                    {/* Size Filter  */}
                    <div>
                        <SizeFilter sizes={categoriesContent.meta_data?.sizes || []} />
                        <hr />
                    </div>
                </div>


                {/* Product  */}
                <div className="p-[15px]">
                    <p className="text-black text-lg">{categoriesContent.description}</p>
                    <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 gap-8 px-2">
                        {productListItem.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListPage