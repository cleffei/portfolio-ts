import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const atTop = window.scrollY === 0;
    setIsVisible(atTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'bg-amber-500 text-white hover:bg-amber-400 hover:text-white rounded-md px-3 py-2'
      : 'text-amber-300 hover:bg-amber-400 hover:text-white rounded-md px-3 py-2';

  return (
    <div
      id="top-bar"
      className={`flex justify-between bg-gray-800 fixed top-0 right-0 left-0 py-2 border border-b-amber-500 z-100 ${
        isVisible ? 'visible-bar' : 'hidden-bar'
      }`}
    >
      <h1 className="text-center py-2 text-amber-300 font-semibold ml-5">
        Quick Navigation
      </h1>
      <ul className="flex text-center py-2 space-x-4 font-semibold mr-5">
        <li>
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="#projects" className={linkClass}>
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-me" className={linkClass}>
            ABOUT ME
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
