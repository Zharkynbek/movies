import React, { Component } from "react"
import {getFilmsReviews} from "../utils/apiService"


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";


class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        getFilmsReviews(this.props.location.state.id).then(resp => {
            this.setState({
                reviews: resp.data.results
            })
        })
    }

    render() {
        return (
          <>
            <ul>
              {this.state.reviews.length > 0 ? (
                this.state.reviews.map((el) => {
                  const img = el.author_details.avatar_path.includes("http")
                    ? el.author_details.avatar_path.slice(
                        1,
                        el.author_details.avatar_path.length - 1
                      )
                    : BASE_IMG_URL + el.author_details.avatar_path;
                  return (
                    <li key={el.id}>
                      <h2 style={{ marginLeft: "20px" }}>{el.author}</h2>
                      <div style={{ display: "flex" }}>
                        <img
                          className="ImageMovieDetails "
                          src={img}
                          alt=""
                          width="200"
                        />
                        <div style={{ marginLeft: "25px" }}>
                          <p className="OriginalDescription">{el.content}</p>
                        </div>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li>
                  <img
                    style={{ marginLeft: "25px", marginTop: "10px" }}
                    src="https://pixabay.com/get/g626f7372da5383c75dc1c381a8586715d0a03c3568cd2323ddb954626374a755d7bd5b5635ac86bd63cc576da4b43c10120137311baf36c4ce05cd58a217c155_1280.jpg"
                    alt="not found"
                    width="340"
                  />
                </li>
              )}
            </ul>
          </>
        );}
}

export default Reviews;