import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeStyle = 'bg-gray-100'

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/clothes'
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/electronics'
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/furnitures'
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/toys'
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/others'
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                Others
              </NavLink>
            </li>

          </ul>
      </div>
    </aside>
  );
};

export default Sidebar;