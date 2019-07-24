import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

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
