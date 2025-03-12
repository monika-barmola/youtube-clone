import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`bg-gray-200 p-4 h-full fixed top-0 left-0 w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
