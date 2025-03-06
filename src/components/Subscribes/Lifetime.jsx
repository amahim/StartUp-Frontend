import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Lifetime = () => {
    const benefits = [
        "Unlimited access to all case studies",
        "Premium tools and resources",
        "Private community access",
        "Monthly live Q&A sessions",
        "Early access to new features",
        "Priority support",
        "Downloadable templates",
        "Custom business analysis"
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="w-4/5 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Lifetime Pro Access</h1>
                    <p className="text-xl text-gray-600">One-time payment, lifetime of benefits</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-black text-white p-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">$499</h2>
                        <p className="text-gray-300">One-time payment</p>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <FiCheck className="text-green-500 mr-3" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Link 
                                to="/signin" 
                                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Get Lifetime Access
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lifetime;