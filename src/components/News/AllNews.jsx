import React from "react";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    category: "FOUNDERS",
    title: "Building a $50M AI Company in 18 Months",
    subtitle:
      "How this founder leveraged GPT-4 to revolutionize customer service",
    author: "Sarah Chen",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
    content: `When Sarah Chen launched AICustomerService.io in late 2022, she saw an opportunity that others missed. "Everyone was building AI chatbots, but no one was focusing on the human-AI hybrid approach," she explains. This insight led to a platform that now processes over 1 million customer interactions daily...`,
    readTime: "8 min read",
    relatedTopics: ["AI", "Customer Service", "Startups"],
  },
  {
    id: 2,
    category: "INVESTING",
    title: "The Rise of Micro SaaS: Why VCs Are Paying Attention",
    subtitle:
      "Small, focused software products are generating outsized returns",
    author: "Michael Ross",
    date: "March 14, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    content: `The SaaS landscape is changing. While unicorns still grab headlines, a new breed of software companies is emerging. These "micro-SaaS" businesses, often run by solo founders or small teams, are proving that you don't need massive scale to build a highly profitable software business...`,
    readTime: "6 min read",
    relatedTopics: ["SaaS", "Venture Capital", "Bootstrapping"],
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    title: "Web3 Startups Pivot to AI: The New Gold Rush",
    subtitle:
      "Former crypto founders are finding new opportunities in artificial intelligence",
    author: "Alex Thompson",
    date: "March 13, 2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
    content: `As crypto winter continues, a surprising trend is emerging. Founders who previously built Web3 products are now applying their technical expertise to artificial intelligence. This pivot isn't just about following the latest trend - it's about leveraging existing technical infrastructure...`,
    readTime: "5 min read",
    relatedTopics: ["Web3", "AI", "Crypto"],
  },
  {
    id: 4,
    category: "INVESTING",
    title: "The Rise of Micro SaaS: Why VCs Are Paying Attention",
    subtitle:
      "Small, focused software products are generating outsized returns",
    author: "Michael Ross",
    date: "March 14, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    content: `The SaaS landscape is changing. While unicorns still grab headlines, a new breed of software companies is emerging. These "micro-SaaS" businesses, often run by solo founders or small teams, are proving that you don't need massive scale to build a highly profitable software business...`,
    readTime: "6 min read",
    relatedTopics: ["SaaS", "Venture Capital", "Bootstrapping"],
  },
  {
    id: 5,
    category: "TECHNOLOGY",
    title: "Web3 Startups Pivot to AI: The New Gold Rush",
    subtitle:
      "Former crypto founders are finding new opportunities in artificial intelligence",
    author: "Alex Thompson",
    date: "March 13, 2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
    content: `As crypto winter continues, a surprising trend is emerging. Founders who previously built Web3 products are now applying their technical expertise to artificial intelligence. This pivot isn't just about following the latest trend - it's about leveraging existing technical infrastructure...`,
    readTime: "5 min read",
    relatedTopics: ["Web3", "AI", "Crypto"],
  },
];

const AllNews = () => {
  return (
    <div className="w-4/5 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>

      <div className="grid gap-8">
        {news.map((item) => (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.subtitle}</p>

                <div className="flex items-center gap-4 mt-4">
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                  <div className="flex gap-2">
                    {item.relatedTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
