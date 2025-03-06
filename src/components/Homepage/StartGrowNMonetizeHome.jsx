import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const StartGrowNMonetizeHome = () => {
    return (
        <div className="w-4/5 mx-auto py-16">
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl text-white p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Your Complete Roadmap to Success
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Follow our proven 3-step framework to build, grow, and monetize your startup. Join thousands of successful founders who've used our methodology.
                    </p>
                    <Link 
                        to="/start-grow-monetize" 
                        className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Explore Framework <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartGrowNMonetizeHome;