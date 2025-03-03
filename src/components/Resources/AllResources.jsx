import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const resourcesData = [
    {
        id: 1,
        title: "Best Business Models for 2024",
        category: "Business",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
        description: "Explore the most profitable and sustainable business models for entrepreneurs",
        author: "Michael Ross",
        date: "March 15, 2024",
        readTime: "10 min read"
    },
    {
        id: 2,
        title: "AI Tools for Entrepreneurs",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
        description: "Essential AI tools and platforms to streamline your business operations",
        author: "Sarah Chen",
        date: "March 14, 2024",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Side Hustle Ideas That Scale",
        category: "Side Hustle",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
        description: "Proven side hustle ideas that can grow into full-time businesses",
        author: "Alex Thompson",
        date: "March 13, 2024",
        readTime: "6 min read"
    }
];

const AllResources = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Business', 'Tech', 'Money', 'Side Hustle'];

    const filteredResources = resourcesData.filter(resource => {
        return selectedCategory === 'All' || resource.category === selectedCategory;
    });

    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Startup Resources</h1>
                <p className="text-xl text-gray-600">Everything you need to start and grow your business</p>
            </div>

            <div className="mb-8">
                <select
                    className="select select-bordered w-full"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option disabled>Browse by topics</option>
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