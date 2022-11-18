import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ForAll/footer/Footer';
import Navbar from '../ForAll/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;