import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from "react-icons/fi";

const resourcesData = [
  {
    id: 1,
    title: "Best Degrees for Entrepreneurs",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    description:
      "Discover the best degrees for entrepreneurs, from business administration to computer science",
    author: "Michael Ross",
    date: "March 15, 2024",
    readTime: "10 min read",
    content: `
            When it comes to entrepreneurship, having the right educational background can provide a strong foundation for success. While a degree isn't necessary to start a business, certain academic paths can equip you with valuable knowledge and skills.

            Here are the top degrees that can benefit aspiring entrepreneurs:

            1. Business Administration (BBA/MBA)
            - Provides fundamental business knowledge
            - Covers management, marketing, and finance
            - Offers networking opportunities

            2. Computer Science
            - Essential for tech startups
            - Develops problem-solving skills
            - Enables technical product development

            3. Economics
            - Understanding market dynamics
            - Analysis of business trends
            - Financial decision-making skills

            4. Engineering
            - Product development expertise
            - Innovation and design thinking
            - Technical problem-solving
        `,
    relatedTopics: ["Education", "Career Development", "Entrepreneurship"],
    additionalResources: [
      {
        title: "Online Business Courses",
        link: "/resources/online-courses",
      },
      {
        title: "Entrepreneurship Certifications",
        link: "/resources/certifications",
      },
    ],
  },
  {
    id: 2,
    title: "Top Startup Conferences to Attend",
    category: "Events",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
    description:
      "Explore the most influential startup conferences that every entrepreneur should consider attending in 2024",
    author: "Sarah Chen",
    date: "March 14, 2024",
    readTime: "8 min read",
    content: `
            Attending the right conferences can be a game-changer for your startup. These events offer invaluable networking opportunities, insights from industry leaders, and potential investor connections.

            Top Conferences for 2024:

            1. TechCrunch Disrupt
            - When: September 2024
            - Where: San Francisco, CA
            - Highlights:
              * Startup Battlefield competition
              * Networking with VCs
              * Expert-led workshops

            2. Web Summit
            - When: November 2024
            - Where: Lisbon, Portugal
            - Highlights:
              * Global startup showcase
              * Industry leader keynotes
              * One-on-one investor meetings

            3. SXSW
            - When: March 2024
            - Where: Austin, Texas
            - Highlights:
              * Startup pitch competitions
              * Interactive technology demos
              * Creative networking events

            4. Collision Conference
            - When: June 2024
            - Where: Toronto, Canada
            - Highlights:
              * Startup showcase
              * Mentor sessions
              * Industry roundtables
        `,
    relatedTopics: ["Networking", "Events", "Startup Growth", "Investment"],
    additionalResources: [
      {
        title: "Conference Networking Guide",
        link: "/resources/networking-guide",
      },
      {
        title: "Pitch Deck Templates",
        link: "/resources/pitch-decks",
      },
    ],
  },
  {
    id: 3,
    title: "Best Gifts for Entrepreneurs 2024",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
    description:
      "Find the perfect gifts that will help entrepreneurs boost productivity and maintain work-life balance",
    author: "Alex Thompson",
    date: "March 13, 2024",
    readTime: "6 min read",
    content: `
            Finding the perfect gift for an entrepreneur can be challenging. Here's our curated list of practical and thoughtful gifts that can make a real difference in their entrepreneurial journey.

            Top Gift Categories:

            1. Productivity Tools
            - Noise-canceling headphones
              * Perfect for focused work
              * Great for travel
              * Premium sound quality
            - Smart notebooks
              * Digital backup of handwritten notes
              * Reusable pages
              * Cloud integration

            2. Wellness Products
            - Standing desk
              * Ergonomic design
              * Height adjustable
              * Built-in cable management
            - Meditation apps subscription
              * Stress reduction
              * Better focus
              * Improved sleep

            3. Tech Gadgets
            - Portable second monitor
              * Increased productivity
              * Lightweight design
              * Universal compatibility
            - Smart coffee maker
              * Schedule brewing
              * Perfect temperature
              * Mobile app control

            4. Business Books
            - Latest bestsellers
            - Audio book subscriptions
            - Business biography collections
        `,
    relatedTopics: [
      "Productivity",
      "Work-Life Balance",
      "Technology",
      "Wellness",
    ],
    additionalResources: [
      {
        title: "Productivity Tool Reviews",
        link: "/resources/productivity-tools",
      },
      {
        title: "Wellness Guide for Entrepreneurs",
        link: "/resources/wellness-guide",
      },
    ],
  },
];

const ResourceDetails = () => {
  const { id } = useParams();
  const resource = resourcesData.find((r) => r.id === parseInt(id));

  if (!resource) {
    return <div className="text-center py-20">Resource not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto py-10">
      <Link to="/resources" className="flex items-center text-gray-600 mb-6">
        <FiArrowLeft className="mr-2" /> Back to Resources
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {resource.category}
            </span>
            <div className="flex gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <FiUser /> {resource.author}
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {resource.date}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {resource.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {resource.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{resource.description}</p>

          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700">
              {resource.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-bold text-xl mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {resource.relatedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {resource.additionalResources && (
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Additional Resources</h3>
              <ul className="space-y-2">
                {resource.additionalResources.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
