import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Form, Button, Col } from 'react-bootstrap';
import ReactPlaceholder from 'react-placeholder';
import { searchInput } from '../../redux/tracks/tracksActions';
import { fetchSearchedTracks } from '../../redux/tracks/tracksOperations';
import Track from '../Track/Track';
import styles from './TracksSearch.module.css';
import CustomPlaceholder from '../CustomPlaceholder/CustomPlaceholder';

export default function TracksSearch() {
  const stateValue = useSelector(state => state.tracks.searchInput);
  const tracks = useSelector(state => state.tracks.searchedTracks);
  const isReady = useSelector(state => state.tracks.isReady);
  const dispatch = useDispatch();

  const dispatchInput = input => dispatch(searchInput(input));

  const dispatchTopTracks = useCallback(
    input => {
      const data = fetchSearchedTracks(input);
      dispatch(data);
    },
    [dispatch],
  );

  function onChange(e) {
    const { value } = e.target;
    dispatchInput(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatchTopTracks(stateValue);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter track name"
            value={stateValue}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.button}>
          Search
        </Button>
      </Form>
      {tracks && tracks.length >= 1 && (
        <Row className={styles.tracks}>
          {tracks.map(track => (
            <Col xs={12} sm={6} md={4} lg={3} key={track.listeners}>
              <ReactPlaceholder
                showLoadingAnimation
                ready={isReady}
                delay={500}
                customPlaceholder={CustomPlaceholder}
              >
                <Track track={track} />
              </ReactPlaceholder>
            </Col>
          ))}
        </Row>
      )}
      {tracks && !tracks.length && <p>Not Found</p>}
    </>
  );
}
