import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="flex gap-4 p-4 bg-base-200 rounded-xl shadow-md">
            <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg">
                        {review.name}
                    </h4>
                    <span className="text-sm">{review.time}</span>
                </div>
                <p className="mt-2">{review.text}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
