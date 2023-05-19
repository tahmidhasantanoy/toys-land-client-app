import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;