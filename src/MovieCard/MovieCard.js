import React from 'react';
import styles from '../MovieCard/MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({ item }) => {
  return (
    <div className={styles.movieCard}>
      <img className={styles.movieImg} src={item.posterUrl} alt="alt" />
      <div className={styles.movieContent}>
        <h2 className={styles.movieTitle}>{item.title}</h2>
        <p className={styles.movieDescr}>{item.overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MovieCard;
