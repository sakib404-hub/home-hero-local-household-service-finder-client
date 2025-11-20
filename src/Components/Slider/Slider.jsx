import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router";

const Slider = () => {
    const slides = [
        {
            id: 1,
            img: "https://viola-cleaning.com/wp-content/uploads/2019/08/Easy-Cleaning-Tips-for-a-Sparkling-Home.jpg",
            title: "Sparkling Home Cleaning",
            desc: "Keep your home spotless with our professional cleaning services.",
        },
        {
            id: 2,
            img: "https://plumbingconcepts.com/wp-content/uploads/2024/04/Blog-Banner-for-Website-Content-24.jpg",
            title: "Expert Plumbing Solutions",
            desc: "Fix leaks, unclog drains, and ensure smooth water flow at home.",
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2lfp2S8zsul2sKV1K9XEb_NB5stm7lyjcw&s",
            title: "Reliable Electrical Repairs",
            desc: "From wiring to appliance issues, our electricians have you covered.",
        },
        {
            id: 4,
            img: "https://ecofurb.com/wp-content/uploads/2025/07/Ecofurb-Blog-Home-Retrofit-Unpacked-Article-Image-2025-07-10-Energy-efficient-home-improvements.jpg",
            title: "Efficient Home Painting",
            desc: "Transform your home with a fresh coat of color done by professionals.",
        },
        {
            id: 5,
            img: "https://alltechappliance.com/wp-content/uploads/2025/02/Reliable-Appliance-Repair-Services-Near-You-2.webp",
            title: "Reliable Appliance Repair",
            desc: "We fix refrigerators, washing machines, and other household appliances quickly.",
        },
    ];

    const path = useNavigate();
    const handleExploreButton = () => {
        path('/services');
    }

    return (
        <div className="w-fullmx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper  overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-[55vh] flex items-center justify-center text-center text-white"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 px-6 md:px-10">
                                <div className="my-10">
                                    <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                                        {slide.desc}
                                    </p>
                                </div>
                                <div className="">
                                    <button
                                        onClick={handleExploreButton}
                                        className="btn btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default Slider;