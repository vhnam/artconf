import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

import MainLayout from './layouts/MainLayout';

import Loading from './components/Loading';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import config from './config';

library.add(faBars, faTimes);

const HomePage = Loadable({
  loader: () => import('./scenes/Home'),
  loading: Loading,
});

const IntroductionPage = Loadable({
  loader: () => import('./scenes/Introduction'),
  loading: Loading,
});

const GalleryPage = Loadable({
  loader: () => import('./scenes/Gallery'),
  loading: Loading,
});

const RegistrationPage = Loadable({
  loader: () => import('./scenes/Registration'),
  loading: Loading,
});

const SchedulePage = Loadable({
  loader: () => import('./scenes/Schedule'),
  loading: Loading,
});

const SpeakersPage = Loadable({
  loader: () => import('./scenes/Speakers'),
  loading: Loading,
});

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path={config.paths.home} exact component={HomePage} />
        <Route
          path={config.paths.introduction}
          exact
          component={IntroductionPage}
        />
        <Route path={config.paths.schedule} exact component={SchedulePage} />
        <Route path={config.paths.speakers} exact component={SpeakersPage} />
        <Route path={config.paths.gallery} exact component={GalleryPage} />
        <Route
          path={config.paths.registration}
          exact
          component={RegistrationPage}
        />
      </MainLayout>
    </Router>
  );
}

export default App;
