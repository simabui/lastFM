/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styles from './Bio.module.css';

function createMarkup(str) {
  return { __html: str };
}

export default function Bio({ name, bio, tags }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <i>Biography</i>
      </p>
      <p dangerouslySetInnerHTML={createMarkup(bio.summary)} />
      <span className={styles.tag}>
        <i>Tags</i>
      </span>
      <Row>
        {tags.map(tag => (
          <Col key={tag.url} xs={12} sm={6} md={2}>
            <a
              href={tag.url}
              className={styles.tagLink}
              target="_blank"
              rel="noopener"
            >
              {tag.name}
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.shape({
    summary: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
