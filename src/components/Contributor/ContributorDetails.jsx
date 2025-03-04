import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiBook, FiAward, FiBriefcase } from 'react-icons/fi';

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

const ContributorDetails = () => {
  const { id } = useParams();
  const contributor = contributors.find(c => c.id === parseInt(id));

  if (!contributor) {
    return <div className="text-center py-20">Contributor not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto py-10">
      <Link 
        to="/contributors" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
      >
        <FiArrowLeft />
        <span>Back to Contributors</span>
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img 
              src={contributor.image} 
              alt={contributor.name}
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold mb-3">{contributor.name}</h1>
              <p className="text-xl text-gray-600 mb-2">{contributor.post}</p>
              <div className="flex items-center gap-2 text-gray-500">
                <FiBriefcase />
                <span>{contributor.expertise}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <FiBook className="text-blue-600 text-xl" />
                <h2 className="text-xl font-bold">Biography</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {contributor.bio}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <FiAward className="text-green-600 text-xl" />
                <h2 className="text-xl font-bold">Contributions</h2>
              </div>
              <div className="text-4xl font-bold text-green-600">
                {contributor.contributions}
              </div>
              <p className="text-gray-600">Articles published</p>
            </div>
          </div>

          {/* You can add more sections here like Recent Articles, Featured Work, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ContributorDetails;