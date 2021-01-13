/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styles from './Track.module.css';

export default function Track({ track }) {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{track.artist}</Card.Title>
        <Card.Text>track- {track.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Track.propTypes = {
  track: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
