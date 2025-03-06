import React from 'react';
import { FiUsers, FiBookOpen, FiAward, FiTrendingUp } from 'react-icons/fi';

const StatsNDetailing = () => {
    const stats = [
        {
            icon: <FiUsers className="text-4xl text-blue-600" />,
            number: "40,000+",
            label: "Active Members",
            description: "Entrepreneurs learning and growing together"
        },
        {
            icon: <FiBookOpen className="text-4xl text-green-600" />,
            number: "1,000+",
            label: "Case Studies",
            description: "Real success stories and lessons learned"
        },
        {
            icon: <FiAward className="text-4xl text-purple-600" />,
            number: "92%",
            label: "Success Rate",
            description: "Members reporting business growth"
        },
        {
            icon: <FiTrendingUp className="text-4xl text-red-600" />,
            number: "$50M+",
            label: "Revenue Generated",
            description: "By our member startups in 2023"
        }
    ];

    return (
        <div className="w-4/5 mx-auto py-16 ">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
                <p className="text-xl text-gray-600">Helping entrepreneurs succeed since 2020</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="border bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="flex justify-center mb-4">{stat.icon}</div>
                        <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                        <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                        <p className="text-gray-600">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsNDetailing;