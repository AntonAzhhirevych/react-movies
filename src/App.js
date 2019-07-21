import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import movies from './movies.json';
import SearchBar from './SearchBar/SearchBar';

const SearchInputForm = (tasks, search) => {
  const result = tasks.filter(elem => elem.title.toLowerCase().includes(search.toLowerCase()));
  result.length === 0 && console.log('No matching results!');
  return result;
};

class App extends Component {
  state = {
    search: '',
  };

  searchMovies = ({ target }) => {
    this.setState({ search: target.value });
  };
  render() {
    const searchFilms = SearchInputForm(movies, this.state.search);
    return (
      <>
        <SearchBar onSearchMovies={this.searchMovies} />
        <MovieGrid items={searchFilms} />
      </>
    );
  }
}

export default App;
