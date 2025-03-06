import React from 'react';
import { FiCode, FiTrello, FiMail, FiPieChart, FiEdit, FiServer } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Tools = () => {
    const tools = [
        {
            id: 1,
            name: "Startup Validator",
            icon: <FiPieChart className="text-3xl" />,
            description: "Validate your startup idea with market research tools",
            category: "Planning"
        },
        {
            id: 2,
            name: "Business Plan Builder",
            icon: <FiEdit className="text-3xl" />,
            description: "Create professional business plans in minutes",
            category: "Planning"
        },
        {
            id: 3,
            name: "Email Marketing Suite",
            icon: <FiMail className="text-3xl" />,
            description: "Grow your audience with powerful email tools",
            category: "Marketing"
        },
        {
            id: 4,
            name: "Project Manager",
            icon: <FiTrello className="text-3xl" />,
            description: "Keep your startup organized and on track",
            category: "Management"
        },
        {
            id: 5,
            name: "Code Repository",
            icon: <FiCode className="text-3xl" />,
            description: "Access ready-to-use code snippets and templates",
            category: "Development"
        },
        {
            id: 6,
            name: "API Directory",
            icon: <FiServer className="text-3xl" />,
            description: "Find and integrate essential startup APIs",
            category: "Development"
        }
    ];

    return (
        <div className="w-4/5 mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-4">Essential Startup Tools</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Everything you need to build and grow your startup</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                    <Link to="/packages" key={tool.id}>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
                            <div className="text-blue-600 mb-4">{tool.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                            <p className="text-gray-600">{tool.description}</p>
                            <span className="inline-block mt-4 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                {tool.category}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tools;