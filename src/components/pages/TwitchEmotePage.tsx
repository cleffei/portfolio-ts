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

import TwitchEmote_success from '../../assets/twitch-emote-success.png';
import TwitchEmote_warn from '../../assets/twitch-no-emotes.png';
import TwitchEmote_error from '../../assets/twitch-no-channel.png';
import TwitchEmote_demo from '../../assets/twitch-emote-demo.gif';

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: TwitchEmote_success,
    width: 1265,
    height: 615,
  },
  {
    src: TwitchEmote_warn,
    width: 1280,
    height: 375,
  },
  {
    src: TwitchEmote_error,
    width: 1280,
    height: 375,
  },
  {
    src: TwitchEmote_demo,
    width: 1280,
    height: 752,
  },
];

const TwitchEmotePage: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-gray-600">
      <div className="container flex flex-col bg-gray-600 items-center px-6 mx-auto mt-26 md:mt-16 space-y-0 md:space-y-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-full text-4xl md:text-6xl lg:text-7xl lg:pl-15 lg:pt-35 font-bold text-amber-300 italic text-center md:text-center break-words">
            Twitch Emote Fetcher
          </h1>
          <p className="max-w-full text-center text-amber-200">
            A React webapp to view your favourite Twitch channel's emotes.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="flex">
            <a
              href="https://github.com/cleffei/twitch-emote-fetch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-1/2 mx-auto md:mb-0"
            >
              <FaGithub size={24} />
              <span className="ml-2">View on GitHub</span>
            </a>
            <a
              href="https://twitch-emote-fetcher.netlify.app/"
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
              This webapp was built within React using Vite. It is a simple
              fetcher using the official Twitch dev API to fetch emotes from a
              specified channel.
              <br />
              The core functionality stems from using the API in two places -
              first to find the channel ID from the specified channel searched
              and then again to use said ID in the call to retrieve the channel
              emotes associated with that channel ID.
            </p>
            <br />
            <p className="max-w-full text-center md:text-left">
              The data is returned as a JSON object which is then parsed to find
              the emote data. Once this data is sourced, the app then renders it
              according to how the user specifies. Twitch has three main sizes
              for their emotes: native, 2x scaling and 4x scaling. These are set
              as radio buttons to allow for quick switching between the
              different sizes.
              <br />
              Animated emotes are also accounted for, checking the path URL to
              see whether or not the emote has an animated version, and if it
              does, replaces the static URL with that of the animated one with
              simple string manipulation. Results are then rendered out in a
              responsive display using TailwindCSS with Flexbox and CSS Grid
              with accompanying Toastify alerts to inform the user as to the
              result of their query.
              <br />
              Additionally, API security was considered too. As this was a fully
              frontend application, pseudo-backend functionality was established
              using Netlify's functions in order to mask the API keys even
              further so that they would not appear within the built JavaScript.
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
              title: 'Successful Search',
              description: 'Results of a channel search returning emotes.',
            },
            {
              ...photos[1],
              title: 'No Emotes Warning',
              description: 'Toast for when a channel has no emotes.',
            },
            {
              ...photos[2],
              title: 'No Channel Error',
              description:
                'Error Toast for when no channel was inputted in the searchbar.',
            },
            {
              ...photos[3],
              title: 'Usage Demo',
              description: 'Demo showcasing Toast stacking and general usage.',
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

export default TwitchEmotePage;
