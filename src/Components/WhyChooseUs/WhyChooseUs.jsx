import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
    {
        title: "Quality Service",
        desc: "We deliver top-notch quality services that exceed expectations.",
        icon: <FaCheckCircle className="text-4xl text-primary mx-auto mb-4" />,
    },
    {
        title: "Expert Team",
        desc: "Our team consists of experienced professionals in every field.",
        icon: <FaCheckCircle className="text-4xl text-primary mx-auto mb-4" />,
    },
    {
        title: "Affordable Pricing",
        desc: "We provide high-quality service at competitive prices.",
        icon: <FaCheckCircle className="text-4xl text-primary mx-auto mb-4" />,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="bg-base-200 p-16 rounded-2xl">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8"
                    >
                        Why Choose Us
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                                }}
                                className="bg-base-100 p-6 rounded-lg shadow-lg transition cursor-pointer"
                            >
                                {item.icon}
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
