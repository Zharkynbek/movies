import React, { Component } from "react"
import Axios from "axios"
import {NavLink} from "react-router-dom"


class MoviesPage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const response = await Axios.get('https://developers.themoviedb.org/3/trending/get-trending/api_key=be5f011c0c95ebac9e43595fb9d549ff')
        console.log(response);  
    }
    render() {
        return (
        <> 
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          MOVIES
        </NavLink>
                </>
    )}
}

export default MoviesPage;