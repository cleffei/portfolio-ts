import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HTML_logo from '../assets/html-5.svg';
import CSS_logo from '../assets/css-3.svg';
import JS_logo from '../assets/javascript.svg';
import TS_logo from '../assets/typescript.svg';
import Tailwind_logo from '../assets/tailwindcss-icon.svg';
import React_logo from '../assets/react.svg';
import Python_logo from '../assets/python.svg';
import Ruby_logo from '../assets/ruby.svg';
import Java_logo from '../assets/java.svg';
import Node_logo from '../assets/nodejs-icon-alt.svg';

const Skillset: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="skillset">
        <div className="flex flex-col max-w-6xl px-5 mx-auto mt-5 md:mt-32 text-center bg-gray-700">
          <h2 className="text-4xl font-bold italic text-amber-200 text-right md:text-7xl">
            Technological Skillset
          </h2>
          <Slider {...settings} className="mt-8 md:mt-24">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={HTML_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="HTML5"
                />
                <img
                  src={CSS_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="CSS3"
                />
                <h5 className="text-lg font-bold">HTML / CSS</h5>
              </div>
              <p className="text-sm">
                I have a strong grasp on the fundamentals of both HTML5 and
                CSS3, giving me a strong footing for the foundational components
                of web development.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={JS_logo}
                  className="w-16 h-16 -mt-4 drop-shadow-xl"
                  alt="JAVASCRIPT"
                />
                <h5 className="text-lg font-bold">JavaScript</h5>
              </div>
              <p className="text-sm ">
                Alongside HTML and CSS, I have a solid understanding of
                JavaScript and feel comfortable using it. I am acclimated with
                the functionality of JS post the ES 2015 update. I have used
                JavaScript in both front and backend situations.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={TS_logo}
                  className="w-16 h-16 -mt-4 drop-shadow-xl"
                  alt="JAVASCRIPT"
                />
                <h5 className="text-lg font-bold">TypeScript</h5>
              </div>
              <p className="text-sm border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
                Alongside HTML and CSS, I have a solid understanding of
                JavaScript and feel comfortable using it. I am acclimated with
                the functionality of JS post the ES 2015 update. I have used
                JavaScript in both front and backend situations.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={Tailwind_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="TAILWINDCSS"
                />
                <h5 className="text-lg font-bold">TailwindCSS</h5>
              </div>
              <p className="text-sm">
                Tailwind is my utility framework of choice for CSS styling, I
                feel that it offers great versatility, efficiency and allows for
                quick and spontaneous testing of ideas. This webpage was styled
                primarily with Tailwind!
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={React_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="REACT.JS"
                />
                <h5 className="text-lg font-bold">React.js</h5>
              </div>
              <p className="text-sm">
                I have past experience working with React and it is the
                JavaScript framework I am most familiar with, having used it in
                previous projects as well as for this website now! I have
                experience in multiple different libraries and am comfortable
                with npm installations.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={Python_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="PYTHON"
                />
                <h5 className="text-lg font-bold">Python</h5>
              </div>
              <p className="text-sm">
                Python was one of my first introductions to programming and I
                feel comfortable using it. I have used it for both application
                development as well as data analysis with libraries such as
                Numpy and Pandas.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={Ruby_logo}
                  className="w-16 h-16 -mt-4 drop-shadow-xl"
                  alt="RUBY"
                />
                <h5 className="text-lg font-bold">Ruby</h5>
              </div>
              <p className="text-sm">
                Ruby was another language I learned during my Master's course.
                Mainly used it for functional purposes and overall learning of
                coding practices. Familiar with the use of Gems.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={Java_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="JAVA"
                />
                <h5 className="text-lg font-bold">Java</h5>
              </div>
              <p className="text-sm">
                I worked with Java during my Master's course, the main
                culmination of said work being the educational game I made
                alongside a team of colleagues - Shared-Mobility Adventure, a
                game which teaches players about the effects of carbon emissions
                on the environment.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500 mt-12 border-10 border-gray-700 w-80 h-70">
              <div className="flex justify-between">
                <img
                  src={Node_logo}
                  className="w-16 h-16 -mt-4 rounded-lg drop-shadow-xl"
                  alt="NODE.JS"
                />
                <h5 className="text-lg font-bold">Node.js</h5>
              </div>
              <p className="text-sm">
                I have worked on primarily HTTP interfacing within Node.js as
                well as testing responses with tools like Postman. I feel that I
                can make use of my JavaScript skills in both a frontend and
                backend environments when I need to. I have also used Express.js
                for aid with these HTTP projects.
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Skillset;
