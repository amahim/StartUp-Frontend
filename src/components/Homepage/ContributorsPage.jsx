import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

const ContributorsPage = () => {
  return (
    <div className="w-4/5 mx-auto py-10">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Expert Contributors</h2>
          <p className="text-xl text-gray-600">
            Learn from industry experts who share their knowledge and experiences
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mb-12"
        >
          {contributors.map((contributor) => (
            <SwiperSlide key={contributor.id}>
              <Link to={`/contributors/${contributor.id}`}>
                <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center">{contributor.name}</h3>
                  <p className="text-gray-600 text-center">{contributor.post}</p>
                  <p className="text-sm text-gray-500 text-center mt-2">{contributor.expertise}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Want to be a contributor?</h2>
          <Link
            to="/contributors"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContributorsPage;
