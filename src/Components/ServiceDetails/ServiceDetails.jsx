import React, { use, useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const service = useLoaderData();
    const navigate = useNavigate();
    const bookServiceRef = useRef(null);

    // Calculate discounted price
    const discountedPrice = service.price - (service.price * service.discount) / 100;

    // Calculate average rating
    const { ratings } = service;
    const totalRatings = ratings.oneStar + ratings.twoStar + ratings.threeStar + ratings.fourStar + ratings.fiveStar;
    const averageRating = totalRatings
        ? ((1 * ratings.oneStar +
            2 * ratings.twoStar +
            3 * ratings.threeStar +
            4 * ratings.fourStar +
            5 * ratings.fiveStar) / totalRatings).toFixed(1)
        : 0;

    // Function to render stars based on average
    const renderStars = () => {
        const fullStars = Math.floor(averageRating);
        const halfStar = averageRating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar ? '☆' : ''}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    const handleModalOpen = () => {
        bookServiceRef.current.showModal();
    }

    const handleBookServiceForm = (event) => {
        event.preventDefault();
        const serviceId = service._id;
        const userEmail = event.target.email.value;
        const price = event.target.price.value;
        const description = service.description;
        const title = service.title;
        const date = new Date();
        const today = date.toISOString().split("T")[0];

        const newBooking = {
            serviceId,
            userEmail,
            serviceTitle: title,
            serviceDes: description,
            price,
            bookingDate: today
        }
        axiosInstance.post('/bookings', newBooking)
            .then((res) => {
                bookServiceRef.current.close();
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Booking Confirmed!",
                        text: "Your service has been successfully booked.",
                        icon: "success",
                        position: "center",
                        timer: 2000,
                        showConfirmButton: false,
                        background: "#ffffff",
                        color: "#1f2937",
                        iconColor: "#16a34a",
                        toast: true,
                        timerProgressBar: true,
                        customClass: {
                            popup: "shadow-xl rounded-2xl p-6",
                            title: "text-2xl font-bold",
                            htmlContainer: "text-base"
                        }
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Booking Failed!",
                    text: error.message,
                    icon: "error",
                    position: "center",
                    showConfirmButton: true,
                    confirmButtonColor: "#dc2626",
                    background: "#ffffff",
                    color: "#1f2937",
                    iconColor: "#dc2626",
                    customClass: {
                        popup: "shadow-xl rounded-2xl p-6",
                        title: "text-2xl font-bold",
                        htmlContainer: "text-base"
                    }
                });

            })
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Back to Home */}
            <div className='text-center'>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-outline mb-4"
                >
                    &larr; Back to Home
                </button>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
                <figure>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full lg:w-96 object-center"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title text-3xl font-bold">{service.title}</h2>
                        {service.discount > 0 && (
                            <span className="badge badge-primary">-{service.discount}%</span>
                        )}
                    </div>

                    <p className="text-gray-600 mb-2">{service.category}</p>
                    <p className="text-gray-800 mb-4">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        <p><strong>Location:</strong> {service.location}</p>
                        <p><strong>Duration:</strong> {service.duration}</p>
                        <p><strong>Availability:</strong> {service.availability}</p>
                        <p><strong>Provider:</strong> {service.providerName} ({service.providerEmail})</p>
                    </div>

                    <p className="text-gray-800 mb-2">
                        <strong>Price:</strong>{' '}
                        <span className="line-through text-red-500">${service.price}</span>{' '}
                        <span className="font-bold text-lg">${discountedPrice}</span>
                    </p>

                    <div className="mb-2">
                        <strong>Average Rating:</strong> {renderStars()} ({averageRating} ⭐, {totalRatings} reviews)
                    </div>

                    <div className="mb-4">
                        <strong>Tags:</strong>{' '}
                        {service.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={handleModalOpen}
                        className="btn btn-primary w-full lg:w-auto">Book Now</button>
                </div>
                <dialog
                    ref={bookServiceRef}
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle">

                    <div className="modal-box">

                        {/* SERVICE INFO INSIDE MODAL */}
                        <div className="flex flex-col items-center mb-4 text-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-40 h-40 object-cover rounded-lg mb-3"
                            />
                            <h3 className="font-bold text-2xl">{service.title}</h3>
                            <p className="text-gray-600">{service.category}</p>

                            <div className="mt-2">
                                <p><strong>Location:</strong> {service.location}</p>
                                <p><strong>Duration:</strong> {service.duration}</p>
                            </div>

                            <p className="mt-3 text-lg">
                                <strong>Price: </strong>
                                <span className="line-through text-red-500">${service.price}</span>{" "}
                                <span className="font-bold">${discountedPrice}</span>
                            </p>
                        </div>

                        <hr className="my-4" />

                        {/* BOOKING FORM */}
                        <h3 className="font-bold text-lg mb-2">Complete Your Booking</h3>
                        <form onSubmit={handleBookServiceForm}>
                            <fieldset className="fieldset">
                                <label htmlFor="email" className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue={user.email}
                                    className="input w-full text-center"
                                    readOnly
                                />

                                <label htmlFor="price" className="label">Service Fee</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    defaultValue={discountedPrice}
                                    readOnly
                                    className="input w-full text-center"
                                />

                                <button className="btn btn-primary mt-4 w-full">Submit Booking</button>
                            </fieldset>
                        </form>

                        <div className="modal-action flex justify-center">
                            <form method="dialog">
                                <button className="btn w-full">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default ServiceDetails;
