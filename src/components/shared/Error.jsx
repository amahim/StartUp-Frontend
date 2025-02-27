import React from 'react';
import ErrorImg from '../../assets/error.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
            <img src={ErrorImg} alt="" className=' w-[500px]' />
            <Link to="/" className='btn w-36 bg-blue-600 text-white rounded-xl border-none'>Back to home</Link>
        </div>
    );
};

export default Error;