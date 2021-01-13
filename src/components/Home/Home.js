import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ReactPlaceholder from 'react-placeholder';
import { fetchTopTracks } from '../../redux/tracks/tracksOperations';
import TrackItem from '../TrackItem/TrackItem';
import CustomPlaceholder from '../CustomPlaceholder/CustomPlaceholder';

export default function Home() {
  const topTracks = useSelector(state => state.tracks.collection);
  const isReady = useSelector(state => state.tracks.isReady);
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
      {topTracks.length > 1 &&
        topTracks.map(track => (
          <Col xs={12} md={6} lg={4} key={track.name}>
            <ReactPlaceholder
              showLoadingAnimation
              ready={isReady}
              delay={500}
              customPlaceholder={CustomPlaceholder}
            >
              <TrackItem data={track} />
            </ReactPlaceholder>
          </Col>
        ))}
    </Row>
  );
}
