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
                    <div className='flex px-20 justify-between'>
                        <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>
                        <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>
                        <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex px-20 justify-between '>
                    <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>
                        <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>
                        <div className="w-[30%] bg-[#fff] p-6">
                            <h2>Zilingo helped us launch licensed merchandise &
                                customized apparel faster with a streamlined
                                process of pricing, sampling and production with
                                audited, compliant suppliers, clear communication
                                and quality maintained at all steps.</h2>
                            <p className='py-6'>Venkatesh - Eastsun</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}