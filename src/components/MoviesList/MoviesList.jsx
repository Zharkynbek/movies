import React from "react"
import MoviesListItem from "./MoviesListItem"


const MoviesList = ({ movies, query, history }) => {
  return (
    <ul className="MovieList">
      {movies.map((movie) => (
        <MoviesListItem
          query={query}
          history={history}
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
