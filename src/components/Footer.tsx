import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <section id="footer" className="bg-gray-800">
      <div className="border-t border-amber-500">
        <div className="container flex flex-col bg-gray-800 items-center px-6 pb-5 mx-auto mt-0 md:flex-row md:flex-wrap">
          <div className="flex flex-col items-center text-center mt-5 md:w-full md:flex-row md:justify-between">
            <div className="flex flex-col">
              <p className="max-w-full text-2xl font-bold text-amber-300 italic">
                Website Designed & Built by Adam Herdman
              </p>
              <p className="text-amber-300 italic mt-1">2025</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/cleffei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-500 transition duration-300"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-herdman1999/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-500 transition duration-300"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
