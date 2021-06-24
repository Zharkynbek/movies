import React, { Component } from "react";
import MoviesList from "../components/MoviesList/MoviesList"
import {getTrendingFilms} from "../utils/apiService"
// import { NavLink } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getTrendingFilms().then(resp => {
     this.setState({movies: resp.data.results})
   })
  }
  render() {
    return (
      <>
        <h1>Tranding today</h1>
        <MoviesList history={this.props.history} movies={ this.state.movies}/>
      </>
    );
  }
}

export default HomePage;
