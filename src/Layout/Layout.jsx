import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <header className='sticky top-0 z-1000'>
                <Header></Header>
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;