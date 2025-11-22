import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const EditService = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const [tags, setTags] = useState(service?.tags?.join(", ") || "");

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const updatedService = {
            title: event.target.name.value,
            category: event.target.category.value,
            price: event.target.price.value,
            discount: event.target.discount.value,
            description: event.target.description.value,
            image: event.target.image.value,
            providerName: event.target.providerName.value,
            providerEmail: event.target.providerEmail.value,
            ratings: {
                oneStar: 0,
                twoStar: 0,
                threeStar: 0,
                fourStar: 0,
                fiveStar: 0,
            },
            location: event.target.location.value,
            duration: event.target.duration.value,
            availability: event.target.availability.value,
            tags: tags.split(",").map(tag => tag.trim()),
            createdAt: new Date().toISOString(),
        };

        console.log("UPDATED SERVICE →", updatedService);
        axiosInstance.put(`/service/${service._id}`, updatedService)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated Successfully!",
                        text: "The service has been updated.",
                        icon: "success",
                        position: "top-end",
                        toast: true,
                        showConfirmButton: false,
                        timer: 1800,
                        timerProgressBar: true,
                        background: "#f0fdf4",
                        color: "#166534",
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: error.message,
                    text: "No update was made to the service.",
                    icon: "info",
                    position: "top-end",
                    toast: true,
                    showConfirmButton: false,
                    timer: 1800,
                    timerProgressBar: true,
                    background: "#fefce8",
                    color: "#78350f",
                });
            })

    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Update Service
            </h2>

            <form onSubmit={handleFormSubmission}>
                <fieldset className="fieldset space-y-3">

                    {/* Service Name */}
                    <label className="label font-semibold">Service Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={service?.title}
                        className="input input-bordered w-full"
                    />

                    {/* Category */}
                    <label className="label font-semibold">Category</label>
                    <input
                        type="text"
                        name="category"
                        defaultValue={service?.category}
                        className="input input-bordered w-full"
                    />

                    {/* Price */}
                    <label className="label font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={service?.price}
                        className="input input-bordered w-full"
                    />

                    {/* Discount */}
                    <label className="label font-semibold">Discount (%)</label>
                    <input
                        type="number"
                        name="discount"
                        defaultValue={service?.discount}
                        className="input input-bordered w-full"
                    />

                    {/* Description */}
                    <label className="label font-semibold">Description</label>
                    <textarea
                        name="description"
                        defaultValue={service?.description}
                        className="textarea textarea-bordered w-full"
                        rows={3}
                    ></textarea>

                    {/* Image URL */}
                    <label className="label font-semibold">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        defaultValue={service?.image}
                        className="input input-bordered w-full"
                    />

                    {/* Provider Name */}
                    <label className="label font-semibold">Provider Name</label>
                    <input
                        type="text"
                        name="providerName"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered w-full"
                    />

                    {/* Provider Email */}
                    <label className="label font-semibold">Provider Email</label>
                    <input
                        type="email"
                        name="providerEmail"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                    />

                    {/* Location */}
                    <label className="label font-semibold">Location</label>
                    <input
                        type="text"
                        name="location"
                        defaultValue={service?.location}
                        className="input input-bordered w-full"
                    />

                    {/* Duration */}
                    <label className="label font-semibold">Duration</label>
                    <input
                        type="text"
                        name="duration"
                        defaultValue={service?.duration}
                        className="input input-bordered w-full"
                    />

                    {/* Availability */}
                    <label className="label font-semibold">Availability</label>
                    <input
                        type="text"
                        name="availability"
                        defaultValue={service?.availability}
                        className="input input-bordered w-full"
                    />

                    {/* Tags */}
                    <label className="label font-semibold">Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="input input-bordered w-full"
                    />

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className="btn btn-primary mt-6 w-full">
                        Update Service
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default EditService;
