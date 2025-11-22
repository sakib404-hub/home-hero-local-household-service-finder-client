import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
            <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-gray-800">
                        {review.name}
                    </h4>
                    <span className="text-sm text-gray-400">{review.time}</span>
                </div>
                <p className="mt-2 text-gray-700">{review.text}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
