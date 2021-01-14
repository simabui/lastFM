import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function CustomLoader({ isLoading }) {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      className={styles.Loader}
      visible={isLoading}
    />
  );
}

CustomLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
