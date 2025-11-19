import React, { use } from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Header = () => {
    const { user } = use(AuthContext);
    console.log(user);
    const links = <div className='text-base text-center font-bold flex flex-col lg:flex-row gap-4'>
        <NavLink
            className={'nav-links px-2'}
            to={'/'}>Home</NavLink>
        <NavLink
            className={'nav-links px-2'}
            to={'/services'}>Services</NavLink>
        <NavLink
            className={'nav-links px-2'}
            to={'/myservices'}>My Services</NavLink>
        <NavLink
            className={'nav-links px-2'}
            to={'/addservices'}>Add Services</NavLink>
        <NavLink
            className={'nav-links  px-2'}
            to={'/mybookings'}>My Bookings</NavLink>
        <NavLink
            className={'nav-links px-2'}
            to={'/profile'}>Profile</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-4 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 text-xl cursor-pointer">
                        <div className='h-10 w-10 lg:h-12 lg:w-12 border border-base-content/20 rounded-full overflow-hidden shadow-sm'>
                            <img
                                src={logoImg}
                                alt="HomeHero Logo"
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <span className="font-bold text-primary tracking-wide">HomeHero</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div >
                            <a className="btn">Logout </a>
                        </div> : <div>
                            <a className="btn">Login </a>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;