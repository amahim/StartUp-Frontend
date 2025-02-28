import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

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
        rating: 3,
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
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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

const AllReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    // Get current reviews
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-4/5 mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-12">Member Reviews</h1>
            
            <div className="space-y-6">
                {currentReviews.map((review) => (
                    <div key={review.id} className="border bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="flex flex-col items-center text-center">
                                <img 
                                    src={review.user.image} 
                                    alt={review.user.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <h3 className="font-bold text-xl mb-2">{review.user.name}</h3>
                                <p className="text-gray-600 mb-2">{review.user.profession}</p>
                                <p className="text-gray-500 mb-4">{review.user.company}</p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar 
                                            key={index}
                                            className={index < review.rating ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    {new Date(review.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        
                        <div className="md:w-2/3 flex items-center">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded-lg ${
                            currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllReviews;