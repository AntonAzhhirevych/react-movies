import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ posterUrl, title, overview }) => {
  return (
    <div className={styles.movieCard}>
      <img className={styles.movieImg} src={posterUrl} alt="alt" />
      <div className={styles.movieContent}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <p className={styles.movieDescr}>{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  overview: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
