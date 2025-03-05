import React from 'react';
import { FiArrowRight, FiTarget, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StartGrowMonetize = () => {
    const sections = [
        {
            id: 1,
            title: "Start",
            icon: <FiTarget className="text-3xl" />,
            color: "bg-blue-50",
            iconColor: "text-blue-600",
            description: "Launch your business with confidence",
            steps: [
                {
                    title: "Validate Your Idea",
                    content: "Before investing time and money, validate your business idea through market research, customer interviews, and MVP testing.",
                    resources: [
                        "Market Research Templates",
                        "Customer Interview Guide",
                        "MVP Development Checklist"
                    ]
                },
                {
                    title: "Legal Foundation",
                    content: "Set up the proper legal structure and protect your business interests from day one.",
                    resources: [
                        "Business Structure Guide",
                        "Registration Checklist",
                        "Legal Document Templates"
                    ]
                },
                {
                    title: "Build Your Brand",
                    content: "Create a compelling brand identity that resonates with your target audience.",
                    resources: [
                        "Brand Strategy Workbook",
                        "Visual Identity Guide",
                        "Brand Voice Templates"
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Grow",
            icon: <FiTrendingUp className="text-3xl" />,
            color: "bg-green-50",
            iconColor: "text-green-600",
            description: "Scale your business strategically",
            steps: [
                {
                    title: "Marketing Strategy",
                    content: "Develop a comprehensive marketing plan to reach and engage your target audience.",
                    resources: [
                        "Digital Marketing Playbook",
                        "Content Strategy Guide",
                        "Social Media Calendar"
                    ]
                },
                {
                    title: "Customer Acquisition",
                    content: "Implement effective strategies to acquire and retain customers.",
                    resources: [
                        "Sales Funnel Templates",
                        "Email Marketing Guide",
                        "CRM Best Practices"
                    ]
                },
                {
                    title: "Team Building",
                    content: "Build and manage a high-performing team to support your growth.",
                    resources: [
                        "Hiring Playbook",
                        "Team Structure Guide",
                        "Remote Work Policies"
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Monetize",
            icon: <FiDollarSign className="text-3xl" />,
            color: "bg-purple-50",
            iconColor: "text-purple-600",
            description: "Optimize revenue streams",
            steps: [
                {
                    title: "Revenue Models",
                    content: "Explore and implement different revenue streams for your business.",
                    resources: [
                        "Pricing Strategy Guide",
                        "Revenue Model Templates",
                        "Monetization Checklist"
                    ]
                },
                {
                    title: "Financial Management",
                    content: "Manage your finances effectively to ensure sustainable growth.",
                    resources: [
                        "Financial Planning Templates",
                        "Cash Flow Management Guide",
                        "Investment Strategy"
                    ]
                },
                {
                    title: "Scale Operations",
                    content: "Optimize operations to support increased revenue and growth.",
                    resources: [
                        "Operations Playbook",
                        "Automation Guide",
                        "Scaling Checklist"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-black text-white py-20">
                <div className="w-4/5 mx-auto text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Your Complete Business Journey
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        From idea to profitable business: Everything you need to succeed
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-4/5 mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: section.id * 0.2 }}
                            className={`${section.color} rounded-xl p-6 shadow-lg`}
                        >
                            <div className={`${section.iconColor} mb-4`}>
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <p className="text-gray-600 mb-6">{section.description}</p>
                            
                            <div className="space-y-6">
                                {section.steps.map((step, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4 shadow">
                                        <h3 className="font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{step.content}</p>
                                        <div className="space-y-2">
                                            {step.resources.map((resource, idx) => (
                                                <Link 
                                                    key={idx}
                                                    to="/resources" 
                                                    className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                                                >
                                                    <FiArrowRight className="mr-2" />
                                                    {resource}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartGrowMonetize;