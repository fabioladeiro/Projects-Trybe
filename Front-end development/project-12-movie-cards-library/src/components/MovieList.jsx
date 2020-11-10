import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((element) => <MovieCard key={element.title} movie={element} />)}
      </div>
    );
  }
}

export default MovieList;
