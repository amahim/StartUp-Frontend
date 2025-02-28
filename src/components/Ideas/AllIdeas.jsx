import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
const ideas = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      author: "Alex Rivera",
      marketSize: "58",
      category: "SaaS",
      toolsUsed: "AI Powered Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      description: "Building analytics tools that help businesses make data-driven decisions",
      problemSolving: "Most companies struggle with data interpretation",
      targetAudience: "Small to medium businesses",
      revenueModel: "Monthly subscription",
      keyFeatures: [
        "Real-time data analysis",
        "Custom dashboard creation",
        "Automated reporting"
      ],
      potentialChallenges: [
        "Data privacy concerns",
        "Market competition",
        "Technical implementation"
      ]
    },
    {
      id: 2,
      title: "Sustainable Fashion Marketplace",
      author: "Emma Chen",
      marketSize: "42",
      category: "E-commerce",
      toolsUsed: "Eco-friendly Platform",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      description: "Connecting eco-conscious consumers with sustainable fashion brands",
      problemSolving: "Difficulty finding sustainable fashion options",
      targetAudience: "Environmentally conscious shoppers",
      revenueModel: "Commission per sale",
      keyFeatures: [
        "Verified sustainable sellers",
        "Carbon footprint tracking",
        "Ethical sourcing verification"
      ],
      potentialChallenges: [
        "Supply chain verification",
        "Customer education",
        "Price sensitivity"
      ]
    },
    {
      id: 3,
      title: "Remote Team Collaboration Tool",
      author: "Marcus Johnson",
      marketSize: "35",
      category: "Productivity",
      toolsUsed: "Team Management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
      description: "All-in-one platform for remote team collaboration and management",
      problemSolving: "Fragmented remote work tools",
      targetAudience: "Remote-first companies",
      revenueModel: "Per-user subscription",
      keyFeatures: [
        "Virtual office spaces",
        "Time zone management",
        "Project tracking"
      ],
      potentialChallenges: [
        "User adoption",
        "Feature prioritization",
        "Technical scalability"
      ]
    },
    {
      id: 4,
      title: "Mental Health AI Assistant",
      author: "Sarah Kim",
      marketSize: "89",
      category: "Healthcare",
      toolsUsed: "AI Technology",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
      description: "AI-powered mental health support and wellness tracking",
      problemSolving: "Limited access to mental health resources",
      targetAudience: "Individual users and healthcare providers",
      revenueModel: "Freemium model",
      keyFeatures: [
        "24/7 AI support",
        "Mood tracking",
        "Professional referrals"
      ],
      potentialChallenges: [
        "Healthcare regulations",
        "AI accuracy",
        "User privacy"
      ]
    },
    {
      id: 5,
      title: "Local Experience Marketplace",
      author: "David Torres",
      marketSize: "67",
      category: "Travel",
      toolsUsed: "Community Platform",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500",
      description: "Platform connecting travelers with unique local experiences",
      problemSolving: "Authentic travel experiences discovery",
      targetAudience: "Adventure travelers and local guides",
      revenueModel: "Commission-based",
      keyFeatures: [
        "Verified local guides",
        "Instant booking",
        "Experience customization"
      ],
      potentialChallenges: [
        "Quality control",
        "Seasonal demand",
        "Local regulations"
      ]
    },
    {
      id: 6,
      title: "Smart Home Energy Manager",
      author: "Lisa Chen",
      marketSize: "73",
      category: "IoT",
      toolsUsed: "Smart Technology",
      image: "https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-96317.jpg?t=st=1740741832~exp=1740745432~hmac=a2810b0b82ed464117d09e2e5f06fae2928f93092996acacaf841d54fa3bcea6&w=1060",
      description: "AI-powered system for optimizing home energy consumption",
      problemSolving: "High energy costs and inefficiency",
      targetAudience: "Homeowners and property managers",
      revenueModel: "Hardware sales + subscription",
      keyFeatures: [
        "Real-time monitoring",
        "Automated optimization",
        "Cost prediction"
      ],
      potentialChallenges: [
        "Hardware integration",
        "Initial cost barrier",
        "Technical support"
      ]
    }
  ];
const AllIdeas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'SaaS', 'E-commerce', 'Productivity', 'Healthcare', 'Travel', 'IoT'];

    const filteredIdeas = ideas.filter(idea => {
        const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            idea.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="w-4/5 mx-auto py-10">
            <h1 className="text-4xl font-bold mb-8">Explore Business Ideas</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search ideas..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIdeas.map((idea) => (
                    <Link to={`/ideas/${idea.id}`} key={idea.id}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border h-full">
                            <img src={idea.image} alt={idea.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                        {idea.category}
                                    </span>
                                    <span className="text-gray-600 font-semibold">${idea.marketSize}B Market</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
                                <p className="text-gray-600 mb-4">{idea.description}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{idea.toolsUsed}</span>
                                    <span>By {idea.author}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllIdeas;