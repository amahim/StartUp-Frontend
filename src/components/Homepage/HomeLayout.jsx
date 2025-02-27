import React from 'react';
import Banner from './Banner';
import CaseStudyPage from './CaseStudyPage';
import StatCounter from './StatCounter';
import FeaturedInterviews from './FeaturedInterviews';
import FailureStories from './FailureStories';
import SuccessStory from './SuccessStory';
import Newsletter from './Newsletter';


const HomeLayout = () => {
    return (
        <div>
            <Banner/>
            <StatCounter/>
            <CaseStudyPage/>
            <SuccessStory/>
            <FeaturedInterviews/>
            <FailureStories/>
            <Newsletter/>
        </div>
    );
};

export default HomeLayout;