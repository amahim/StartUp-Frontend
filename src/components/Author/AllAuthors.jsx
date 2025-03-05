import React from "react";
import { Link } from "react-router-dom";

const authors = [
  {
    id: 1,
    name: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    honor: "Pulitzer Prize Winner",
    awards: ["Pulitzer Prize 2023", "National Book Award 2022"],
    biography:
      "Emily Thompson is a renowned author with over 15 years of experience in business and technology writing. Her work has been featured in major publications including The New York Times and Forbes.",
    specialization: "Business & Technology",
    publications: [
      "The Future of AI",
      "Digital Transformation",
      "Startup Success Stories",
    ],
    education: "Ph.D. in Business Administration from Stanford University",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    honor: "Best-Selling Author",
    awards: ["Forbes 30 Under 30", "Tech Writer of the Year 2023"],
    biography:
      "Michael Chen is a best-selling author specializing in startup culture and entrepreneurship. His books have sold over 1 million copies worldwide.",
    specialization: "Entrepreneurship",
    publications: [
      "Zero to One Million",
      "The Startup Playbook",
      "Founder's Journey",
    ],
    education: "MBA from Harvard Business School",
  },
  {
    id: 3,
    name: "Sarah Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    honor: "Technology Journalist of the Year",
    awards: ["Tech Journalism Excellence Award", "Digital Innovation Prize"],
    biography:
      "Sarah Rodriguez is a technology journalist and author known for her in-depth analysis of emerging tech trends and their impact on business.",
    specialization: "Technology & Innovation",
    publications: [
      "The AI Revolution",
      "Tech Trends 2024",
      "Innovation at Scale",
    ],
    education: "MS in Technology Management from MIT",
  },
];

const AllAuthors = () => {
  return (
    <div className=" py-10">
      {/* form */}
      <div className="flex flex-col justify-center gap-3 bg-base-300 p-10">
         <p className="text-2xl md:text-3xl text-black font-bold text-center">Sign up to be an author</p>
        <div className="join flex justify-center">
          <input className="input join-item input-bordered" placeholder="Email" />
          <button className="btn join-item rounded-r-xl text-white bg-black ">Be an Author</button>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center my-10">
        Our Distinguished Contributors
      </h1>

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-white text-xl font-bold">{author.name}</h2>
                <p className="text-gray-200">{author.honor}</p>
              </div>
            </div>

            <div className="p-4 text-center">
              <Link
                to={`/contributors/${author.id}`}
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAuthors;
