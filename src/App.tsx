import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import React from 'react';
import HomePage from './components/pages/HomePage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './components/pages/NotFoundPage';
import AboutMePage from './components/pages/AboutMePage';
import SharedMobilityAdventurePage from './components/pages/SharedMobilityAdventurePage';
import ClearPathNYCPage from './components/pages/ClearPathNYCPage';
import DublinBikesPage from './components/pages/DublinBikesPage';
import PythonPlaylistPage from './components/pages/PythonPlaylistPage';
import PokedexPage from './components/pages/PokedexPage';
import CalculatorPage from './components/pages/CalculatorPage';
import TwitchEmotePage from './components/pages/TwitchEmotePage';
import PokedexReactPage from '@pages/PokedexReactPage';

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route
          path="/projects/shared-mobility-adventure"
          element={<SharedMobilityAdventurePage />}
        />
        <Route path="/projects/clearpath-nyc" element={<ClearPathNYCPage />} />
        <Route path="/projects/pyplaylist" element={<PythonPlaylistPage />} />
        <Route path="/projects/dublin-bikes" element={<DublinBikesPage />} />
        <Route path="/projects/pokédex" element={<PokedexPage />} />
        <Route path="/projects/js_calc" element={<CalculatorPage />} />
        <Route path="/projects/twitch_fetch" element={<TwitchEmotePage />} />
        <Route path="/projects/pokédex_react" element={<PokedexReactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
