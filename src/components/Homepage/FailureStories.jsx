const FailureStories = () => {
  const failureStories = [
    {
      id: 1,
      lossAmount: "Lost $50K",
      title: "Why My SaaS Startup Failed After 18 Months",
      lessons: ["Wrong market timing", "Poor customer validation"],
    },
    {
      id: 2,
      lossAmount: "Lost $120K",
      title: "From Funded Startup to Bankruptcy in 12 Months",
      lessons: ["Scaling too quickly", "High customer acquisition costs"],
    },
    {
      id: 3,
      lossAmount: "Lost $75K",
      title: "How Our Marketplace Startup Failed to Find PMF",
      lessons: [
        "No clear monetization strategy",
        "Failed to solve real pain points",
      ],
    },
    
  ];

  return (
    <div className="w-4/5 mx-auto py-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Failure Stories</h2>
        <p className="text-gray-600 mt-2">
          Lessons learned from failed startups and businesses.
        </p>
      </div>

      {/* Failure Stories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {failureStories.map((story) => (
          <div key={story.id} className="border shadow-xl bg-red-50 rounded-xl p-6 shadow-md">
            <span className="text-red-600 font-semibold">{story.lossAmount}</span>
            <h3 className="text-xl font-bold mt-2">{story.title}</h3>
            <ul className="mt-4 space-y-2">
              {story.lessons.map((lesson, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="btn bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
          View More Stories
        </button>
      </div>
    </div>
  );
};

export default FailureStories;
