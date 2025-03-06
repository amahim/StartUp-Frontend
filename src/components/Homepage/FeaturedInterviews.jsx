const FeaturedInterviews = () => {
  const interviews = [
    {
      id: 1,
      title: "How We Got Our First 1000 Customers",
      author: "John Smith",
      company: "TechStart",
      quote: "The key was focusing on community building before product launch...",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      title: "Building a $1M ARR Bootstrap Business",
      author: "Sarah Johnson",
      company: "DataFlow",
      quote: "We focused on solving one specific problem really well...",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <div className="w-4/5 mx-auto py-10">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold">Latest Founder Interviews</h2>
          <button className="mt-4  md:mt-0 btn bg-black text-white hover:bg-gray-800">
            View All Interviews
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md;gap-8">
          {interviews.map((interview) => (
            <div key={interview.id} className="border shadow-xl bg-white p-4 md:p-6 rounded-xl ">
              <div className="flex md:flex-row flex-col gap-4 items-center mb-4">
                <img 
                  src={interview.image} 
                  className="w-16 h-16 rounded-full"
                  alt="Founder"
                />
                <div>
                  <h3 className="font-bold text-xl">{interview.title}</h3>
                  <p className="text-gray-600">with {interview.author}, Founder of {interview.company}</p>
                </div>
              </div>
              <p className="text-gray-700">
                "{interview.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInterviews;
