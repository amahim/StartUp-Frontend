import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <Link to="/" className='text-white bg-[#00000071] px-2 rounded-full text-center flex justify-center w-36 mx-auto mb-4'>Back to home</Link>
                <h2 className="text-3xl font-bold text-center mb-6 text-black">Sign Up</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 mb-2">Profile Picture</label>
                        <input 
                            type="file" 
                            accept="image/*"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-2 rounded-md "
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-4">
                    Already have an account? {' '}
                    <Link to="/signin" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;