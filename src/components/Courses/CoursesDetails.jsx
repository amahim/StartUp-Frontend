import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

const CoursesDetails = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <div className="text-center py-20">Course not found</div>;
    }

    return (
        <div className="w-4/5 mx-auto py-10">
            <Link to="/courses" className="bg-blue-300 rounded-full text-white px-2 py-1 hover:underline mb-4 inline-block">
                ← Back to courses
            </Link>

            <div className="grid md:grid-cols-2 gap-10 mt-4">
                <div>
                    <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full rounded-xl shadow-lg"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                            {course.level}
                        </span>
                        <span className="text-gray-600">
                            {course.duration}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    <p className="text-xl text-gray-600 mb-6">{course.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">★</span>
                            <span className="font-bold">{course.rating}</span>
                        </div>
                        <span className="text-gray-600">{course.students} students enrolled</span>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                        <h3 className="text-xl font-bold mb-4">What you'll learn</h3>
                        <ul className="space-y-3">
                            {course.learnings.map((learning, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    {learning}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="btn bg-black text-white w-full">
                        Enroll Now for {course.price}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;