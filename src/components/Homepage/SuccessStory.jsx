import React from 'react';

const successStories = [
    {
        id: 1,
        title: "From Zero to $3.2M: My SaaS Journey",
        author: "Sarah Johnson",
        role: "Founder & CEO",
        company: "TechFlow",
        income: "$270K/month",
        story: "After 8 years in corporate tech, I took the leap to build my own SaaS. Started in my garage, now we're helping 5000+ businesses.",
        achievement: "Featured in TechCrunch",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
    },
    {
        id: 2,
        title: "Building a $1M Design Tool Solo",
        author: "Michael Chen",
        role: "Solo Founder",
        company: "DesignMaster",
        income: "$70K/month",
        story: "Turned my designer frustrations into a product. Coded nights and weekends for 6 months before launching.",
        achievement: "ProductHunt #1 Product",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500"
    },
    {
        id: 3,
        title: "D2C Brand Success Story: $1.5M ARR",
        author: "Emma Davis",
        role: "Founder",
        company: "GreenGrowth",
        income: "$125K/month",
        story: "Started with just $5K and a passion for sustainable products. Now shipping to 23 countries worldwide.",
        achievement: "Forbes 30 Under 30",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
    }
];

const SuccessStory = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto py-10'>
                <div className='text-center mb-8'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text'>
                        Founder Success Stories
                    </h1>
                    <p className='text-xl text-gray-600'>
                        Real stories from founders who turned their dreams into reality
                    </p>
                </div>

                <div className='space-y-6 md:space-y-10'>
                    {successStories.map((story, index) => (
                        <div key={story.id} 
                             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                                       gap-8 items-center bg-gradient-to-br from-gray-50 to-white 
                                       p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow`}>
                            <div className='md:w-1/3'>
                                <img 
                                    src={story.image} 
                                    alt={story.author} 
                                    className='w-full h-80 object-cover rounded-2xl shadow-md'
                                />
                            </div>
                            <div className='md:w-2/3 space-y-4'>
                                <div className='flex items-center gap-3 text-sm'>
                                    <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full'>
                                        {story.achievement}
                                    </span>
                                    <span className='text-green-600 font-semibold'>
                                        {story.income}
                                    </span>
                                </div>
                                <h2 className='text-3xl font-bold text-gray-800'>
                                    {story.title}
                                </h2>
                                <div className='flex items-center gap-2 text-gray-600'>
                                    <span className='font-medium'>{story.author}</span>
                                    <span>•</span>
                                    <span>{story.role}</span>
                                    <span>•</span>
                                    <span>{story.company}</span>
                                </div>
                                <p className='text-lg text-gray-700 leading-relaxed'>
                                    {story.story}
                                </p>
                                <button className='btn bg-black text-white hover:bg-gray-800 transition-colors'>
                                    Read Full Story
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;