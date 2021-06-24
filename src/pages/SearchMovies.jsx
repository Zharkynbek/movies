import React, { Component } from "react";
import { getFilmsByQuery } from "../utils/apiService";
import MoviesList from "../components/MoviesList/MoviesList";

class SearchMovies extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount = () => {
    if (this.props.location.state !== null) {
      this.setState({
        query: this.props.location.state.search,
      });
      getFilmsByQuery(this.props.location.state.search).then(resp => {
        this.setState({
          movies: resp.data.results
        })
      })
    }
  }

  handleChangeQuery = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    getFilmsByQuery(this.state.query).then((resp) => {
      this.setState({
        movies: resp.data.results,
      });
    });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmitForm}>
          <label htmlFor="">
            <input
              onInput={this.handleChangeQuery}
              type="text"
              placeholder="search movies"
              name="query"
              value={this.state.query}
            />
          </label>
        </form>
        <MoviesList
          query={this.state.query}
          history={this.props.history}
          movies={this.state.movies}
        />
      </>
    );
  }
}

export default SearchMovies;
