import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieFunction = this.addMovieFunction.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterFunction() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    if (bookmarkedOnly) return movies.filter((element) => element.bookmarked);
    if (selectedGenre) return movies.filter((element) => element.genre === selectedGenre);
    if (searchText) {
      return movies.filter((element) =>
        element.title.includes(searchText) ||
        element.subtitle.includes(searchText) ||
        element.storyline.includes(searchText));
    }
    return movies;
  }

  addMovieFunction(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterFunction()} />
        <AddMovie onClick={this.addMovieFunction} />
      </div>
    );
  }
}

export default MovieLibrary;
