import React from "react";
import { FaTrash } from "react-icons/fa";

const MyServiceCard = ({ service, onDelete, onEdit }) => {
    const {
        title,
        category,
        price,
        discount,
        description,
        image,
        providerName,
        location,
        duration,
        availability,
        tags,
    } = service;

    const discountedPrice = price - (price * discount) / 100;

    return (
        <div className="relative bg-white shadow-lg rounded-xl overflow-hidden border group hover:shadow-2xl transition-all">

            {/* Delete Icon */}
            <button
                onClick={() => onDelete(service._id)}
                className="absolute top-3 right-3 bg-red-100 p-2 rounded-full hover:bg-red-200 transition"
            >
                <FaTrash className="w-5 h-5 text-red-600" />
            </button>

            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48  lg:h-100 object-cover"
            />

            <div className="p-4 space-y-3">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>

                {/* Category */}
                <p className="text-sm text-gray-500">{category}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm">{description}</p>

                {/* Price */}
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-green-600">
                        ${discountedPrice}
                    </p>
                    {discount > 0 && (
                        <span className="line-through text-gray-400 text-sm">${price}</span>
                    )}
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                    <p><span className="font-semibold">Location:</span> {location}</p>
                    <p><span className="font-semibold">Duration:</span> {duration}</p>
                    <p><span className="font-semibold">Available:</span> {availability}</p>
                    <p><span className="font-semibold">Provider:</span> {providerName}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Edit Button */}
                <button
                    onClick={() => onEdit(service)}
                    className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Edit Service
                </button>
            </div>
        </div>
    );
};

export default MyServiceCard;
