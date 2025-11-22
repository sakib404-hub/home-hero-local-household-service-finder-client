import React, { use, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const { user } = use(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const axiosInstance = useAxios();
    useEffect(() => {
        axiosInstance(`/mybookings?email=${user?.email}`)
            .then((res) => {
                setMyBookings(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [axiosInstance, user])

    const handleBookingCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel Bookings!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/bookings/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Booking Cancelled!!",
                                text: "Your Bookings has been Canceled",
                                icon: "success"
                            });
                        }
                        const filteredBooking = myBookings.filter((booking) => booking._id !== id);
                        setMyBookings(filteredBooking);
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: error.message,
                            text: "We couldn't cancel your booking. Please try again.",
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
            < h1 className="text-3xl font-bold text-center my-6 flex items-center justify-center gap-2" >
                <i className="fa-solid fa-calendar-check text-primary"></i>
                My Bookings
            </h1 >

            <div className="w-full p-2">
                {myBookings.length > 0 ? (
                    <div className="overflow-x-auto w-full">
                        <table className="table mx-auto table-compact table-zebra w-full min-w-max md:w-auto">
                            <thead className="bg-base-200">
                                <tr>
                                    <th>SL NO.</th>
                                    <th>Booked By</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {myBookings.map((booking, index) => (
                                    <tr key={booking._id} className="hover">
                                        <td className="font-semibold">{index + 1}</td>

                                        {/* User info */}
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={user?.photoURL} alt="User Avatar" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold">{user?.displayName}</span>
                                                    <span className="text-sm opacity-50">
                                                        {user?.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Service Details */}
                                        <td>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-medium">{booking.serviceTitle}</span>
                                                <span className="badge badge-ghost badge-sm wrap-break-words">
                                                    {booking.serviceDes}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="font-semibold">৳ {booking.price}</td>

                                        <td>
                                            <button
                                                onClick={() => handleBookingCancel(booking._id)}
                                                className="btn btn-primary btn-xs">
                                                Cancel Booking
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-2xl font-semibold my-4">
                        You have no bookings yet.
                    </p>
                )}
            </div>
        </div >
    );

};

export default MyBookings;