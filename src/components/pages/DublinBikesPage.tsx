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

import DB_main from '../../assets/DublinBikesDemo.png';
import DB_predict from '../../assets/BikeAvailability.png';
import DB_stations from '../../assets/DublinBikes_allStations.png';
import DB_diagram from '../../assets/DublinBikes-Diagram.png';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: DB_main,
    width: 1988,
    height: 1494,
  },
  {
    src: DB_predict,
    width: 347,
    height: 341,
  },
  {
    src: DB_stations,
    width: 2221,
    height: 1665,
  },
  {
    src: DB_diagram,
    width: 2004,
    height: 934,
  },
];

const DublinBikesPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center whitespace-nowrap md:whitespace-normal text-wrap-balance">
            Dublinbikes Availability
          </h1>

          <p className="max-w-full text-center text-amber-200">
            A Flask app that lets you plan journeys around bike availability.
          </p>
        </div>

        <div className="md:w-1/2">
          <a
            href="https://github.com/0venBurn/Dublin-Bikes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 w-1/2 mx-auto md:mb-0"
          >
            <FaGithub size={24} />
            <span className="ml-2">View on GitHub</span>
          </a>
          <div className="border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
            <h1 className="text-4xl font-bold text-center italic mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              Using the JCDecaux API to get live information regarding the 116
              live Dublinbikes stations, a user could input a start and end
              point to a planned journey and the app would, using its own
              machine-learned calculation, estimate which stations would be the
              most ideal to make use of, one to pick up a bike and another to
              drop off the bike.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              The app takes the perceived busyness of the stations as well as
              its distance from the start/end point inputted. Using a
              calculation that weighs the proximity of the station as well as
              its predicted busyness, the app then returns the best choices for
              stations to make use of during a user's journey, taking into
              account the frequency at which some stations are used, the number
              of bikes available.
              <br />
              All of this is then displayed on a map using the Google Maps API
              to plot our route, the stations and our start and end points.
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
            design you see in use, as well as working alongside the Frontend
            Lead to create the frontend UI, working closely with React, vanilla
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
          slides={[
            {
              ...photos[0],
              title: 'Main App View',
              description:
                "The app's main view, showcasing the map, sidebar and station markers.",
            },
            {
              ...photos[1],
              title: 'Main App View',
              description:
                "The app's main view, showcasing the map, sidebar and station markers.",
            },
            {
              ...photos[2],
              title: 'Main App View',
              description:
                "The app's main view, showcasing the map, sidebar and station markers.",
            },
            {
              ...photos[3],
              title: 'Main App View',
              description:
                "The app's main view, showcasing the map, sidebar and station markers.",
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

export default DublinBikesPage;
