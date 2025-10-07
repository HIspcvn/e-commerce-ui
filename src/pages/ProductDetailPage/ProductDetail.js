import react, { use, useEffect, useMemo, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import content from '../../data/content.json'
import { Rating } from "../../components/Rating/Rating";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductColor from "./ProductColor";
import { CartIcon } from "../../components/common/CartIcon";
import SvgCreditCard from "../../components/common/SvgCreditCard";
import SvgShipping from "../../components/common/SvgShipping";
import SvgCloth from "../../components/common/SvgCloth";
import SvgReturn from "../../components/common/SvgReturn";
import SectionHeading from "../../components/sections/SectionHeading/SectionHeading";
import ProductCard from "../ProductListPage/ProductCard";

const categories = content.categories

const extraSection = [
    {
        icon: <SvgCreditCard />,
        label: 'Secure payment'
    },
    {
        icon: <SvgCloth />,
        label: 'Size & Fit'
    },
    {
        icon: <SvgShipping />,
        label: 'Free Shipping'
    },
    {
        icon: <SvgReturn />,
        label: 'Free Shipping and Return'
    }
]


const ProductDetail = () => {
    const { product } = useLoaderData()
    // console.log(product)
    const [image, setImage] = useState()
    // console.log(image)
    const [BreadcrumbLinks, setBreadcrumbLinks] = useState([])

    const productCategory = useMemo(() => {
        return categories.find((category) => category.id === product.category_id)
    }, [product])

    const similarProduct = useMemo(() => {
        return content.products.filter((item) => item.type_id === product.type_id && item.id !== product.id)
    }, [product])

    useEffect(() => {
        setImage(product.thumbnail)
        setBreadcrumbLinks([])
        const arrayLinks = [{ title: 'Shop', path: '/' }, {
            title: productCategory.name,
            path: productCategory.path
        }]


        const productType = productCategory.types.find((item) => item.id === product.type_id)

        if (productType) {
            arrayLinks.push({
                title: productType.name,
                path: productType.name
            })
        }

        setBreadcrumbLinks(arrayLinks);
    }, [productCategory, product])



    return (
        <>
            <div className="flex flex-col lg:flex-row md:flex-row p-10">
                <div className="w-[100%] lg:w-[50%] md:w-[40%]">
                    {/*Image*/}
                    <div className="flex flex-col md:flex-row">
                        <div className="w-[100%] md:w-[30%] justify-center h-[40px] md:h-[420px]">
                            {/* Stack images */}
                            <div className="flex flex-row md:flex-col justify-center h-full">
                                {
                                    product.images.map((item, index) => (
                                        <button onClick={() => setImage(item)} className="border rounded-lg w-fit p-2 mb-2">
                                            <img src={item} className="h-48[px]  w-[48px] 
                                        bg-cover bg-center hover:scale-105" alt={'sample' + index} />
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex w-full md:w-[80%] justify-center md:pt-0 pt-10">
                            <img src={image} className={`h-full w-full max-h-[520px] object-cover 
                            border rounded-lg cursor-pointer block`} alt={product.title} />
                        </div>
                    </div>
                </div>
                <div className="w-[60%] px-10">
                    <Breadcrumb links={BreadcrumbLinks} />
                    <p className="text-3xl pt-2">{product.title}</p>
                    <Rating rating={product.rating} />

                    <p className="text-xl bold py-2">${product.price}</p>

                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <p className="text-sm bold">Select Size</p>
                            <Link className="text-sm text-gray-500 hover:text-black" to={'https://en.wikipedia.org/wiki/Clothing_sizes'} target='_blank'>{'Size Guide ->'}</Link>
                        </div>
                    </div>
                    <div className="mt-2"><SizeFilter sizes={product.size} hiddenTitle={true} /></div>

                    <div>
                        <p className="text-lg bold">Colors Available</p>
                        <ProductColor colors={product.color} />
                    </div>

                    <div className="flex py-4">
                        <button className="bg-black rounded-lg w-[150px] px-2"><div className="flex items-center bg-black text-white"><CartIcon bgColor={'black'} />Add to cart</div></button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        {extraSection.map((section) => {
                            return (<div className="flex items-center">
                                {section.icon}
                                <p className="px-2">{section.label}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>



            <div className="md:w-[50%] w-full p-1">
                <SectionHeading title={'Product Description'} />
                <p className="px-8 ml-1">{product.description}</p>
            </div>

            <SectionHeading title={'Similar Product'} />
            <div className="flex px-10">
                <div className="pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-col-3 gap-8 px-2 pb-10">
                    {similarProduct.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                    {!similarProduct.length && <p>No Product Found</p>}
                </div>
            </div>
        </>
    )
}


export default ProductDetail