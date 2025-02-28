// import React from 'react';
// import { useParams,Link } from 'react-router-dom';

// const CaseStudyDetails = () => {
//     const { id } = useParams();
//     const caseStudies = [
//         {
//             id: 1,
//             title: "How I Make $2M/Year As A Solopreneur",
//             author: "Justin",
//             income: "$175K/month",
//             points: [
//                 "Setting up a one person business",
//                 "Creating a scalable content machine"
//             ],
//             image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             fullName: "Justin Wilson",
//             businessStartDate: "January 2020",
//             industry: "Digital Marketing",
//             initialInvestment: "$5,000",
//             timeToProfit: "3 months",
//             keyMetrics: {
//                 monthlyVisitors: "500,000",
//                 conversionRate: "2.8%",
//                 customerLifetimeValue: "$997"
//             },
//             fullStory: `I started my journey as a solopreneur in January 2020 with just $5,000 in savings. The first three months were focused on building my content marketing system. Through consistent content creation and strategic partnerships, I was able to build a scalable business that now generates over $2M annually without any full-time employees.`,
//             challenges: [
//                 "Finding the right content creation workflow",
//                 "Scaling without hiring full-time employees",
//                 "Managing time between creation and business development"
//             ],
//             solutions: [
//                 "Implemented AI tools for content research",
//                 "Built a network of reliable freelancers",
//                 "Created standard operating procedures for everything"
//             ],
//             results: [
//                 "Reached $175K monthly revenue in 18 months",
//                 "Built an email list of 100,000+ subscribers",
//                 "Created a fully automated business system"
//             ]
//         },
//         {
//             id: 2,
//             title: "How I Started A $144M Brand At 23 Years Old",
//             author: "Dylan",
//             income: "$12M/month",
//             points: [
//                 "Validating a product with FB ads",
//                 "Finding a supplier that can scale"
//             ],
//             image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             fullName: "Dylan Carter",
//             businessStartDate: "March 2019",
//             industry: "E-commerce",
//             initialInvestment: "$20,000",
//             timeToProfit: "2 months",
//             keyMetrics: {
//                 monthlyVisitors: "2.5M",
//                 conversionRate: "4.2%",
//                 customerLifetimeValue: "$280"
//             },
//             fullStory: `After dropping out of college, I identified a gap in the wellness market. Using my savings and a small loan from family, I started testing products using Facebook ads. The first product took off immediately, and we scaled from $0 to $144M in just under three years through strategic marketing and solid supplier relationships.`,
//             challenges: [
//                 "Managing rapid growth and inventory",
//                 "Building a reliable supply chain",
//                 "Maintaining quality while scaling"
//             ],
//             solutions: [
//                 "Developed strong relationships with multiple suppliers",
//                 "Implemented advanced inventory management systems",
//                 "Built an in-house quality control team"
//             ],
//             results: [
//                 "Scaled to $12M monthly revenue",
//                 "Expanded to 15 countries",
//                 "Built a team of 50+ employees"
//             ]
//         },
//         {
//             id: 3,
//             title: "How My Product Hunt Launch Generated $5.8K",
//             author: "Luc",
//             income: "$4K/month",
//             points: [
//                 "Launching on Product Hunt",
//                 "Creating a profitable newsletter"
//             ],
//             image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             fullName: "Luc Bennet",
//             businessStartDate: "September 2022",
//             industry: "SaaS",
//             initialInvestment: "$2,000",
//             timeToProfit: "1 month",
//             keyMetrics: {
//                 monthlyVisitors: "25,000",
//                 conversionRate: "1.8%",
//                 customerLifetimeValue: "$89"
//             },
//             fullStory: `As a solo developer, I built a simple tool to solve my own problem with newsletter management. After a successful Product Hunt launch that landed #3 Product of the Day, I've grown it into a sustainable business while keeping my full-time job. The launch day success proved there was a market for my solution.`,
//             challenges: [
//                 "Balancing full-time job with side project",
//                 "Building in public while maintaining momentum",
//                 "Converting free users to paid plans"
//             ],
//             solutions: [
//                 "Created efficient development workflow",
//                 "Leveraged Twitter for building in public",
//                 "Implemented strategic freemium model"
//             ],
//             results: [
//                 "Generated $5.8K in launch week",
//                 "Grew to 400+ active users",
//                 "Achieved $4K in monthly recurring revenue"
//             ]
//         },
//         {
//             id: 4,
//             title: "How I Built A $420K/Year Productized Service",
//             author: "Jaclyn",
//             income: "$35K/month",
//             points: [
//                 "Setting up a productized service",
//                 "Landing first client with cold email"
//             ],
//             image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             fullName: "Jaclyn Martinez",
//             businessStartDate: "June 2021",
//             industry: "Business Services",
//             initialInvestment: "$1,000",
//             timeToProfit: "2 weeks",
//             keyMetrics: {
//                 monthlyVisitors: "15,000",
//                 conversionRate: "3.5%",
//                 customerLifetimeValue: "$4,500"
//             },
//             fullStory: `After 5 years in corporate consulting, I noticed small businesses needed the same services but couldn't afford traditional consulting fees. I packaged my expertise into fixed-price services, started with cold outreach, and grew through referrals. Now we serve over 100 clients monthly with a team of specialized contractors.`,
//             challenges: [
//                 "Standardizing complex services",
//                 "Hiring and training reliable contractors",
//                 "Managing client expectations"
//             ],
//             solutions: [
//                 "Created detailed service playbooks",
//                 "Developed comprehensive contractor training",
//                 "Implemented clear client onboarding process"
//             ],
//             results: [
//                 "Scaled to $35K monthly revenue",
//                 "Built team of 12 contractors",
//                 "Achieved 92% client retention rate"
//             ]
//         }
//     ];

//     const study = caseStudies.find(study => study.id === parseInt(id));

//     if (!study) {
//         return <div className="text-center py-20">Case study not found</div>;
//     }
//     return (
//         <div className="w-4/5 mx-auto py-10">
//             {/* Header Section */}
//             <div className="mb-10">
//                 <Link to="/" className="bg-blue-300 rounded-full text-white px-2 py-1 hover:underline mb-4 inline-block">
//                     ← Back to home
//                 </Link>
//                 <div className="bg-blue-100 text-blue-600 text-sm w-fit px-3 py-1 rounded-full mb-4">
//                     Case Study
//                 </div>
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{study.title}</h1>
//                 <div className="flex flex-wrap items-center gap-4 text-gray-600">
//                     <img src={study.image} alt={study.fullName} className="w-16 h-16 rounded-full object-cover"/>
//                     <div>
//                         <p className="font-semibold text-black">{study.fullName}</p>
//                         <p>{study.industry}</p>
//                     </div>
//                     <div className="ml-auto">
//                         <span className="text-2xl font-bold text-green-600">{study.income}</span>
//                         <p className="text-sm">Monthly Revenue</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Key Metrics */}
//             <div className="grid md:grid-cols-3 gap-6 mb-10">
//                 {Object.entries(study.keyMetrics).map(([key, value]) => (
//                     <div key={key} className="bg-white p-6 rounded-xl shadow-md">
//                         <p className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//                         <p className="text-2xl font-bold">{value}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Business Details */}
//             <div className="grid md:grid-cols-2 gap-10 mb-10">
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">The Journey</h2>
//                     <p className="text-gray-700 leading-relaxed">{study.fullStory}</p>
//                 </div>
//                 <div className="bg-gray-50 p-6 rounded-xl">
//                     <h2 className="text-xl font-bold mb-4">Business Details</h2>
//                     <p><strong>Start Date:</strong> {study.businessStartDate}</p>
//                     <p><strong>Initial Investment:</strong> {study.initialInvestment}</p>
//                     <p><strong>Time to Profitability:</strong> {study.timeToProfit}</p>
//                 </div>
//             </div>

//             {/* Challenges & Solutions */}
//             <div className="grid md:grid-cols-2 gap-10 mb-10">
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">Challenges</h2>
//                     <ul className="list-disc list-inside text-gray-700">
//                         {study.challenges.map((challenge, index) => (
//                             <li key={index}>{challenge}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">Solutions</h2>
//                     <ul className="list-disc list-inside text-gray-700">
//                         {study.solutions.map((solution, index) => (
//                             <li key={index}>{solution}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Results */}
//             <div className="mb-10">
//                 <h2 className="text-2xl font-bold mb-4">Results</h2>
//                 <ul className="list-disc list-inside text-gray-700">
//                     {study.results.map((result, index) => (
//                         <li key={index}>{result}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default CaseStudyDetails;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const caseStudies = [
    {
        id: 1,
        title: "How I Make $2M/Year As A Solopreneur",
        author: "Justin",
        income: "$175K/month",
        points: [
            "Setting up a one person business",
            "Creating a scalable content machine"
        ],
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        fullName: "Justin Wilson",
        businessStartDate: "January 2020",
        industry: "Digital Marketing",
        initialInvestment: "$5,000",
        timeToProfit: "3 months",
        keyMetrics: {
            monthlyVisitors: "500,000",
            conversionRate: "2.8%",
            customerLifetimeValue: "$997"
        },
        fullStory: `I started my journey as a solopreneur in January 2020 with just $5,000 in savings. The first three months were focused on building my content marketing system. Through consistent content creation and strategic partnerships, I was able to build a scalable business that now generates over $2M annually without any full-time employees.`,
        challenges: [
            "Finding the right content creation workflow",
            "Scaling without hiring full-time employees",
            "Managing time between creation and business development"
        ],
        solutions: [
            "Implemented AI tools for content research",
            "Built a network of reliable freelancers",
            "Created standard operating procedures for everything"
        ],
        results: [
            "Reached $175K monthly revenue in 18 months",
            "Built an email list of 100,000+ subscribers",
            "Created a fully automated business system"
        ]
    },
    {
        id: 2,
        title: "How I Started A $144M Brand At 23 Years Old",
        author: "Dylan",
        income: "$12M/month",
        points: [
            "Validating a product with FB ads",
            "Finding a supplier that can scale"
        ],
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        fullName: "Dylan Carter",
        businessStartDate: "March 2019",
        industry: "E-commerce",
        initialInvestment: "$20,000",
        timeToProfit: "2 months",
        keyMetrics: {
            monthlyVisitors: "2.5M",
            conversionRate: "4.2%",
            customerLifetimeValue: "$280"
        },
        fullStory: `After dropping out of college, I identified a gap in the wellness market. Using my savings and a small loan from family, I started testing products using Facebook ads. The first product took off immediately, and we scaled from $0 to $144M in just under three years through strategic marketing and solid supplier relationships.`,
        challenges: [
            "Managing rapid growth and inventory",
            "Building a reliable supply chain",
            "Maintaining quality while scaling"
        ],
        solutions: [
            "Developed strong relationships with multiple suppliers",
            "Implemented advanced inventory management systems",
            "Built an in-house quality control team"
        ],
        results: [
            "Scaled to $12M monthly revenue",
            "Expanded to 15 countries",
            "Built a team of 50+ employees"
        ]
    },
    {
        id: 3,
        title: "How My Product Hunt Launch Generated $5.8K",
        author: "Luc",
        income: "$4K/month",
        points: [
            "Launching on Product Hunt",
            "Creating a profitable newsletter"
        ],
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        fullName: "Luc Bennet",
        businessStartDate: "September 2022",
        industry: "SaaS",
        initialInvestment: "$2,000",
        timeToProfit: "1 month",
        keyMetrics: {
            monthlyVisitors: "25,000",
            conversionRate: "1.8%",
            customerLifetimeValue: "$89"
        },
        fullStory: `As a solo developer, I built a simple tool to solve my own problem with newsletter management. After a successful Product Hunt launch that landed #3 Product of the Day, I've grown it into a sustainable business while keeping my full-time job. The launch day success proved there was a market for my solution.`,
        challenges: [
            "Balancing full-time job with side project",
            "Building in public while maintaining momentum",
            "Converting free users to paid plans"
        ],
        solutions: [
            "Created efficient development workflow",
            "Leveraged Twitter for building in public",
            "Implemented strategic freemium model"
        ],
        results: [
            "Generated $5.8K in launch week",
            "Grew to 400+ active users",
            "Achieved $4K in monthly recurring revenue"
        ]
    },
    {
        id: 4,
        title: "How I Built A $420K/Year Productized Service",
        author: "Jaclyn",
        income: "$35K/month",
        points: [
            "Setting up a productized service",
            "Landing first client with cold email"
        ],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        fullName: "Jaclyn Martinez",
        businessStartDate: "June 2021",
        industry: "Business Services",
        initialInvestment: "$1,000",
        timeToProfit: "2 weeks",
        keyMetrics: {
            monthlyVisitors: "15,000",
            conversionRate: "3.5%",
            customerLifetimeValue: "$4,500"
        },
        fullStory: `After 5 years in corporate consulting, I noticed small businesses needed the same services but couldn't afford traditional consulting fees. I packaged my expertise into fixed-price services, started with cold outreach, and grew through referrals. Now we serve over 100 clients monthly with a team of specialized contractors.`,
        challenges: [
            "Standardizing complex services",
            "Hiring and training reliable contractors",
            "Managing client expectations"
        ],
        solutions: [
            "Created detailed service playbooks",
            "Developed comprehensive contractor training",
            "Implemented clear client onboarding process"
        ],
        results: [
            "Scaled to $35K monthly revenue",
            "Built team of 12 contractors",
            "Achieved 92% client retention rate"
        ]
    }
];


const CaseStudyDetails = () => {
    const { id } = useParams();
    const study = caseStudies.find(study => study.id === parseInt(id));

    if (!study) {
        return <div className="text-center py-20">Case study not found</div>;
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="w-11/12 md:w-4/5 mx-auto py-10">
                {/* Navigation */}
                <Link 
                    to="/case-studies" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
                >
                    <FiArrowLeft />
                    <span>Back to Case Studies</span>
                </Link>

                {/* Header Section */}
                <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {study.industry}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{study.businessStartDate}</span>
                    </div>

                    <h1 className="text-2xl md:text-4xl   font-bold mb-6">
                        {study.title}
                    </h1>

                    <div className="flex items-center gap-6 mb-8">
                        <img 
                            src={study.image} 
                            alt={study.fullName} 
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{study.fullName}</h3>
                            <p className="text-gray-600">{study.industry}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <FiDollarSign className="text-green-500" />
                            <h3 className="font-semibold">Monthly Revenue</h3>
                        </div>
                        <p className="text-3xl font-bold text-green-600">{study.income}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <FiClock className="text-blue-500" />
                            <h3 className="font-semibold">Time to Profit</h3>
                        </div>
                        <p className="text-3xl font-bold text-blue-600">{study.timeToProfit}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <FiTrendingUp className="text-purple-500" />
                            <h3 className="font-semibold">Initial Investment</h3>
                        </div>
                        <p className="text-3xl font-bold text-purple-600">{study.initialInvestment}</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Main Story */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">The Journey</h2>
                            <p className="text-gray-700 leading-relaxed">{study.fullStory}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Key Challenges & Solutions</h2>
                            <div className="space-y-6">
                                {study.challenges.map((challenge, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                        <h3 className="font-semibold mb-3">Challenge: {challenge}</h3>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <span>Solution:</span>
                                            <p>{study.solutions[index]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                                <ul className="space-y-4">
                                    {study.results.map((result, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="text-green-500 text-xl">✓</span>
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Key Metrics & Additional Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
                            {Object.entries(study.keyMetrics).map(([key, value]) => (
                                <div key={key} className="mb-4 last:mb-0">
                                    <p className="text-gray-600 text-sm">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </p>
                                    <p className="text-xl font-bold">{value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                            <div className="space-y-3">
                                <p><strong>Industry:</strong> {study.industry}</p>
                                <p><strong>Started:</strong> {study.businessStartDate}</p>
                                <p><strong>Initial Investment:</strong> {study.initialInvestment}</p>
                                <p><strong>Time to Profit:</strong> {study.timeToProfit}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudyDetails;