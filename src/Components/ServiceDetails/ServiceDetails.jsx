import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            This is the Service Details!
        </div>
    );
};

export default ServiceDetails;