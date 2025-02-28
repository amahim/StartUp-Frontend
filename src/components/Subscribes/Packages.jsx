import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {
            id: 1,
            name: "Starter",
            monthlyPrice: 9.99,
            yearlyPrice: 99.99,
            features: [
                "10 Case Studies",
                "Basic Analytics",
                "Community Access",
                "Email Support",
                "Weekly Newsletter",
                "Basic Templates"
            ],
            recommended: false,
            color: "bg-white"
        },
        {
            id: 2,
            name: "Professional",
            monthlyPrice: 29.99,
            yearlyPrice: 299.99,
            features: [
                "All Case Studies",
                "Advanced Analytics",
                "Priority Support",
                "Exclusive Workshops",
                "1-on-1 Mentoring",
                "Private Community"
            ],
            recommended: true,
            color: "bg-black"
        },
        {
            id: 3,
            name: "Enterprise",
            monthlyPrice: 99.99,
            yearlyPrice: 999.99,
            features: [
                "Everything in Professional",
                "Custom Solutions",
                "API Access",
                "Dedicated Account Manager",
                "Team Training",
                "Custom Reporting"
            ],
            recommended: false,
            color: "bg-white"
        }
    ];

    return (
        <div className="w-4/5 mx-auto py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
                <p className="text-xl text-gray-600 mb-8">Get unlimited access to all our resources</p>
                
                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-4">
                    <span className={`text-lg ${!isYearly ? 'font-bold' : 'text-gray-500'}`}>Monthly</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={isYearly}
                            onChange={() => setIsYearly(!isYearly)}
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black"></div>
                    </label>
                    <span className={`text-lg ${isYearly ? 'font-bold' : 'text-gray-500'}`}>
                        Yearly <span className="text-green-500 text-sm">(Save 20%)</span>
                    </span>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-16 md:gap-8">
                {packages.map((pkg) => (
                    <div 
                        key={pkg.id} 
                        className={`rounded-2xl shadow-lg p-8 ${pkg.color} ${pkg.recommended ? 'text-white ring-2 ring-black transform scale-105' : 'border-2'} relative flex flex-col h-full`}
                    >
                        {pkg.recommended && (
                            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm">
                                Recommended
                            </span>
                        )}
                        
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                                </span>
                                <span className={`${pkg.recommended ? 'text-gray-300' : 'text-gray-500'}`}>
                                    /{isYearly ? 'year' : 'month'}
                                </span>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <svg 
                                            className={`w-5 h-5 ${pkg.recommended ? 'text-white' : 'text-green-500'}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <button 
                                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                                    pkg.recommended 
                                        ? 'bg-white text-black hover:bg-gray-100' 
                                        : 'bg-black text-white hover:bg-gray-800'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-12">
                <p className="text-gray-600">
                    30-day money-back guarantee. No questions asked.
                </p>
            </div>
        </div>
    );
};

export default Packages;