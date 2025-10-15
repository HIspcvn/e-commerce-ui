import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from '../../assets/image/jeans.jpg'
import Shirts from '../../assets/image/shirts.jpg'
import Tshirt from '../../assets/image/tshirts.jpeg'
import dresses from '../../assets/image/dresses.jpg'
import Joggers from '../../assets/image/joggers.jpg'
import Kurtis from '../../assets/image/kurtis.jpg'
import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css';
import { responsive } from "../../utils/Section.constants";
import './NewArrivals.css'

const items = [{
    'title': 'Dresses',
    imagePath: dresses
}, {
    'title': 'Shirts',
    imagePath: Shirts
}, {
    'title': 'T-Shirts',
    imagePath: Tshirt
}, {
    'title': 'Kurtis',
    imagePath: Kurtis
},
{
    'title': 'Joggers',
    imagePath: Joggers
}];

const NewArrivals = () => {
    return (
        <>
            <SectionHeading title={'New Arrivals'} />
            <Carousel
                responsive={responsive}
                infinite={false}     // lặp vô hạn
                autoPlay={false}    // tự động chạy
                autoPlaySpeed={3000} // 3 giây chuyển slide
                keyBoardControl={true}
                transitionDuration={500} // tốc độ chuyển động
                removeArrowOnDeviceType={["tablet", "mobile"]} // ẩn mũi tên ở tablet/mobile 
                itemClass={"react-slider-custom-item"}
                className="px-8"
            >
                {items && items.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </Carousel >
        </>
    )
}

export default NewArrivals