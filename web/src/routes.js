// modules/routes.js
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './app';
import Home from './containers/Page/Home';
import LiveFeed from './containers/Stream/LiveFeed';
import ArchiveFeed from './containers/Stream/ArchiveFeed';
import Stream from './components/Stream';

module.exports = (
  <Route component={ App } ignoreScrollBehavior>
    <Route path="/" component={ Home }>
      <Route components={ {Stream: Stream } } >
        <IndexRedirect to="/2015" />
        <Route name="live" path="/2015" components={ {live: LiveFeed, archive: ArchiveFeed } } />
        <Route name="year" path="/:year" components={ {archive: ArchiveFeed } } />
      </Route>
    </Route>
  </Route>
);
