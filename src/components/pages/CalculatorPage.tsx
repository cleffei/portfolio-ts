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

import Calc_main from '../../assets/Calculator_main.png';
import Calc_example from '../../assets/Calculator_2line.png';
import Calc_operations from '../../assets/Calculator_operations.gif';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: Calc_main,
    width: 900,
    height: 841,
  },
  {
    src: Calc_example,
    width: 900,
    height: 841,
  },
  {
    src: Calc_operations,
    width: 898,
    height: 841,
  },
];

const CalculatorPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center whitespace-nowrap md:whitespace-normal text-wrap-balance">
            JavaScript Calculator
          </h1>
          <p className="max-w-full text-center text-amber-200">
            A styled, two-line calculator built in JavaScript!
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="flex">
            <a
              href="https://github.com/cleffei/SimpleCalculator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 w-1/2 mx-auto md:mb-0"
            >
              <FaGithub size={24} />
              <span className="ml-2">View on GitHub</span>
            </a>
            <a
              href="https://simplejscalculator-ah.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-orange-400 text-white rounded-full hover:bg-orange-300 w-1/2 mx-auto md:mb-0"
            >
              <FaArrowRightFromBracket size={24} />
              <span className="ml-2">View a Live Demo</span>
            </a>
          </div>
          <div className="border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
            <h1 className="text-4xl font-bold italic text-center md:mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              Unlike a lot of other calculators, this particular one replicates
              a two-line display commonly seen on many scientific calculators.
              The two-line approach lets a user see what exactly they are
              calculating at a given time, no need for memorisation here! I
              styled this web app after a calculator I had on hand, taking some
              artistic liberties with its orientation.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              This calculator operates based on array manipulation - it saves
              each input as an array and deconstructs said arrays to obtain the
              numeric and operative values from them, allowing for simple
              operations to be performed whilst keeping a string output of the
              equation currently being performed.
              <br />
              Armed with a handy previous answer key (ANS), calculations can be
              performed in quick succession on this little web app.
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
          slides={[
            {
              ...photos[0],
              title: 'Initial Display',
              description: 'The main layout of the calculator.',
            },
            {
              ...photos[1],
              title: 'Two-Line Operations',
              description:
                'The calculator functions like a scientific calculator, in that it shows two lines for operations.',
            },
            {
              ...photos[2],
              title: 'Equation Examples',
              description:
                'Example of some equations being performed on the calculator.',
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

export default CalculatorPage;
