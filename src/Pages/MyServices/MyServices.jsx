import React, { use, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import MyServiceCard from '../../Components/MyServiceCard/MyServiceCard';

const MyServices = () => {
    const axiosInstance = useAxios();
    const { user } = use(AuthContext);
    const [myServices, setMyServices] = useState([]);

    useEffect(() => {
        axiosInstance(`/myservices?email=${user?.email}`)
            .then((res) => {
                setMyServices(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [axiosInstance, user])

    const onDelete = (id) => {
        console.log('OnDelete is Clicked!', id)
    }
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold text-primary">My Services</h1>
                <p className="text-base mt-2 text-gray-600 max-w-xl mx-auto">
                    Here you can manage all the services you have created. Edit, update, or remove
                    your services anytime to keep your listings up to date.
                </p>
            </div>
            <div className='max-w-4xl space-y-5 mx-auto'>
                {
                    myServices.map((service) => {
                        return <MyServiceCard
                            key={service._id}
                            service={service}
                            onDelete={onDelete}></MyServiceCard>
                    })
                }
            </div>
        </div>
    );
};

export default MyServices;