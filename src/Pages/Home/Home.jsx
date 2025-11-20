import React from 'react';
import Slider from '../../Components/Slider/Slider';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import { CustomerTestimonials } from '../../Components/Testimonials/Testimonials';
import HomeServices from '../../Components/HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <div className='z-10'>
                <Slider></Slider>
            </div>
            <div className='my-20'>
                <HomeServices></HomeServices>
            </div>
            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div className='max-w-7xl mx-auto'>
                <CustomerTestimonials></CustomerTestimonials>
            </div>
        </div>
    );
};

export default Home;