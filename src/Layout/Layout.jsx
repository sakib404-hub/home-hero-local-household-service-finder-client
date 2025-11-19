import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='min-h-screen border'></main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;