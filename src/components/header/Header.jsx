import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext)
  const [showNav, setShowNav] = useState(true);
  console.log(user);
  const handleSignout = () => {
    logout();
  }

  return (
    <nav className="header relative">
      <img src={logo} alt="This is the website's logo" />
      <div>
        {showNav ? (
          <Bars3Icon
            onClick={() => setShowNav(false)}
            className="md:hidden h-6 w-6 text-white"
          />
        ) : (
          <XMarkIcon
            onClick={() => setShowNav(true)}
            className="md:hidden h-6 w-6 text-white"
          />
        )}
        {!showNav ? (
          <div className="linkList absolute right-0 bg-gray-800 pr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Signup
            </NavLink>
            {
              user && <NavLink onClick={handleSignout}
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Signout
            </NavLink>
            }
          </div>
        ) : (
          <div className="linkList md:static absolute -top-48 right-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Signup
            </NavLink>
            {
              user && <NavLink onClick={handleSignout}
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-white"
              }
            >
              Signout
            </NavLink>
            }
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
