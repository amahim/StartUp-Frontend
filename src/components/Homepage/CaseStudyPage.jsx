import React from 'react';
import arrowImg from '../../assets/Vector.png'
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
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
];

const CaseStudyPage = () => {
    return (
        <div className='w-4/5 mx-auto py-10'>
            <h2 className='text-3xl font-bold text-center mb-2'>See exactly how an online business goes from <span className='bg-green-200'>zero</span> to <span className='bg-green-200'>millions</span>:</h2>
            
            <div className='grid md:grid-cols-2 gap-6 mt-10'>
                {caseStudies.map((study) => (
                    <div key={study.id} className='bg-white rounded-xl shadow-lg overflow-hidden border'>
                        <div className='flex gap-4 p-4'>
                            <div className='relative w-32 h-32 flex-shrink-0'>
                                <img 
                                    src={study.image} 
                                    alt={study.author} 
                                    className='w-full h-full object-cover rounded-lg'
                                />
                                <div className='absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md text-sm font-semibold'>
                                    {study.income}
                                </div>
                            </div>
                            
                            <div className='flex flex-col flex-grow'>
                                <div className='bg-blue-100 text-blue-600 text-sm w-fit px-3 py-1 rounded-full mb-2'>
                                    case study
                                </div>
                                <h3 className='font-bold text-xl mb-2'>{study.title}</h3>
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
            
            <div className='flex gao-4 text-center justify-center mt-5'>
                <img src={arrowImg} alt="" className='md:w-full md:h-full w-24 h-10'/>
                <p className='text-xl'>Over 4,412 more case studies like these...</p>
            </div>
        </div>
    );
};

export default CaseStudyPage;