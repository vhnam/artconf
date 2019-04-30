import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

import MainLayout from './layouts/MainLayout';

import Loading from './components/Loading';

const HomePage = Loadable({
  loader: () => import('./scenes/Home'),
  loading: Loading,
});

const IntroductionPage = Loadable({
  loader: () => import('./scenes/Introduction'),
  loading: Loading,
});

const LatestConferencePage = Loadable({
  loader: () => import('./scenes/LatestConference'),
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
    <MainLayout>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/introduction" exact component={IntroductionPage} />
        <Route
          path="/latest-conference"
          exact
          component={LatestConferencePage}
        />
        <Route path="/registration" exact component={RegistrationPage} />
        <Route path="/schedule" exact component={SchedulePage} />
        <Route path="/speakers" exact component={SpeakersPage} />
      </Router>
    </MainLayout>
  );
}

export default App;
