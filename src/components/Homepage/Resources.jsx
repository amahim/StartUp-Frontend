import React from 'react';
import { Link } from 'react-router-dom';


const Resources = () => {
    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" 
                    alt="Resources Banner"
                    className="w-full h-[300px] object-cover rounded-xl"
                />
                <div className=" absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Startup Resources</h2>
                    <p className="text-white text-center text-xl mb-6">Essential tools and guides for your startup journey</p>
                    <Link to="/resources" className="btn bg-white text-black hover:bg-gray-200">
                        View All Resources
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resources;