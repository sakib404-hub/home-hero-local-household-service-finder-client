import React from 'react';
import { useNavigate } from 'react-router';

const ServiceCard = ({ service }) => {
    const ratings = service.ratings;
    const totalRatings =
        ratings.oneStar +
        ratings.twoStar +
        ratings.threeStar +
        ratings.fourStar +
        ratings.fiveStar;

    const averageRating = (
        (1 * ratings.oneStar +
            2 * ratings.twoStar +
            3 * ratings.threeStar +
            4 * ratings.fourStar +
            5 * ratings.fiveStar) /
        totalRatings
    ).toFixed(1);
    const path = useNavigate();
    const handleDetailsButtonClick = () => {
        path(`/services/${service._id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden hover:scale-105">
            {/* Image Section */}
            <figure className="relative">
                <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover"
                />
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow">
                    {service.discount}% OFF
                </span>
            </figure>
            {/* Card Body */}
            <div className="card-body">
                {/* Title */}
                <h2 className="card-title text-2xl font-bold">
                    {service.title}
                </h2>
                {/* Provider */}
                <p className="text-gray-600 text-sm">
                    By <span className="font-medium">{service.providerName}</span>
                </p>
                {/* Price */}
                <div className="flex items-center gap-3 mt-2">
                    <p className="text-2xl font-bold text-blue-600">৳{service.price}</p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {service.tags.map((tag, index) => (
                        <span key={index} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Ratings */}
                <div className="mt-4 flex items-center gap-2">
                    <div className="rating rating-sm">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className={`mask mask-star-2 bg-orange-400`}
                                checked={star === Math.round(averageRating)}
                                readOnly
                            />
                        ))}
                    </div>

                    <span className="text-sm text-gray-600">
                        ({averageRating} of 5)
                    </span>
                </div>
                {/* Actions */}
                <div className="card-actions justify-end mt-4">
                    <button
                        onClick={handleDetailsButtonClick}
                        className="btn btn-primary w-full">Details</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;