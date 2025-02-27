import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import CaseStudyPage from './CaseStudyPage';
import StatCounter from './StatCounter';
import FeaturedInterviews from './FeaturedInterviews';
import FailureStories from './FailureStories';
import SuccessStory from './SuccessStory';
import Newsletter from './Newsletter';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <StatCounter/>
            <CaseStudyPage/>
            <SuccessStory/>
            <FeaturedInterviews/>
            <FailureStories/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;