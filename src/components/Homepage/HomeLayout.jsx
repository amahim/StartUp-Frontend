import React from "react";
import Banner from "./Banner";
import CaseStudyPage from "./CaseStudyPage";
import StatCounter from "./StatCounter";
import FeaturedInterviews from "./FeaturedInterviews";
import FailureStories from "./FailureStories";
import SuccessStory from "./SuccessStory";
import Newsletter from "./Newsletter";
import NewsSection from "./NewsSection";
// import ReviewsPage from './ReviewsPage';
import Ideas from "./Ideas";
import Guides from "./Guides";
import Resources from "./Resources";
import AuthorsPage from "./AuthorsPage";
import ContributorsPage from "./ContributorsPage";
import ReviewsPage from "../Reviews/ReviewsPage";
import Tools from './Tools'
import StartGrowNMonetizeHome from './StartGrowNMonetizeHome'
import StatsNDetailing from './StatsNDetailing'
import UpgradeToProLife from "./UpgradeToProLife";
const HomeLayout = () => {
  return (
    <div>
      <Banner />
      <StatCounter />
      <Resources />
      <SuccessStory />
      <FailureStories />
      <FeaturedInterviews />
      <Ideas />
      <Tools/>
      <StartGrowNMonetizeHome/>
      <AuthorsPage />
      <CaseStudyPage />
      {/* <ContributorsPage/> */}
      <Guides />
      <NewsSection />
      <div className="w-4/5 mx-auto">
        <ReviewsPage />
      </div>
      <UpgradeToProLife/>
      <StatsNDetailing/>
      <Newsletter />
    </div>
  );
};

export default HomeLayout;
