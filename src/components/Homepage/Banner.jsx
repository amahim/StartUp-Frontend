import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { motion } from "framer-motion";
// import bannerImg from '../../assets/bannerImg1.jpg'
import { Link } from "react-router-dom";
import bannerLottie from "../../assets/bannerLottie.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="w-4/5 mx-auto mt-5 md:py-20 py-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
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
                        <Link to="/signin" className='btn bg-black text-white rounded-t-none md:rounded-xl border md:border-none'>Start Now</Link>
                    </div>
                </div>
                {/* animations text */}
                
         {/* <div className="flex flex-col gap-4 md:w-3/5"> */}
         
          {/* <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex gap-2 items-center text-lg font-medium text-black"
          >
            <p>
              <MdBusinessCenter />
            </p>
            <p>Lorem Ipsum</p>
          </motion.div> */}

          {/* Title (Coming from Left) */}
          {/* <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-black">
              Start your idea today
              <br />
              Get Ready For Work
            </h1>
          </motion.div> */}

          {/* Smaller text (Coming from Right) */}
          {/* <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            <p className="text-lg font-medium">
              Learn from startup failures and successes in 5 min or less
            </p>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          >
            <p className="text-md text-gray-600">
              The stories, ideas, and tactics that will make you a 10x better
              founder
            </p>
          </motion.div> */}

          {/* Input + Button (Coming from Right) */}
          {/* <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col md:flex-row md:gap-2"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered rounded-b-none md:rounded-xl"
            />
            <Link
              to="/signin"
              className="btn bg-black text-white rounded-t-none md:rounded-xl border md:border-none"
            >
              Start Now
            </Link>
          </motion.div> */}
        {/* </div>  */}

        {/* img */}
         {/* Lottie Animation (Fades in & Slides Up) */}
         {/* <motion.div */}
         <div
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                className="md:w-2/5"
            >
                <Lottie animationData={bannerLottie} />
                

                </div>
            {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Banner;
