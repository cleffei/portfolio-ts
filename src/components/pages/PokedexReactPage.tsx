import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

import { RowsPhotoAlbum } from 'react-photo-album';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'react-photo-album/rows.css';

import PdexReactDemo from '../../assets/Pokedex_React_Demo.gif';
import PdexReactMobileDemo from '../../assets/Pokedex_React_Mobile_Demo.gif';
import PdexReactMobile from '../../assets/Pokedex_React_Mobile_View.png';
import PdexReactMobileLandscape from '../../assets/Pokedex_React_Mobile_Landscape.png';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: PdexReactDemo,
    width: 1720,
    height: 1045,
  },
  {
    src: PdexReactMobileDemo,
    width: 412,
    height: 883,
  },
  {
    src: PdexReactMobile,
    width: 412,
    height: 883,
  },
  {
    src: PdexReactMobileLandscape,
    width: 568,
    height: 320,
  },
];

const PokedexReactPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center md:text-center break-words">
            Generation I Pokédex React Rebuild
          </h1>
          <p className="max-w-full text-center text-amber-200">
            The React rebuild of my Pokédex web app.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="flex">
            <a
              href="https://github.com/cleffei/Pokedex_V2_React"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaGithub size={24} />
              <span className="ml-2">View on GitHub</span>
            </a>
            <a
              href="https://rb-pokedex-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-orange-400 text-white rounded-full hover:bg-orange-300 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaArrowRightFromBracket size={24} />
              <span className="ml-2">View a Live Demo</span>
            </a>
          </div>
          <div className="border rounded-lg p-5 mt-5 bg-gradient-to-b from-gray-200 to-gray-400 drop-shadow-lg opacity-90">
            <h1 className="text-4xl font-bold text-center italic md:mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              This webapp was built within React using Vite. It is a recreation
              of my previous static Pokédex web app. The prior one was made
              purely using HTML, CSS and some light JavaScript.
              <br />I wanted to eventually go back and remake it in a more
              production-worthy way and I believe I have made that step here.
              The app now fetches its data from a JSON file that contains all of
              the Pokémon, including their information and a path to their
              sprite.
              <br />
              The functionality stems from this JSON file being parsed and the
              content being dynamically populated using this data. Besides that,
              the app functions identically to how it did before with some
              slight improvements and cleanup to things such as the footer, the
              mobile view and so on.
              <br />
              Before, the mobile view wasn't as well thought-out, but now it has
              a much more dynamic styling that makes it more adaptable to
              different layouts and screen sizes, within reason.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              As stated above, the data is fetched from the JSON file and all of
              the required information is sourced from there. The Pokédex builds
              itself and renders all of the necessary buttons to view the
              corresponding Pokémon data. The searchbar filters these results
              and causes the app to only render out what matches the current
              search query. A blank search will return the results to their
              default behaviour.
              <br />
              The app itself is more robust due to the use of React and has a
              much cleaner presentation when looking directly at the source
              code. To the end user, they may not notice much of a difference at
              all but at least now the app is much more respectable and has
              individual components separated to make styling, modification and
              debugging a lot easier.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Lightbox
          styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
          plugins={[Thumbnails, Zoom, Captions]}
          captions={{ showToggle: true, descriptionTextAlign: 'start' }}
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={[
            {
              ...photos[0],
              title: 'Desktop Use Demo',
              description: 'Demo of the general operations while on desktop.',
            },
            {
              ...photos[1],
              title: 'Mobile View Demo',
              description: 'Demo of the general operations while on mobile.',
            },
            {
              ...photos[2],
              title: 'Mobile View',
              description:
                'Pokédex entries are now much more adaptable to a mobile layout, replicating their desktop alternative.',
            },
            {
              ...photos[3],
              title: 'Landscape View',
              description:
                'The new styling also allows for a cleaner presentation while viewing on a mobile device in a landscape orientation.',
            },
          ]}
          zoom={{ scrollToZoom: true }}
        />
      </div>

      <div className="bg-gray-700 items-center px-6 mx-auto mt-16 space-y-0 md:space-y-0 md:flex-row">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-3xl font-bold italic text-amber-200 text-right md:text-7xl">
            Gallery
          </h2>
          <div className="w-full max-w-4xl mx-auto p-5">
            <RowsPhotoAlbum
              photos={photos}
              onClick={({ index: current }) => setIndex(current)}
              sizes={{
                size: '200px',
                sizes: [
                  { viewport: '(max-width: 767px)', size: 'calc(50vw - 16px)' },
                  {
                    viewport: '(max-width: 1279px)',
                    size: 'calc(50vw - 144px)',
                  },
                  {
                    viewport: '(min-width: 1280px)',
                    size: 'calc(33vw - 96px)',
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokedexReactPage;
