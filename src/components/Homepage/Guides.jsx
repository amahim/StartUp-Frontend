import React from 'react';
import { Link } from 'react-router-dom';

const Guides = () => {
    return (
        <div className="w-4/5 mx-auto py-10">
            <div className="relative border shadow-xl rounded-xl">
                <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" 
                    alt="Guides Banner"
                    className="w-full h-[300px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Startup Guides</h2>
                    <p className="text-white text-center text-xl mb-6">Step-by-step guides to launch your business</p>
                    <Link to="/guides" className="btn bg-white text-black hover:bg-gray-200">
                        View All Guides
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Guides;