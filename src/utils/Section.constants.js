// Cấu hình responsive cho carousel
export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3, // số card hiển thị trên màn hình lớn
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2, // số card hiển thị trên tablet
        slidesToSlide: 4
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1, // số card hiển thị trên mobile
        slidesToSlide: 1
    },
};