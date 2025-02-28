import React from 'react';
import { Link } from 'react-router-dom';

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

const NewsSection = () => {

    const homeNews = news.slice(0,3)

    return (
        <div className="w-4/5 mx-auto py-10 ">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Latest Industry News</h2>
                <p className="text-xl text-gray-600">Stay updated with the latest trends and insights</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {homeNews.map((item) => (
                    <Link
                        to={`/news/${item.id}`}
                        key={item.id}
                        className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="aspect-w-16 aspect-h-9 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                                {item.category}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                                <span>{item.date}</span>
                                <span>•</span>
                                <span>{item.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {item.subtitle}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.relatedTopics.map((topic, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link
                    to="/news"
                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                    View All News
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default NewsSection;