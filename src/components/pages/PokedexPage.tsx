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

import PDex_main from '../../assets/Pokedex_main.png';
import PDex_bio from '../../assets/Pokedex_bio.png';
import PDex_search from '../../assets/Pokedex_search.gif';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: PDex_main,
    width: 2374,
    height: 1297,
  },
  {
    src: PDex_bio,
    width: 2347,
    height: 1297,
  },
  {
    src: PDex_search,
    width: 2372,
    height: 1258,
  },
];

const PokedexPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center md:text-center break-words">
            Generation 1 Pokédex
          </h1>
          <p className="max-w-full text-center text-amber-200">
            A static HTML/CSS recreation of the original Pokédex.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="flex">
            <a
              href="https://github.com/cleffei/Gen1Pokedex_Vanilla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaGithub size={24} />
              <span className="ml-2">View on GitHub</span>
            </a>
            <a
              href="https://adorable-baklava-5437f7.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-orange-400 text-white rounded-full hover:bg-orange-300 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaArrowRightFromBracket size={24} />
              <span className="ml-2">View a Live Demo</span>
            </a>
          </div>
          <div className="border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
            <h1 className="text-4xl font-bold text-center italic md:mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              This personal project was done shortly after I had done some
              catch-up revision of both HTML and CSS. I created a static page
              that would showcase a replica of the original 151 Pokédex from the
              original Game Boy Pokémon games, complete with the original
              sprites, the exact data from the games and a retro-inspired font.
              <br />I had a lot of fun working on this project, though I learned
              a lot about how I should and shouldn't do things, such as being
              absolutely sure that I didn't need to add in any more data before
              creating every entry! I learned that the hard way.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              This project is relatively small in scope, but I have ambitions of
              eventually refactoring it entirely into a version 2 that pulls
              from an API to fetch the correct data to populate the individual
              components of the Pokédex, so keep an eye out for that sometime in
              the future!
              <br />
              The project does also include some small vanilla JavaScript too,
              in order to filter the Pokémon searched live with a simple
              filtration function as well as including a function that would
              assign each hidden Pokédex entry with its corresponding button a
              visible class to let it appear with a smooth animation!
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
              title: 'Main View',
              description: 'Main screen of the Pokédex upon load.',
            },
            {
              ...photos[1],
              title: 'Pokédex Entry',
              description: "A Pokémon's Pokédex entry.",
            },
            {
              ...photos[2],
              title: 'Search Functionality',
              description:
                "The Pokédex will filter the shown entries as a user types in a Pokémon's name.",
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

export default PokedexPage;
