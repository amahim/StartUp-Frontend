import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

const UpgradeToProLife = () => {
    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="relative overflow-hidden rounded-2xl p-10 lg:p-0">
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500" 
                    alt="Pro Banner"
                    className="w-full h-[400px] object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 flex items-center">
                    <div className="w-full md:w-2/3 px-8 md:px-16">
                        <div className="flex items-center gap-2 mb-4">
                            <FiStar className="text-yellow-400 text-2xl" />
                            <span className="text-yellow-400 font-semibold">LIFETIME ACCESS</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Upgrade to Pro for Lifetime Access
                        </h2>
                        
                        <p className="text-xl text-gray-300 mb-8">
                            Get unlimited access to all our premium resources, tools, and community features. One-time payment, lifetime of benefits.
                        </p>
                        
                        <Link 
                            to="/lifetime-upgrade" 
                            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            Get Lifetime Access
                            <FiStar className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradeToProLife;