import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        id: 1,
        user: {
            name: "John Smith",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
            profession: "Software Engineer",
            company: "TechCorp"
        },
        rating: 5,
        date: "2024-03-15",
        text: "The insights shared in these case studies have been invaluable. I've implemented several strategies from the founders' stories and seen remarkable growth in my own startup.",
        verified: true
    },
    {
        id: 2,
        user: {
            name: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
            profession: "Marketing Director",
            company: "GrowthLabs"
        },
        rating: 4,
        date: "2024-03-14",
        text: "What sets this platform apart is the authenticity of the content. These aren't just success stories - they're detailed blueprints for building successful businesses.",
        verified: true
    },
    {
        id: 3,
        user: {
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
            profession: "Startup Founder",
            company: "DataFlow"
        },
        rating: 5,
        date: "2024-03-13",
        text: "The case studies here are gold. Each one provides actionable insights that you can immediately apply to your business. Worth every penny!",
        verified: true
    },
    {
        id: 4,
        user: {
            name: "Emily Rodriguez",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
            profession: "Product Manager",
            company: "SaaSTech"
        },
        rating: 5,
        date: "2024-03-12",
        text: "I've been following these case studies for months now. The level of detail and transparency in each story is incredible. It's like having a mentor in your pocket.",
        verified: true
    }
];

const ReviewsPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 2;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [totalPages]);

    const getCurrentReviews = () => {
        const start = currentPage * reviewsPerPage;
        return reviews.slice(start, start + reviewsPerPage);
    };

    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">What Our Members Say</h2>
                <p className="text-xl text-gray-600">Join thousands of satisfied founders learning from real experiences</p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {getCurrentReviews().map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={review.user.image} 
                                    alt={review.user.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-bold">{review.user.name}</h3>
                                    <p className="text-sm text-gray-600">{review.user.profession}</p>
                                    <p className="text-sm text-gray-500">{review.user.company}</p>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar 
                                                key={index}
                                                className={index < review.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700">{review.text}</p>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            currentPage === index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentPage(index)}
                    />
                ))}
            </div>

            <div className="text-center mt-12">
                <Link 
                    to="/reviews"
                    className="btn bg-black text-white hover:bg-gray-800"
                >
                    View All Reviews
                </Link>
            </div>
        </div>
    );
};

export default ReviewsPage;