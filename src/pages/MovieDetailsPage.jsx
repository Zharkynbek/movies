import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { getFilmById } from "../utils/apiService";
import Reviews from "../components/Reviews"
import Cast from "../components/Cast";
import {Button} from "@material-ui/core"


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const defaultPoster =
  "http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg";


class MovieDetailsPage extends Component {
  state = {
    filmInfo: {},
  };

  componentDidMount() {
    getFilmById(this.props.location.state.id).then((resp) => {
      this.setState({ filmInfo: resp.data });
    });
    }
    
    handleGoBack = () => {
        this.props.history.push(this.props.history.location.state.from, {
          search: this.props.history.location.state.search,
        });
    }

  render() {
    console.log(this.props);
    return (
      <>
        <h1 className="FilmInfoTitle">Film Information</h1>
        <button onClick={this.handleGoBack} className="goBack">
          GO BACK
        </button>
        <div className="InfoImage">
          <img
            src={
              this.state.filmInfo.poster_path !== null &&
              this.state.filmInfo.poster_path !== undefined
                ? BASE_IMG_URL + this.state.filmInfo.poster_path
                : defaultPoster
            }
            alt=""
            width="200"
            className="ImageMovieDetails"
          />
          <div className="InfoBox">
            <h2 className="OriginalTitle">
              {console.log(this.state)}
              {this.state.filmInfo.original_title}
            </h2>
            <h3 className="OriginalTitle">Overview:</h3>
            <p className="OriginalDescription">
              {" "}
              {this.state.filmInfo.overview}
            </p>
            {/* <h3 className="OriginalTitle">Genres:</h3>
            <ul>
              {this.state.filmInfo.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul> */}
          </div>
        </div>

        <h2 className="AddInfo">Additional Information</h2>
        <NavLink
          style={{ textDecoration: "none" }}
          to={{
            pathname: this.props.match.url + "/cast",
            state: this.props.location.state,
          }}
        >
          <span className="Cast">
            <Button variant="contained" color="primary">
              Cast
            </Button>
          </span>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to={{
            pathname: this.props.match.url + "/reviews",
            state: this.props.location.state,
          }}
        >
          <span className="Reviews">
            <Button variant="contained" color="primary">
              Reviews
            </Button>
          </span>
        </NavLink>
        <Route path={this.props.match.path + "/reviews"} component={Reviews} />
        <Route path={this.props.match.path + "/cast"} component={Cast} />
      </>
    );
  }
}

export default MovieDetailsPage;
