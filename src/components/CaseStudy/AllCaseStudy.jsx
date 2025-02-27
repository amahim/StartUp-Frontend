import React from 'react';
import { Link } from 'react-router-dom';

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


const AllCaseStudy = () => {
    return (
            <div className='w-4/5 mx-auto py-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-center mb-2'>See exactly how an online business goes from <span className='bg-green-200'>zero</span> to <span className='bg-green-200'>millions</span>:</h2>
                
                <div className='grid md:grid-cols-2 gap-6 mt-10'>
                    {caseStudies.map((study) => (
                        <div key={study.id} className='bg-white rounded-xl shadow-lg overflow-hidden border'>
                            <div className='flex md:flex-row flex-col gap-4 p-4'>
                                <div className='relative md:w-32 md:h-32 h-56 flex-shrink-0 '>
                                    <img 
                                        src={study.image} 
                                        alt={study.author} 
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                    <div className='absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md text-sm font-semibold'>
                                        {study.income}
                                    </div>
                                    <div className='flex justify-end md:justify-start'>
                                        <Link
                                        to={`/case-study/${study.id}`}
                                         className=" btn bg-[#6390f0c9]  text-white border-none w-36 md:w-full mt-2 py-1">Read More</Link>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col flex-grow'>
                                    <div className='bg-blue-100 text-blue-600 text-sm w-fit px-3 py-1 rounded-full mb-2'>
                                        case study
                                    </div>
                                    <h3 className='md:mt-0 mt-2 font-bold text-xl mb-2'>{study.title}</h3>
                                    <div>
                                        <p className='text-gray-600 mb-1'>{study.author} breaks down:</p>
                                        <ul className='space-y-1'>
                                            {study.points.map((point, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <span className='text-green-500'>✓</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        );
};

export default AllCaseStudy;