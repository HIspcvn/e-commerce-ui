import React from "react";
import { Wishlist } from "../common/Withlist";
import { AccountIcon } from "../common/AccountIcon";
import { CartIcon } from "../common/CartIcon";
import logo from "../../assets/image/logoimg.png"
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center py-6 px-8 justify-between">
            <div className="flex items-center">
                {/* Logo icon */}
                {/* <img src={logo} alt="Logo" className="h-10 w-10 object-contain" /> */}
                {/* Logo */}
                <a className="text-3xl text-black font-bold gap-8" href="/">Shoppeee</a>

            </div>
            <div className="flex flex-wrap items-center gap-10">
                {/* Nav item */}
                <ul className="flex gap-14 text-gray-600 hover:text-black">
                    <li><NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} hover:underline transition duration-300`} to="/">Shop</NavLink></li>
                    <li><NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} hover:underline transition duration-300`} to="/men">Men</NavLink></li>
                    <li><NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} hover:underline transition duration-300`} to="/women">Women</NavLink></li>
                    <li><NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} hover:underline transition duration-300`} to="/kids">Kids</NavLink></li>
                </ul>
            </div>
            <div className="flex justify-center">
                {/* Search bar */}
                <div className="border rounded flex overflow-hidden">
                    <div className="flex items-center justify-center px-4 border-1">
                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                        <input type="text" className="px-4 py-2 outline-none" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                {/* Action item - icons */}
                <ul className="flex items-center gap-8">
                    <li><button><Wishlist /></button></li>
                    <li><button><AccountIcon /></button></li>
                    <li><button><CartIcon /></button></li>
                </ul>
            </div>


        </nav>
    )
}

export default Navigation