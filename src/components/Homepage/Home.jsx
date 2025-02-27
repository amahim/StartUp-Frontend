import React from 'react';
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;