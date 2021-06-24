import React, { Component } from "react"
import { getFilmsActors } from "../utils/apiService"


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const defaultPoster =
  "http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg";
  
  // const defaultPerson =
  //   "https://pixabay.com/get/g09a633f93e279b04be32e603974c9c8c2b49c8cdbf19416523f88c17894f2fc28a180568fe940ddcf7f4e7c163c1d41ac501ea8a504272aad6cf323f15d03126_640.jpg";

  // const defaultPerson =
  //   "https://pixabay.com/get/ge85f18fbf754c2a0e9e8d5e2dca22cbb4b721d2f9283db4e459cf5aa1870d65ba41d2b774c133979ab44a1f63b1f1ad761ff0a3a387d2c19bf615a0d463fcea3_1280.png";


class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount =()=> {
        getFilmsActors(this.props.location.state.id).then(resp => {
            this.setState({
                cast: resp.data.cast
            })
        })
    }

    render() {
        return (
          <>
            <ul className="CastList">
              {this.state.cast.length > 0 ? (
                this.state.cast.map((el) => {
                  return (
                    <li key={el.id}>
                      <h2>{el.name}</h2>
                      <img
                        width="200"
                        src={
                          el.profile_path !== null &&
                          el.profile_path !== undefined
                            ? BASE_IMG_URL + el.profile_path
                            : defaultPoster
                        }
                        alt={el.name}
                      />
                    </li>
                  );
                })
              ) : (
                <li>
                  <img
                    style={{ marginTop: "10px" }}
                    src="https://pixabay.com/get/g6e139da9d742ed4357ab6324e9f68cf06e11961e228fcea476a56052f2be552797e9d5441edd77f04edc4e3c89861baaa622f6b211fb482d6b313938fc0abf8f_1280.png"
                    alt="not found"
                    width="340"
                  />
                </li>
              )}
            </ul>
          </>
        );}
}

export default Cast;