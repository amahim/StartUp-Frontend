import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/components/Homepage/Home'
import HomeLayout from './components/Homepage/HomeLayout';
import CaseStudyDetails from './components/CaseStudy/CaseStudyDetails';
import AllCaseStudy from './components/CaseStudy/AllCaseStudy';
import AllCourses from './components/Courses/AllCourses';
import Error from './components/shared/Error';
import CoursesDetails from './components/Courses/CoursesDetails';
import AllNews from './components/News/AllNews';
import NewsDetails from './components/News/NewsDetails';
import AllReviews from './components/Reviews/AllReviews';
import AllIdeas from './components/Ideas/AllIdeas';
import IdeaDetails from './components/Ideas/IdeaDetails';
import AllGuides from './components/Guides/AllGuides';
import GuideDetails from './components/Guides/GuideDetails';
import AllResources from './components/Resources/AllResources';
import ResourceDetails from './components/Resources/ResourceDetails';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import Packages from './components/Subscribes/Packages';
import AllAuthors from './components/Author/AllAuthors';
import AuthorDetails from './components/Author/AuthorDetails';
import AllContributors from './components/Contributor/AllContributors';
import ContributorDetails from './components/Contributor/ContributorDetails';
import StartGrowMonetize from './components/StartGrowMonetize/StartGrowMonetize';
import Lifetime from './components/Subscribes/Lifetime';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<HomeLayout/>
      },
      
      {
        path:"/case-studies",
        element:<AllCaseStudy/>
      },
      {
        path:"/case-study/:id",
        element:<CaseStudyDetails/>,
      },
      {
        path:"/courses",
        element:<AllCourses/>,
      },
      {
        path:"/lifetime-upgrade",
        element:<Lifetime/>,
      },
      {
        path:"/course/:id",
        element:<CoursesDetails/>,
      },
      {
        path:"/ideas",
        element:<AllIdeas/>,
      },
      {
        path:"/ideas/:id",
        element:<IdeaDetails/>,
      },
      {
        path:"/news",
        element:<AllNews/>,
      },
      {
        path:"/news/:id",
        element:<NewsDetails/>,
      },
      {
        path:"/guides",
        element:<AllGuides/>,
      },
      {
        path:"/guides/:id",
        element:<GuideDetails/>,
      },
      {
        path:"/resources",
        element:<AllResources/>,
      },
      {
        path:"/resources/:id",
        element:<ResourceDetails/>,
      },
      // {
      //   path:"/contributors",
      //   element:<AllContributors/>,
      // },
      // {
      //   path:"/contributors/:id",
      //   element:<ContributorDetails/>,
      // },
      {
        path:"/start-grow-monetize",
        element:<StartGrowMonetize/>,
      },
      {
        path:"/contributors",
        element:<AllAuthors/>,
      },
      {
        path:"/contributors/:id",
        element:<AuthorDetails/>,
      },
      {
        path: "/reviews",
        element: <AllReviews/>,
      },
      {
        path:"/packages",
        element:<Packages/>
      },
    ]
  },
  {
    path:"/signin",
    element: <SignIn/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
