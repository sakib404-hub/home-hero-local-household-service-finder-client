import React, { use, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import logoImg from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [isDark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    });
    const location = useLocation();
    const links = <div className='text-base text-center font-bold flex flex-col lg:flex-row gap-4'>
        <NavLink
            className={'nav-links px-2'}
            to={'/'}>Home</NavLink>
        <NavLink
            className={'nav-links px-2'}
            to={'/services'}>Services</NavLink>
        {
            user && <NavLink
                className={'nav-links px-2'}
                to={'/myservices'}>My Services</NavLink>
        }
        {
            user && <NavLink
                className={'nav-links px-2'}
                to={'/addservices'}>Add Services</NavLink>
        }
        {
            user && <NavLink
                className={'nav-links  px-2'}
                to={'/mybookings'}>My Bookings</NavLink>
        }
        {
            user && <NavLink
                className={'nav-links px-2'}
                to={'/profile'}>Profile</NavLink>
        }
    </div>
    const path = useNavigate();

    //logo button click
    const handleLogoButtonClick = () => {
        path('/');
    }

    //login button click
    const handleLoginButtonCllick = () => {
        path('/login')
    }
    //logout button Click
    const handleLogOutButtonClick = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    title: "👋 See you soon!",
                    text: "You have successfully logged out.",
                    icon: "success",
                    showConfirmButton: false,
                    background: "var(--color-base-100)",
                    color: "var(--color-base-content)",
                    timer: 1500
                });
                path(location.state || '/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    //handling the profile click
    const handleProfileclick = () => {
        path('/profile');
    }

    const handleToogle = (event) => {
        const value = event.target.checked;
        setDark(value)
        localStorage.setItem("theme", value ? "dark" : "light");
    }

    useEffect(() => {
        if (isDark) {
            document.querySelector('body').setAttribute('data-theme', 'dark');
        }
        else {
            document.querySelector('body').setAttribute('data-theme', 'light');
        }
    }, [isDark])

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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-40 p-4 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div
                        onClick={handleLogoButtonClick}
                        className="flex items-center gap-2 lg:gap-3 text-xl cursor-pointer">
                        <div className='h-10 w-10 lg:h-12 lg:w-12 border border-base-content/20 rounded-full overflow-hidden shadow-sm'>
                            <img
                                src={logoImg}
                                alt="HomeHero Logo"
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <span className="font-bold hidden md:flex text-primary tracking-wide">HomeHero</span>
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
                    <div className='mr-2'>
                        <label className="toggle text-base-content">
                            <input
                                type="checkbox"
                                value="synthwave"
                                checked={isDark}
                                onChange={handleToogle}
                                className="theme-controller" />
                            <svg
                                aria-label="sun"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </g>
                            </svg>
                            <svg
                                aria-label="moon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <div>
                        {
                            user?.email ? <div className='flex gap-2 items-center justify-center'>
                                <div
                                    className="tooltip tooltip-left"
                                    data-tip={user?.displayName || "User"}
                                >
                                    <div
                                        onClick={handleProfileclick}
                                        className='h-10 w-10 lg:h-12 lg:w-12 border border-base-content/20 rounded-full overflow-hidden shadow-sm cursor-pointer'>
                                        <img
                                            src={user?.photoURL}
                                            alt="User Avatar"
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                </div>

                                <div
                                    onClick={handleLogOutButtonClick}>
                                    <a className="btn btn-primary">Logout </a>
                                </div>
                            </div> : <div onClick={handleLoginButtonCllick}>
                                <a className="btn btn-primary">Login </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;