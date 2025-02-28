import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const guides = [
    {
        id: 1,
        title: "How to Start a Business in 2024",
        category: "Business Formation",
        author: "Michael Ross",
        date: "March 15, 2024",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
        summary: "A comprehensive guide to launching your business, from idea to execution",
        steps: [
            "Research Your Business Idea",
            "Write a Business Plan",
            "Secure Funding",
            "Register Your Business",
            "Set Up Operations"
        ],
        content: "Starting a business requires careful planning and execution...",
        relatedTopics: ["Entrepreneurship", "Business Planning", "Startup"]
    },
    {
        id: 2,
        title: "Complete Guide to Business Registration",
        category: "Legal",
        author: "Sarah Chen",
        date: "March 14, 2024",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500",
        summary: "Learn about different business structures and how to register your company",
        steps: [
            "Choose Business Structure",
            "Register Business Name",
            "Get Tax IDs",
            "Apply for Licenses",
            "Open Business Account"
        ],
        content: "Choosing the right business structure is crucial for your success...",
        relatedTopics: ["Legal", "Business Structure", "Registration"]
    },
    {
        id: 3,
        title: "Marketing Your Startup: A Beginner's Guide",
        category: "Marketing",
        author: "Emily Rodriguez",
        date: "March 16, 2024",
        readTime: "18 min read",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500",
        summary: "Learn effective marketing strategies to grow your startup from day one",
        steps: [
            "Define Your Target Audience",
            "Create a Brand Identity",
            "Develop Content Strategy",
            "Set Up Social Media Presence",
            "Implement SEO Best Practices",
            "Track and Analyze Results"
        ],
        content: "In today's digital age, marketing your startup effectively is crucial for success. This comprehensive guide walks you through essential marketing strategies that won't break the bank...",
        relatedTopics: ["Digital Marketing", "Social Media", "Brand Building", "Growth Strategy"]
    }
];


const AllGuides = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Business Formation', 'Legal', 'Marketing', 'Finance', 'Operations'];

    // Add filtering logic
    const filteredGuides = guides.filter(guide => {
        const matchesSearch = 
            guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guide.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="w-4/5 mx-auto py-10">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Startup Guides</h1>
                <p className="text-xl text-gray-600">Everything you need to know about starting and growing your business</p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search guides..."
                        className="input input-bordered w-full pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="select select-bordered w-full md:w-48"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Guides Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map(guide => (
                    <Link
                        to={`/guides/${guide.id}`}
                        key={guide.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={guide.image}
                            alt={guide.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                    {guide.category}
                                </span>
                                <span className="text-gray-500 text-sm">{guide.readTime}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2">{guide.title}</h2>
                            <p className="text-gray-600 mb-4">{guide.summary}</p>
                            <div className="flex items-center text-blue-600">
                                Read Guide <FiArrowRight className="ml-2" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllGuides;