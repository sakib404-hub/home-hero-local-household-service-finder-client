import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';

const Services = () => {
    const [services, setServices] = useState([]);
    const axiosInstance = useAxios();
    useEffect(() => {
        axiosInstance('/services')
            .then((res) => {
                setServices(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [axiosInstance])
    console.log(services);
    return (
        <div>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl my-10 font-semibold'>All Services</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;