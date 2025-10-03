import react, { use, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { product } = useLoaderData()
    console.log(product)
    const [image, setImage] = useState(product.thumbnail)
    console.log(image)


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
            <div className="w-[60%]">

            </div>
        </div>
    )
}


export default ProductDetail