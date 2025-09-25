import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import new1 from "../../assets/image/new1.jpg"
import new2 from "../../assets/image/new2.jpg"
import new3 from "../../assets/image/new3.jpg"
import new4 from "../../assets/image/new4.jpg"
import new5 from "../../assets/image/new5.jpg"
import new6 from "../../assets/image/new6.jpg"
import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css';
import { responsive } from "../../utils/Section.constants";
import './NewArrivals.css'

const items = [{
    'title': 'v1',
    imagePath: new1
}, {
    'title': 'v2',
    imagePath: new2
}, {
    'title': 'v3',
    imagePath: new3
}, {
    'title': 'v4',
    imagePath: new4
}, {
    'title': 'v5',
    imagePath: new5
}, {
    'title': 'v6',
    imagePath: new6
}

]

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