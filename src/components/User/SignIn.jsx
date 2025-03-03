import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signin logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <Link to="/" className='text-white bg-[#00000071] px-2 rounded-full text-center items-center gap-2 flex justify-center w-48 mx-auto mb-4'><AiOutlineHome />Back to home</Link>
                
                <h2 className="text-3xl font-bold text-center mb-6 text-black"> Sign In</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="">
                        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-4">
                    No account? {' '}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <button className="flex justify-center items-center py-2 px-4 border rounded-md hover:bg-gray-50">
                            <FaGoogle className="text-xl" />
                        </button>
                        <button className="flex justify-center items-center py-2 px-4 border rounded-md hover:bg-gray-50">
                            <FaFacebook className="text-xl " />
                        </button>
                        <button className="flex justify-center items-center py-2 px-4 border rounded-md hover:bg-gray-50">
                            <FaTwitter className="text-xl " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;