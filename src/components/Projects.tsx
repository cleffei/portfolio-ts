import React from 'react';
import { Link } from 'react-router-dom';
import ClearPathLogo from '../assets/ClearPathLogo.png';
import SharedMobilityAdventureLogo from '../assets/SharedMobilityAdvantureLogo.png';
import DublinBikesLogo from '../assets/DublinBikesLogo.png';
import PythonPlaylistLogo from '../assets/PythonPlaylistLogo.png';
import PokedexLogo from '../assets/PokedexLogo.png';
import JSCalcLogo from '../assets/JSCalcLogo.png';
import TwitchEmoteLogo from '../assets/TwitchEmoteLogo.png';

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="bg-gray-600">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <div>
            <h2 className="text-6xl text-amber-200 font-bold text-left italic mb-10">
              Past Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            <div>
              <Link
                to="/projects/clearpath-nyc"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={ClearPathLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/shared-mobility-adventure"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={SharedMobilityAdventureLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/dublin-bikes"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={DublinBikesLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/pyplaylist"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={PythonPlaylistLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/pokédex"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={PokedexLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/js_calc"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={JSCalcLogo}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/projects/twitch_fetch"
                className="text-indigo-500 hover:text-indigo-600 items-center"
              >
                <img
                  className="border border-amber-500 rounded-lg"
                  src={TwitchEmoteLogo}
                />
              </Link>
            </div>
          </div>
          <br />
          <h2 className="text-4xl text-amber-200 font-bold italic text-right mt-20 mb-10">
            Always more projects coming soon..!
          </h2>
        </div>
      </section>
    </>
  );
};

export default Projects;
