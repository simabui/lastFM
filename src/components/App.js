import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import TracksSearch from './TracksSearch/TracksSearch';
import Artist from './Artist/Artist';

export default function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Switch>
          <Route path="/search/:id" component={Artist} />
          <Route path="/search" component={TracksSearch} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </>
  );
}
