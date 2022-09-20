import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { data } from "autoprefixer";

export default function SliderComponent({ data }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-56" src="https://dj7u9rvtp3yka.cloudfront.net/layout/banner…ilingoRevamp/Logos-5p256-w4320p0-h822p0-en_v5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-56" src="https://dj7u9rvtp3yka.cloudfront.net/layout/banner…ilingoRevamp/Logos-5p256-w4320p0-h822p0-en_v5.png" alt="" />

                </SwiperSlide>
            </Swiper>
        </>
    );
}