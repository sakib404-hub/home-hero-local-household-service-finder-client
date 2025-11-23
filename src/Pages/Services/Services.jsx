import React, { use, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Loader from '../../Components/Loader/Loader';

const Services = () => {
    const [services, setServices] = useState([]);
    const { loading, setLoading } = use(AuthContext);
    const [search, setSearch] = useState('');
    const axiosInstance = useAxios();

    // useEffect(() => {
    //     axiosInstance('/services')
    //         .then((res) => setServices(res.data))
    //         .catch((error) => console.log(error));
    // }, [axiosInstance]);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const res = await axiosInstance(`/services?search=${search}`)
                setServices(res.data);
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        const timeOut = setTimeout(fetchServices, 500);
        return () => clearTimeout(timeOut);
    }, [search, axiosInstance, setLoading])


    return (
        <div className="bg-base-100 min-h-screen py-10">
            {loading && <Loader></Loader>}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">All Services</h1>
                <p className="text-gray-500">Choose from our professional service options</p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-10">
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered w-full max-w-md"
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
                        {services.map((service) => {
                            return <ServiceCard
                                service={service}
                                key={service._id}>
                            </ServiceCard>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
