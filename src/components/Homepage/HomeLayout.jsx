import React from 'react';
import Banner from './Banner';
import CaseStudyPage from './CaseStudyPage';
import StatCounter from './StatCounter';
import FeaturedInterviews from './FeaturedInterviews';
import FailureStories from './FailureStories';
import SuccessStory from './SuccessStory';
import Newsletter from './Newsletter';
import NewsSection from './NewsSection';
import ReviewsPage from './ReviewsPage';
import Ideas from './Ideas';
import Guides from './Guides';
import Resources from './Resources';


const HomeLayout = () => {
    return (
        <div>
            <Banner/>
            <StatCounter/>
            <Resources/>
            <SuccessStory/>
            <FailureStories/>
            <FeaturedInterviews/>
            <Ideas/>
            <CaseStudyPage/>
            <Guides/>
            <NewsSection/>
            <ReviewsPage/>
            <Newsletter/>
            
        </div>
    );
};

export default HomeLayout;