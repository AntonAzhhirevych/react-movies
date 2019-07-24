import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import movies from './movies.json';
import SearchBar from './SearchBar/SearchBar';

const SearchInputForm = (tasks, search) => {
  const result = tasks.filter(elem =>
    elem.title.toLowerCase().includes(search.toLowerCase()),
  );

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
    const { search } = this.state;
    const searchFilms = SearchInputForm(movies, search);

    return (
      <>
        <SearchBar onSearchMovies={this.searchMovies} />
        <MovieGrid items={searchFilms} />
        {searchFilms.length === 0 && (
          <div>
            <p>No matching results!</p>
          </div>
        )}
      </>
    );
  }
}

export default App;
