import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleHamMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <ul className="hidden md:flex text-center py-2 space-x-4 font-semibold mr-5">
        <li>
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
        </li>
        <li>
          <a
            href="#projects"
            className="text-amber-300 hover:bg-amber-400 hover:text-white rounded-md px-3 py-2"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <NavLink to="/about-me" className={linkClass}>
            ABOUT ME
          </NavLink>
        </li>
      </ul>

      <button
        onClick={toggleHamMenu}
        className="block hamburger md:hidden focus:outline-none pt-3 pr-11"
      >
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
      </button>

      <div
        className={`absolute top-14 left-0 right-0 bg-gray-800 drop-shadow-md border border-b-amber-500 border-t-gray-800 flex flex-col items-center py-6 space-y-4 font-bold transition-all ${
          menuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <NavLink to="/" className="text-amber-300" onClick={toggleHamMenu}>
          Home
        </NavLink>
        <a href="#projects" className="text-amber-300" onClick={toggleHamMenu}>
          Projects
        </a>
        <NavLink
          to="/about-me"
          className="text-amber-300"
          onClick={toggleHamMenu}
        >
          About Me
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
