import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="This is the website's logo" />
            <div>
                {/* <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link> */}

                <NavLink
                    to='/' className={({ isActive }) => isActive ? "text-orange-600" : "text-white" }>Shop
                </NavLink>
                <NavLink
                    to='/orders' className={({ isActive }) => isActive ? "text-orange-600" : "text-white" }>Orders
                </NavLink>
                <NavLink
                    to='/inventory' className={({ isActive }) => isActive ? "text-orange-600" : "text-white" }>Inventory
                </NavLink>
                <NavLink
                    to='/login' className={({ isActive }) => isActive ? "text-orange-600" : "text-white" }>Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;