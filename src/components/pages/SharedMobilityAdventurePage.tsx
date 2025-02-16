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

import SMA_gameover from '../../assets/SMA-gameover.png';
import SMA_load from '../../assets/SMA-loadscreen.png';
import SMA_title from '../../assets/SMA-title.png';
import SMA_popup1 from '../../assets/SMA-popup1.png';
import SMA_popup2 from '../../assets/SMA-popup2.png';
import SMA_popup3 from '../../assets/SMA-popup3.png';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: SMA_title,
    width: 976,
    height: 720,
  },
  {
    src: SMA_popup1,
    width: 976,
    height: 720,
  },
  {
    src: SMA_popup2,
    width: 976,
    height: 720,
  },
  {
    src: SMA_load,
    width: 976,
    height: 720,
  },
  {
    src: SMA_gameover,
    width: 976,
    height: 720,
  },
  {
    src: SMA_popup3,
    width: 976,
    height: 720,
  },
];

const SharedMobilityAdventurePage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center md:text-center whitespace-nowrap md:whitespace-normal text-wrap-balance">
            Shared-Mobility Adventure
          </h1>
          <p className="max-w-full text-center text-amber-200">
            A Java game that teaches you about carbon emissions!
          </p>
        </div>

        <div className="md:w-1/2">
          <div>
            <a
              href="https://github.com/Conor-O-Mahony/SharedMobilityAdventure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaGithub size={24} />
              <span className="ml-2">View on GitHub</span>
            </a>
          </div>
          <div className="border rounded-lg p-5 mt-5 bg-gray-200 drop-shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-5 md:mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              Shared-Mobility Adventure was the project undertaken by myself and
              my team of colleagues for our Java Programming module. We were
              tasked with creating an interactive game in which a player would
              learn about the impact of carbon emissions on our planet and to
              maybe help them see the benefits of taking public transportation
              or walking in place of taking one's own car.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              This project was my first proper introduction to Java, as well as
              the Eclipse IDE and while it was a bit difficult to grasp at
              first, it quickly became a satisfying challenge that the team
              undertook, helping us bolster not only our programming skills, but
              also our teamwork skills and it really helped give us an idea of
              how to work with a more git-conscious approach, taking into
              account how changes would affect the master branch, how to make
              our own individual branches work together and so on.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <div className="mx-auto">
          <div className=" drop-shadow-lg">
            <h2 className="text-3xl font-bold italic text-amber-200 mb-10 text-left md:text-7xl">
              My Role
            </h2>
            <p className="max-w-6xl text-center md:text-left border rounded-lg p-5 mt-5 bg-gray-200">
              For this project, I took on a primarily frontend role, creating
              many of the visual aspects you see within the game, such as the
              HUD, the interactive buttons as well as their hover states. I was
              also in charge of making the popups function as intended, giving
              them trigger points like when a player would step on a tile
              containing an information node. I would have to think about how
              they would be triggered and where within the game logic they would
              appear - so that they would come up on the right frame, instead of
              being either too early or too late.
              <br />
              The frontend aspect of this project involved a lot of design work
              and importing said designs into the game as images that would then
              be drawn on by the game's score counters. I created most of the
              designs within Clip Studio Paint, exporting them as image files
              and then bringing them into our game's source files for use.
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
              title: 'Title Screen',
              description:
                'This is the title screen of the Shared-Mobility Adventure game.',
            },
            {
              ...photos[1],
              title: 'Popup 1',
              description:
                'This is the first popup in the Shared-Mobility Adventure game.',
            },
            {
              ...photos[2],
              title: 'Popup 2',
              description:
                'This is the second popup in the Shared-Mobility Adventure game.',
            },
            {
              ...photos[3],
              title: 'Load Screen',
              description:
                'This is the load screen of the Shared-Mobility Adventure game.',
            },
            {
              ...photos[4],
              title: 'Game Over Screen',
              description:
                'This is the game over screen of the Shared-Mobility Adventure game.',
            },
            {
              ...photos[5],
              title: 'Popup 3',
              description:
                'This is the third popup in the Shared-Mobility Adventure game.',
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

export default SharedMobilityAdventurePage;
