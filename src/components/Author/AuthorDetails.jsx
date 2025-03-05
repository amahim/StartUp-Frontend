import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiAward, FiBook, FiUser } from "react-icons/fi";

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

const AuthorDetails = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === parseInt(id));

  if (!author) {
    return <div className="text-center py-20">Author not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto py-10">
      <Link to="/contributors" className="flex items-center text-gray-600 mb-6">
        <FiArrowLeft className="mr-2" /> Back to  Contributors
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{author.honor}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <FiUser className="mr-2" /> Biography
                </h2>
                <p className="text-gray-700">{author.biography}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <FiAward className="mr-2" /> Awards
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  {author.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <FiBook className="mr-2" /> Publications
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  {author.publications.map((pub, index) => (
                    <li key={index}>{pub}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-gray-600">
                  <strong>Specialization:</strong> {author.specialization}
                </p>
                <p className="text-gray-600">
                  <strong>Education:</strong> {author.education}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
