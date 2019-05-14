import React, { Component } from 'react'; 

class Details extends Component {     
    render() {
        // 1: Check if state movie has value:
        if(this.props.movie === null){
            // 2: If not, do nothing:
            return null;
          } else { 
            // 2: If state movie has value, show movie details:
            return (
            <React.Fragment>
                <div className="movie-details p-3 col-sm-6">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="detail-img">
                                <img src={this.props.movie.Poster} alt={this.props.movie.Title}></img>
                            </div>
                        </div>
                        <div className="col-sm-7 pt-3">
                            <h2>{this.props.movie.Title}</h2>
                            <h4>{this.props.movie.Year}</h4>
                            <p>{this.props.movie.Type} ({this.props.movie.Genre})</p>
                            <h4><i className="fas fa-star"></i><strong> {this.props.movie.imdbRating}</strong></h4>
                            <p>Actors: <i>{this.props.movie.Actors}</i></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>{this.props.movie.Plot}</p>
                            <button onClick={() => { this.props.hideDetails() }} className="btn btn-light button-yvette btn-detail">Hide Details</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        }
    }
}

export default Details;