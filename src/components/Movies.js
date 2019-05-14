import React, { Component } from 'react';
import Movie from './Movie'; 

class Movies extends Component {  
  render(){
    // 1: Check if state movies has value:
    if(this.props.movies === undefined){
      // 2: If not, do nothing:
      return null;
    } else {
      // 2: If state movies has value, show movie results:
      return (
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                {this.props.movies.map(movie => (
                  <Movie 
                    key={movie.imdbID}
                    movie={movie}  
                    getDetails={this.props.getDetails}         
                  ></Movie>
                ))}
              </div>
            </div>
          </div>
      )
    }
  }
}

export default Movies;
