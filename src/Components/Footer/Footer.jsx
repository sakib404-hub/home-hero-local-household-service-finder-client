import React from 'react';
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content px-10 py-16 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-primary mb-3">HomeHero</h2>
                    <p className="leading-relaxed text-base-content/70">
                        Reliable home services at your doorstep. <br />
                        Fast • Safe • Trusted.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-2xl text-base-content hover:text-primary">
                        <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">Cleaning</a></li>
                        <li><a className="link link-hover">Plumbing</a></li>
                        <li><a className="link link-hover">Electrical</a></li>
                        <li><a className="link link-hover">Shifting</a></li>
                        <li><a className="link link-hover">Appliance Repair</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">About Us</a></li>
                        <li><a className="link link-hover">Careers</a></li>
                        <li><a className="link link-hover">Press</a></li>
                        <li><a className="link link-hover">Blog</a></li>
                        <li><a className="link link-hover">Partners</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">Help Center</a></li>
                        <li><a className="link link-hover">Contact Support</a></li>
                        <li><a className="link link-hover">Terms of Service</a></li>
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Refund Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-14 border-t border-base-300 pt-6">
                <p>
                    Copyright © {new Date().getFullYear()}
                    <span className="font-semibold text-primary"> HomeHero</span> — All rights reserved.
                </p>
            </div>
        </footer>
    );
}


export default Footer;