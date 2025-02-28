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


const HomeLayout = () => {
    return (
        <div>
            <Banner/>
            <StatCounter/>
            <CaseStudyPage/>
            <SuccessStory/>
            <Ideas/>
            <FeaturedInterviews/>
            <FailureStories/>
            <Guides/>
            <NewsSection/>
            <Newsletter/>
            <ReviewsPage/>
        </div>
    );
};

export default HomeLayout;