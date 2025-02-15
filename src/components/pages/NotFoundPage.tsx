import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96 mt-25">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold text-amber-500 mb-4">404 Not Found</h1>
      <p className="text-xl mb-5 text-amber-400">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-amber-500 hover:bg-amber-400 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
