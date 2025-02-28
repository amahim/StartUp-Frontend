import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from 'react-icons/fi';

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

const GuideDetails = () => {
    const { id } = useParams();
    const guide = guides.find(g => g.id === parseInt(id));

    if (!guide) {
        return <div>Guide not found</div>;
    }

    return (
        <div className="w-4/5 mx-auto py-10">
            <Link to="/guides" className="flex items-center text-gray-600 mb-6">
                <FiArrowLeft className="mr-2" /> Back to Guides
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-[400px] object-cover"
                />
                
                <div className="p-8">
                    <div className="flex text-start md:flex-row flex-col  gap-2 md:gap-4 mb-4 text-gray-600">
                        <span className="items-center flex gap-2">
                            <FiUser  /> {guide.author}
                        </span>
                        <span className="items-center flex gap-2">
                            <FiCalendar  /> {guide.date}
                        </span>
                        <span className="items-center flex gap-2">
                            <FiClock  /> {guide.readTime}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold mb-6">{guide.title}</h1>
                    
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4">Steps to Success</h2>
                        <ol className="list-decimal pl-6 mb-8">
                            {guide.steps.map((step, index) => (
                                <li key={index} className="mb-2">{step}</li>
                            ))}
                        </ol>

                        <div className="mb-8">
                            {guide.content}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {guide.relatedTopics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideDetails;