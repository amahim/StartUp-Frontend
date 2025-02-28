import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center">
      <div className="w-4/5 mx-auto text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          The <span className="underline">All-In-One</span> Newsletter for Startup Founders
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          90% of startups fail. Learn how not to with our weekly guides and stories.
          <span className="font-bold ml-2">Join +40,000 other startup founders!</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Link to="/packages" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;