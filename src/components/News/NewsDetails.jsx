import React from "react";
import { useParams, Link } from "react-router-dom";

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
const NewsDetails = () => {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div className="text-center py-20">News article not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto py-10">
      <Link
        to="/news"
        className="bg-blue-300 rounded-full text-white px-2 py-1 hover:underline mb-4 inline-block"
      >
        ← Back to news
      </Link>

      <article className="mt-6">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {newsItem.category}
            </span>
            <span className="text-gray-500">{newsItem.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{newsItem.subtitle}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500">{newsItem.readTime}</span>
            <span className="text-gray-500">By {newsItem.author}</span>
          </div>
        </div>

        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">{newsItem.content}</p>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h3 className="font-bold mb-3">Related Topics:</h3>
          <div className="flex gap-2">
            {newsItem.relatedTopics.map((topic, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetails;
