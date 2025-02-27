import React from 'react';
import { MdBusinessCenter } from 'react-icons/md';
import bannerImg from '../../assets/bannerImg1.jpg'
const Banner = () => {
    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0'>
                {/* text */}
                <div className='flex flex-col gap-4 md:w-3/5'>
                    <div className='flex gap-2 items-center text-lg font-medium text-black'>
                        <p><MdBusinessCenter /></p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-black'>Start your idea today<br />Get Ready For Work</h1>
                    </div>
                    <div>
                        <p className='text-lg font-medium'>Learn from startup failures and successes in 5 min or less</p>
                    </div>
                    <div>
                        <p className='text-md text-gray-600'>The stories, ideas, and tactics that will make you a 10x better founder</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-2'>
                    <input type="text" placeholder="Enter your email" className="input input-bordered rounded-b-none md:rounded-xl" />
                        <button className='btn bg-black text-white rounded-t-none md:rounded-xl border md:border-none'>Subscribe for free</button>
                    </div>
                </div>
                {/* img */}
                <div className='md:w-2/5'>
                    <img src={bannerImg} alt="" className='rounded-xl shadow-xl' />
                </div>
            </div>
        </div>
    );
};

export default Banner;