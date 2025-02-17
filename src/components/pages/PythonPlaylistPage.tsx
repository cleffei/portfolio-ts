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

import PyP_main from '../../assets/PyPlaylist1.png';
import PyP_add from '../../assets/PyPlaylist2.png';
import PyP_playlist from '../../assets/PyPlaylist5.png';
import PyP_search from '../../assets/PyPlaylist6.png';
import PyP_play from '../../assets/PyPlaylist7.png';
import PyP_sort from '../../assets/PyPlaylist8.png';
import PyP_shuffle from '../../assets/PyPlaylist9.png';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: PyP_main,
    width: 403,
    height: 445,
  },
  {
    src: PyP_add,
    width: 702,
    height: 447,
  },
  {
    src: PyP_playlist,
    width: 759,
    height: 227,
  },
  {
    src: PyP_search,
    width: 429,
    height: 319,
  },
  {
    src: PyP_play,
    width: 614,
    height: 262,
  },
  {
    src: PyP_sort,
    width: 701,
    height: 412,
  },
  {
    src: PyP_shuffle,
    width: 718,
    height: 313,
  },
];

const PythonPlaylistPage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center md:text-center break-words">
            Python Playlist Sorter
          </h1>
          <p className="max-w-full text-center text-amber-200">
            Organise a playlist using a circular doubly-linked list data
            structure.
          </p>
        </div>

        <div className="md:w-1/2">
          <a
            href="https://github.com/Conor-O-Mahony/PythonPlaylist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-1/2 mx-auto md:mb-0"
          >
            <FaGithub size={24} />
            <span className="ml-2">View on GitHub</span>
          </a>
          <div className="border rounded-lg p-5 mt-5 bg-gradient-to-b from-gray-200 to-gray-400 drop-shadow-lg opacity-90">
            <h1 className="text-4xl font-bold text-center mb-10 md:text-left">
              About This Project...
            </h1>
            <p className="max-w-full text-center md:text-left">
              This Python playlist project was a test of the Data Structures and
              Algorithms module we had during our second trimester. For this
              project, we had to showcase some way in which a real-world problem
              could be tackled by using some kind of algorithm.
              <br /> The three members in my team all had an interest in music,
              so we dabbled with the idea of using an algorithm to organise a
              user's music playlist in some way, as this could be initialised as
              some kind of array, allowing for many different data structure
              operations to be performed on it.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              The app is built in Python and has a totally command
              line-controlled interface. This leaves a bit to be desired
              visually, but as the project was mostly a showcase of DSA
              applications in a real-world environment, we went through with it
              and had everything be operated via CLI.
              <br />
              The main workings of this app consist around the use of a circular
              doubly linked list algorithm. This was chosen as it corresponded
              to our use of music as the real-world problem being tackled, as
              this algorithm is primarily used in many music playing
              applications and organisers due to the multiple layers of data
              which music can have (runtime, artist, title, etc.) and a circular
              doubly linked list primarily operates with head and tail nodes of
              multiple files, this makes a lot of sense when working in the
              context of music where these files would be played sequentially,
              unordered and in many other ways.
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
              title: 'Welcome & Options',
              description: 'The initial options presented to the user.',
            },
            {
              ...photos[1],
              title: 'Song Creation',
              description: 'Creating a song and choosing where to place it.',
            },
            {
              ...photos[2],
              title: 'Playlist',
              description: 'Example of a populated playlist.',
            },
            {
              ...photos[3],
              title: 'Searching',
              description: 'Options to search within a playlist.',
            },
            {
              ...photos[4],
              title: 'Playing Song',
              description: 'UI for playing a song.',
            },
            {
              ...photos[5],
              title: 'Playlist Sorting',
              description: 'Options for sorting a playlist.',
            },
            {
              ...photos[6],
              title: 'Playlist Shuffling',
              description: 'Shuffling a playlist.',
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

export default PythonPlaylistPage;
