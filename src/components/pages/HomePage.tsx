import React from 'react';
import Hero from '../Hero';
import Skillset from '../Skillset';
import Projects from '../Projects';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-700">
      <Hero />
      <Skillset />
      <Projects />
    </div>
  );
};

export default HomePage;
