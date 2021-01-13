/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './TrackItem.module.css';

export default function Track({ data }) {
  const mediumImage = data.image[2]['#text'];

  return (
    <Card className={styles.track}>
      <Card.Img variant="top" src={mediumImage} alt="poster" />
      <Card.Body>
        <Card.Title>
          <Link to={`/search/${data.artist.mbid}`} className={styles.bio}>
            {data.artist.name}
          </Link>
        </Card.Title>
        <Card.Text className={styles.trackName}>{data.name}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={data.url} rel="noopener" target="_blank">
          Last.fm
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

Track.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.arrayOf(
      PropTypes.shape({
        '#text': PropTypes.string,
      }),
    ),
    artist: PropTypes.shape({
      name: PropTypes.string,
      mbid: PropTypes.string,
    }),
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
