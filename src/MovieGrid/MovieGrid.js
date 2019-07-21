import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from '../MovieGrid/MovieGrid.module.css';
import PropTypes from 'prop-types';

const MovieGrid = ({ items }) => {
  return (
    <ul className={styles.movieGrid}>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard item={item} />
        </li>
      ))}
    </ul>
  );
};

MovieGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MovieGrid;
