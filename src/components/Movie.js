import React, { Component } from 'react'; 

class Movie extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="movies-style text-center">
                    <div className="movie-img">
                        <img src={this.props.movie.Poster} alt={this.props.movie.Title}></img>
                    </div>
                    <div className="movie-text">
                        <h5>{this.props.movie.Title}</h5>
                        <h5>{this.props.movie.Year}</h5>
                        <button onClick={() => { this.props.getDetails(this.props.movie.imdbID) }} className="btn btn-light button-yvette btn-movie">Movie Details</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;