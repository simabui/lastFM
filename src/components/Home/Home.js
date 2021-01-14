import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { fetchTopTracks } from '../../redux/tracks/tracksOperations';
import TrackItem from '../TrackItem/TrackItem';
import Loader from '../Loader/Loader';

export default function Home() {
  const topTracks = useSelector(state => state.tracks.collection);
  const isLoading = useSelector(state => state.tracks.isLoading);
  const dispatch = useDispatch();

  const dispatchTopTracks = useCallback(() => {
    const data = fetchTopTracks();
    dispatch(data);
  }, [dispatch]);

  useEffect(() => {
    dispatchTopTracks();
  }, []);

  return (
    <Row>
      <Loader isLoading={isLoading} />
      {topTracks.length > 1 &&
        topTracks.map(track => (
          <Col xs={12} md={6} lg={4} key={track.name}>
            <TrackItem data={track} />
          </Col>
        ))}
    </Row>
  );
}
