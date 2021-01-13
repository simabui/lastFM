import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { getArtist } from '../../agent/agent';
import Bio from '../Bio/Bio';

export default function Artist({ match }) {
  const { id } = match.params;
  const [artist, setArtist] = useState(null);
  const [img, setImg] = useState('');

  useEffect(() => {
    async function fetchData() {
      const req = await getArtist(id);
      setArtist(req.data.artist);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (artist) {
      const defaultImage = artist.image[5]['#text'];
      setImg(defaultImage);
    }
  }, [artist]);

  return (
    <Row>
      <Col xs={12} sm={6} md={4}>
        <img src={img} alt="artist" />
      </Col>
      <Col xs={12} sm={6} md={8}>
        {artist && (
          <Bio name={artist.name} bio={artist.bio} tags={artist.tags.tag} />
        )}
      </Col>
    </Row>
  );
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
