import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import ServiceCard from '../ServiceCard/ServiceCard';
import Loader from '../Loader/Loader'
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance('/latest-service')
            .then((res) => {
                setServices(res.data);
            })
            .catch((error) => console.log(error));
    }, [axiosInstance]);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div>
                {
                    loading && <Loader></Loader>
                }
            </div>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Latest Services</h2>
                <p className="text-gray-500 mt-2">
                    Explore the latest services designed to help you succeed.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <div className='text-center py-10'>
                <Link
                    to={'/services'}
                    className='btn btn-primary'>More Services</Link>
            </div>
        </div>
    );
};

export default HomeServices;
