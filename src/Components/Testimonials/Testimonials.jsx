import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export const CustomerTestimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            text: "Amazing service! Highly recommend to everyone.",
            rating: 5,
        },
        {
            name: "Jane Smith",
            text: "Professional team and outstanding results!",
            rating: 4,
        },
        {
            name: "Alice Johnson",
            text: "Great experience, very satisfied with the service.",
            rating: 5,
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
        }),
    };

    return (
        <section className="bg-base-300 p-16 rounded-2xl my-10">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-8"
                >
                    Customer Testimonials
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            custom={index}
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
                            <p className="mb-4 italic text-lg">"{testimonial.text}"</p>

                            {/* Dynamic Stars */}
                            <div className="flex justify-center mb-2">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 mx-1" />
                                ))}
                            </div>

                            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
