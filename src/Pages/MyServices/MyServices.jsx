import React, { use, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import MyServiceCard from '../../Components/MyServiceCard/MyServiceCard';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: "Are you sure?",
            text: "This action will permanently delete your service!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, Delete it!",
            cancelButtonText: "Keep Service",
            background: "#ffffffee",
            customClass: {
                popup: "rounded-2xl shadow-xl",
                title: "text-2xl font-bold",
                confirmButton: "px-5 py-2 rounded-lg",
                cancelButton: "px-5 py-2 rounded-lg"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/services/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Service Deleted!",
                                text: "Your service has been successfully removed.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1800,
                                background: "#ffffffee",
                                customClass: {
                                    popup: "rounded-2xl shadow-xl",
                                    title: "text-2xl font-bold",
                                }
                            });
                            const filterdService = myServices.filter((service) => service._id !== id)
                            setMyServices(filterdService);
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: error.message,
                            text: "We couldn't Delete your service. Please try again.",
                            icon: "error",
                            confirmButtonText: "Okay",
                            confirmButtonColor: "#dc2626",
                            background: "#ffffffee",
                            customClass: {
                                popup: "rounded-2xl shadow-xl",
                                title: "text-2xl font-bold text-red-600",
                                confirmButton: "px-5 py-2 rounded-lg",
                            }
                        });
                    })
            }
        });
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