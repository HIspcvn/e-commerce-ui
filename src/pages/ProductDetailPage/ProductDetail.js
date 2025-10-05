import react, { use, useEffect, useMemo, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import content from '../../data/content.json'
import { Rating } from "../../components/Rating/Rating";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductColor from "./ProductColor";

const categories = content.categories


const ProductDetail = () => {
    const { product } = useLoaderData()
    // console.log(product)
    const [image, setImage] = useState(product.thumbnail)
    // console.log(image)
    const [BreadcrumbLinks, setBreadcrumbLinks] = useState([{ title: 'Shop', path: '/' }])

    const productCategory = useMemo(() => {
        return categories.find((category) => category.id === product.category_id)
    }, [product])

    useEffect(() => {
        const arrayLinks = [{
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

        setBreadcrumbLinks(prev => [...BreadcrumbLinks, ...arrayLinks]);
    }, [productCategory])



    return (
        <div className="flex flex-col lg:flex-row md:flex-row p-10 h-[320px]">
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

            </div>
        </div>
    )
}


export default ProductDetail