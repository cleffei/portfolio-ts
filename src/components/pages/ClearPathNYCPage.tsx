import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import { FaGithub } from 'react-icons/fa';

import { RowsPhotoAlbum } from 'react-photo-album';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'react-photo-album/rows.css';

import CPNYC_path from '../../assets/park_path.png';
import CPNYC_legend from '../../assets/warnings.png';
import CPNYC_main from '../../assets/path.png';
import CPNYC_diagram from '../../assets/diagram_bw.jpeg';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: CPNYC_main,
    width: 1278,
    height: 685,
  },
  {
    src: CPNYC_path,
    width: 1708,
    height: 1276,
  },
  {
    src: CPNYC_legend,
    width: 235,
    height: 238,
  },
  {
    src: CPNYC_diagram,
    width: 1040,
    height: 610,
  },
];

const ClearPathNYCPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center whitespace-nowrap md:whitespace-normal text-wrap-balance">
            ClearPath NYC
          </h1>
          <p className="max-w-full text-center text-amber-200">
            Navigate through Manhattan, plan a journey with ease.
          </p>
        </div>

        <div className="md:w-1/2">
          <a
            href="https://github.com/Southwick-Adam/ClearPathNYC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 w-1/2 mx-auto md:mb-0"
          >
            <FaGithub size={24} />
            <span className="ml-2">View on GitHub</span>
          </a>
          <div className="border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
            <h1 className="text-4xl italic font-bold text-center mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              ClearPath NYC was the culmination of the Summer research practicum
              portion of my Master's course. During the Summer trimester, we
              were placed into specific groups based on the role that we wished
              to play in the project. In my group, I was placed as the Customer
              Lead - the member who would act in place of a customer and their
              corresponding interactions with the project. This meant that I was
              in charge of setting a design framework that I wanted the project
              to follow, as well as creating the actual visual design of the web
              app too.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              My primary role in ClearPath NYC was to get the design settled for
              the frontend layout. I had drawn up a few initial sketches of how
              the web app should look, eventually settling on a display with a
              primary sidebar for the main controls and then hovering nodes for
              more information, such as the weather and any other alerts.
              <br />
              The overall design was made to be applicable to both a desktop and
              mobile layout, with the sidebar working perfectly in a vertical
              orientation, as it would take up the screen without needing to be
              scrolled, giving the user full use of the app's control deck,
              while allowing the sidebar to then be hidden while the map was in
              view. Alongside the main sidebar, the legend sidebar as well as
              the popup alerts could be hidden too, giving the user a full view
              of the map should they need it.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold italic text-amber-200 mb-10 text-left md:text-7xl">
            My Role
          </h2>
          <p className="max-w-6xl text-center md:text-left border rounded-lg p-5 mt-5 bg-gray-200">
            In this project, I held the responsibility of creating the core
            design you see in use, as well as working alongside the Frondend
            Lead to create the frontend UI, working closly with React, vanilla
            JavaScript functions as well as the CSS styling. I also handmade all
            of the icons, some buttons and worked to style and clean up
            components after they were created by the Frontend Lead. I also
            helped design an animated loading screen that would populate the
            viewing area until all of the components were loaded in and ready
            for use, to help elevate the general user experience and provide a
            clean modern solution.
          </p>
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
              title: 'Main Layout',
              description:
                'The main layout of the page, showcasing the overall layout.',
            },
            {
              ...photos[1],
              title: 'Parkview Route',
              description:
                'A route generated that favours going through "greener" areas such as Central Park',
            },
            {
              ...photos[2],
              title: 'Warning Toggles',
              description:
                'Within the right sidebar, a user can toggle on or off specific warnings that appear on the map.',
            },
            {
              ...photos[3],
              title: 'Technology Diagram',
              description:
                'Diagram showcasing the individual components of our project from the frontend all the way to the database backend.',
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

export default ClearPathNYCPage;
