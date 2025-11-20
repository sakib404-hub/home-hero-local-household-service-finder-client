import React, { useState } from 'react';
const AddServices = () => {
    const [tags, setTags] = useState("");
    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newService = {
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
            createdAt: new Date().toISOString()
        };
        console.log(newService);
    }
    return (
        <div>
            <div className="card bg-base-100 flex items-center justify-center shadow-xl mx-auto">
                <div className="card-body w-full lg:w-[600px] border border-gray-300 p-10 rounded-2xl my-10">
                    <form
                        onSubmit={handleFormSubmission}
                        action="">
                        <fieldset className="fieldset space-y-1">
                            {/* Name */}
                            <label
                                htmlFor='name'
                                className="label font-semibold">Service Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                className="input input-bordered w-full"
                                placeholder="Enter service name"
                            />
                            {/* Category */}
                            <label
                                htmlFor='category'
                                className="label font-semibold">Category</label>
                            <input
                                type="text"
                                id='category'
                                name='category'
                                className="input input-bordered w-full"
                                placeholder="e.g., Electrical, Plumbing, Cleaning"
                            />
                            {/* Price */}
                            <label
                                htmlFor='price'
                                className="label font-semibold">Price</label>
                            <input
                                type="number"
                                id='price'
                                name='price'
                                className="input input-bordered w-full"
                                placeholder="Enter price"
                            />
                            {/* Discount */}
                            <label
                                htmlFor='discount'
                                className="label font-semibold">Discount (%)</label>
                            <input
                                type="number"
                                id='discount'
                                name='discount'
                                className="input input-bordered w-full"
                                placeholder="Enter discount percentage"
                            />
                            {/* Description */}
                            <label
                                htmlFor='description'
                                className="label font-semibold">Description</label>
                            <textarea
                                id='description'
                                name='description'
                                className="textarea textarea-bordered w-full"
                                placeholder="Describe the service..."
                                rows={3}
                            ></textarea>
                            {/* Image URL */}
                            <label
                                htmlFor='image'
                                className="label font-semibold">Image URL</label>
                            <input
                                name='image'
                                id='image'
                                type="url"
                                className="input input-bordered w-full"
                                placeholder="Paste image URL"
                            />
                            {/* Provider Name */}
                            <label
                                htmlFor='providerName'
                                className="label font-semibold">Provider Name</label>
                            <input
                                type="text"
                                id='providerName'
                                name='providerName'
                                className="input input-bordered w-full"
                                placeholder="Enter provider name"
                            />
                            {/* Provider Email */}
                            <label
                                htmlFor='providerEmail'
                                className="label font-semibold">Provider Email</label>
                            <input
                                type="email"
                                name='providerEmail'
                                id='providerEmail'
                                className="input input-bordered w-full"
                                placeholder="Enter provider email"
                            />
                            <label htmlFor='location' className="label font-semibold">Location</label>
                            <input
                                type="text"
                                id='location'
                                name='location'
                                className="input input-bordered w-full"
                                placeholder="Enter service location"
                            />

                            <label htmlFor='duration' className="label font-semibold">Duration</label>
                            <input
                                type="text"
                                id='duration'
                                name='duration'
                                className="input input-bordered w-full"
                                placeholder="e.g., 45–90 mins"
                            />

                            <label htmlFor='availability' className="label font-semibold">Availability</label>
                            <input
                                type="text"
                                id='availability'
                                name='availability'
                                className="input input-bordered w-full"
                                placeholder="e.g., Fri–Wed"
                            />

                            <label htmlFor='tags' className="label font-semibold">Tags (comma separated)</label>
                            <input
                                type="text"
                                id='tags'
                                name='tags'
                                className="input input-bordered w-full"
                                placeholder="e.g., electric repair, wiring, fan installation"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                            <button className="btn btn-primary mt-6 w-full">Add Service</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddServices;