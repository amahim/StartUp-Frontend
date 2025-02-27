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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<div><h1>error</h1></div>,
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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
