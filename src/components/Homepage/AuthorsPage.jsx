import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiAward, FiBook } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

const authors = [
  {
    id: 1,
    name: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    honor: "Pulitzer Prize Winner",
    awards: ["Pulitzer Prize 2023", "National Book Award 2022"],
    biography: "Emily Thompson is a renowned author with over 15 years of experience in business and technology writing.",
    specialization: "Business & Technology",
    publications: ["Digital Transformation", "Future of Work", "Tech Leadership"],
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    honor: "Best-Selling Author",
    awards: ["Forbes 30 Under 30", "Tech Writer of the Year 2023"],
    biography: "Michael Chen is a best-selling author specializing in startup culture and entrepreneurship.",
    specialization: "Entrepreneurship",
    publications: ["Startup Playbook", "Growth Mindset", "Venture Success"],
  },
  {
    id: 3,
    name: "Sarah Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    honor: "Technology Journalist of the Year",
    awards: ["Tech Journalism Excellence Award", "Digital Innovation Prize"],
    biography: "Sarah Rodriguez is a technology journalist and author known for her in-depth analysis of emerging tech trends.",
    specialization: "Technology & Innovation",
    publications: ["The AI Revolution", "Tech Trends 2024", "Innovation at Scale"],
  }
];

const AuthorsPage = () => {
    return (
        <div className="w-4/5 mx-auto py-10">
            <h2 className="text-4xl font-bold text-center mb-4">Our Distinguished Authors</h2>
            <p className="text-gray-600 text-center mb-12">Learn from the best minds in business and technology</p>
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mb-12"
            >
                {authors.map((author) => (
                    <SwiperSlide key={author.id}>
                        <Link to={`/authors/${author.id}`}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-md mx-auto border border-gray-100">
                            <div className="relative">
                                <img
                                    src={author.image}
                                    alt={author.name}
                                    className="w-full h-72 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
                                    <h2 className="text-white text-2xl font-bold mb-1">{author.name}</h2>
                                    <p className="text-gray-200 flex items-center gap-2">
                                        <FiAward className="text-yellow-400" />
                                        {author.honor}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                                        <FiBook />
                                        Notable Publications
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {author.publications.map((pub, index) => (
                                            <span 
                                                key={index}
                                                className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
                                            >
                                                {pub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 mb-6 line-clamp-2">{author.biography}</p>
                                
                                {/* <Link
                                    to={`/authors/${author.id}`}
                                    className="inline-block w-full bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors text-center"
                                >
                                    View Full Profile
                                </Link> */}
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-center">
                <Link
                    to="/authors"
                    className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                    View All Authors
                </Link>
            </div>
        </div>
    );
};

export default AuthorsPage;