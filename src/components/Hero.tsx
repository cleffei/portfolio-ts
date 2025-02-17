import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="bg-gray-600">
        <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 md:mb-5 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
          <div className="flex flex-col mb-32 space-y-12 lg:mt-35 md:w-1/2">
            <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 font-bold text-amber-300 italic text-center md:text-center whitespace-nowrap md:whitespace-normal text-wrap-balance">
              Adam Herdman
            </h1>
            <p className="max-w-full text-center md:text-center text-amber-200">
              2:1 Master's Honours Computer Science (Conversion)
              <br />
              Graduate 1st Class Honours Creative Media Technologies Graduate
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="border rounded-lg p-5 mt-5 bg-gradient-to-b from-gray-200 to-gray-400 drop-shadow-lg opacity-90">
              <h1 className="text-4xl font-bold text-center italic mb-10 md:text-left">
                About Me
              </h1>
              <p className="max-w-full text-center md:text-left">
                I am a recent graduate of University College Dublin's Computer
                Science Master's conversion course. Finishing with a 2:1 honours
                classification, I am now hoping to break into the web
                development sphere, focusing on frontend design and development!
              </p>
              <br />
              <p className="max-w-full text-center mb-10 md:text-left">
                Prior to this, I had completed a Bachelor's degree in Creative
                Media Technologies, achieving a first class honour's
                classification from the Dún Laoghaire Institute of Art, Design
                and Technology (IADT). I feel that by combining these two
                academic backgrounds, I could work towards becoming a frontend
                developer who has an awareness of the ins and outs of what makes
                a design tick, how to make an interface that is both friendly
                and functional, providing a user with the best of both worlds!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
