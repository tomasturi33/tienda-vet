import React from "react";
import Icon from '@mdi/react';
import { mdiHome , mdiTable, mdiListBoxOutline, mdiAccountMultipleOutline } from '@mdi/js';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeStyle = 'bg-gray-100'

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 pt-20 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
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
                  <Icon path={mdiHome} size={.8} className="mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                  <Icon path={mdiTable} size={.8} className="mr-2" />
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                <Icon path={mdiListBoxOutline} size={.8} className="mr-2" />
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group 
                  ${isActive ? activeStyle : ""}`
                }>
                <Icon path={mdiAccountMultipleOutline} size={.8} className="mr-2" />
                Usuarios
              </NavLink>
            </li>

          </ul>
      </div>
    </aside>
  );
};

export default Sidebar;