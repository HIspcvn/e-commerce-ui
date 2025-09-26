import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";

const Category = ({ title, data }) => {
    return (
        <>
            <SectionHeading title={title} />
            <div className="flex p-8">
                {data && data.map((item, index) => {
                    return (
                        <Card key={index} title={item.title} description={item.description} imagePath={item.image}
                            actionArrow={true} height={'280px'} width={'260px'} />
                    )
                })}
            </div>
        </>
    )
}

export default Category