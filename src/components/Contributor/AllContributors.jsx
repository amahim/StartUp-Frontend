import React from "react";
import { Link } from "react-router-dom";

const contributors = [
  {
    id: 1,
    name: "David Wilson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    post: "Senior Tech Editor",
    expertise: "Technology & Innovation",
    contributions: 47,
    bio: "David brings 10 years of experience in technology journalism",
  },
  {
    id: 2,
    name: "Lisa Zhang",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    post: "Business Strategy Editor",
    expertise: "Business Development",
    contributions: 35,
    bio: "Former consultant turned editor specializing in business strategy",
  },
  {
    id: 3,
    name: "James Anderson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    post: "Startup Success Editor",
    expertise: "Entrepreneurship",
    contributions: 52,
    bio: "Serial entrepreneur helping others share their startup stories",
  },
];

const AllContributors = () => {
  return (
    <div className=" py-10">
      {/* form */}
      <div className="flex flex-col justify-center gap-3 bg-base-300 p-10">
         <p className="text-2xl md:text-3xl text-black font-bold text-center">Join as a contributor</p>
        <div className="join flex justify-center">
          <input className="input join-item input-bordered" placeholder="Email" />
          <button className="btn join-item rounded-r-xl text-white bg-black ">Be a contributor</button>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center my-10">Our Contributors</h1>

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={contributor.image}
              alt={contributor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{contributor.name}</h2>
              <p className="text-gray-600 mb-2">{contributor.post}</p>
              <p className="text-sm text-gray-500 mb-4">
                {contributor.expertise}
              </p>
              <Link
                to={`/contributors/${contributor.id}`}
                className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContributors;
