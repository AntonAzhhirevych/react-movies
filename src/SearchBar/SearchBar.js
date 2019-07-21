import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearchMovies }) => {
  return (
    <input
      onChange={onSearchMovies}
      className={styles.input}
      type="text"
      placeholder="Movies name..."
    />
  );
};

SearchBar.propTypes = {
  onSearchMovies: PropTypes.func.isRequired,
};
export default SearchBar;
