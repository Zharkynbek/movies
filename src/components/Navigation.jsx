import React from "react"
import { NavLink } from "react-router-dom"
import {Button} from "@material-ui/core"

const Navigation = () => (
  <header className="header">
    <span className="navigation">
    <NavLink to="/">
     
      <span className="home">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </span>
    </NavLink>
    <NavLink to="/movies">
     
        <Button variant="contained" color="primary">
          Movies
        </Button>
      
    </NavLink></span>
  </header>
);

export default Navigation