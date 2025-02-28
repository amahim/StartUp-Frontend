import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const resourcesData = [
    {
        id: 1,
        title: "Best Degrees for Entrepreneurs",
        category: "Education",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
        description: "Discover the best degrees for entrepreneurs, from business administration to computer science",
        author: "Michael Ross",
        date: "March 15, 2024",
        readTime: "10 min read"
    },
    {
        id: 2,
        title: "Top Startup Conferences",
        category: "Events",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
        description: "Explore the top startup conferences to attend in 2024 to network and learn",
        author: "Sarah Chen",
        date: "March 14, 2024",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Best Gifts for Entrepreneurs",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
        description: "Find the perfect gifts for entrepreneurs and business owners",
        author: "Alex Thompson",
        date: "March 13, 2024",
        readTime: "6 min read"
    }
];

const AllResources = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Education', 'Events', 'Lifestyle', 'Tools', 'Software'];

    const filteredResources = resourcesData.filter(resource => {
        const matchesSearch = 
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Startup Resources</h1>
                <p className="text-xl text-gray-600">Everything you need to start and grow your business</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search resources..."
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(resource => (
                    <Link
                        to={`/resources/${resource.id}`}
                        key={resource.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                    {resource.category}
                                </span>
                                <span className="text-gray-500 text-sm">{resource.readTime}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                            <p className="text-gray-600 mb-4">{resource.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>By {resource.author}</span>
                                <span className="mx-2">•</span>
                                <span>{resource.date}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllResources;