import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const courses = [
    {
        id: 1,
        title: "Building a 7-Figure SaaS Business",
        instructor: "Alex Thompson",
        company: "SaaSify",
        price: "$299",
        duration: "6 weeks",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
        topics: [
            "SaaS Business Model",
            "Customer Acquisition",
            "Product Market Fit"
        ],
        rating: 4.8,
        students: 1240,
        description: "Learn how to build and scale a successful SaaS business from ideation to $1M+ ARR.",
        learnings: [
            "How to validate your SaaS idea",
            "Building an MVP that sells",
            "Creating a scalable pricing strategy",
            "Customer retention tactics"
        ]
    },
    {
        id: 2,
        title: "E-commerce Empire Blueprint",
        instructor: "Sarah Chen",
        company: "ShopifyPro",
        price: "$399",
        duration: "8 weeks",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
        topics: [
            "Product Selection",
            "Supply Chain Management",
            "Marketing Strategy"
        ],
        rating: 4.9,
        students: 2150,
        description: "A comprehensive guide to building a profitable e-commerce business from scratch.",
        learnings: [
            "Finding winning products",
            "Setting up your store",
            "Facebook ads mastery",
            "Email marketing automation"
        ]
    },
    {
        id: 3,
        title: "Content Creator to $100K/Month",
        instructor: "Mike Davis",
        company: "ContentPro",
        price: "$199",
        duration: "4 weeks",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
        topics: [
            "Content Strategy",
            "Monetization",
            "Audience Building"
        ],
        rating: 4.7,
        students: 890,
        description: "Transform your content creation skills into a six-figure business.",
        learnings: [
            "Content monetization strategies",
            "Building multiple income streams",
            "Personal brand development",
            "Scaling your content business"
        ]
    }
];

const AllCourses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All');

    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = 
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
        return matchesSearch && matchesLevel;
    });

    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Learn From Successful Founders</h1>
                <p className="text-xl text-gray-600">Step-by-step courses taught by proven entrepreneurs</p>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="py-3 px-4 rounded-lg border focus:ring-2 focus:ring-blue-500"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                >
                    {levels.map(level => (
                        <option key={level} value={level}>{level}</option>
                    ))}
                </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                        <div className="relative">
                            <img 
                                src={course.image} 
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold">
                                {course.price}
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                                    {course.level}
                                </span>
                                <span className="text-gray-600 text-sm">
                                    {course.duration}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            
                            <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="font-bold">{course.rating}</span>
                                    <span className="text-gray-600">({course.students} students)</span>
                                </div>
                            </div>
                    
                            <Link to={`/course/${course.id}`} className='btn bg-black text-white rounded-xl border-none flex mt-2'>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;