import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar'; 
import Movies from './components/Movies'; 
import Details from './components/Details'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [],
        movie: null,
        searchAll: true, 
        searchMovies: false, 
        searchSeries: false,
      };
  }

  search = (e) => {
    let searchText = e.target.value;
    let movies = []; 
    // 1: Check if all/movies/series is selected:
    if(this.state.searchAll === true){
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=d67c387a&s=" + searchText)
        // 2: Put data in state:
        .then(res => {
          const movies = res.data;
          this.setState({ movies: movies.Search });
        });
    } else if(this.state.searchMovies === true) {
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=d67c387a&s=" + searchText + "&type=movie")
        .then(res => {
          const movies = res.data;
          this.setState({ movies: movies.Search });
        });
    } else {
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=d67c387a&s=" + searchText + "&type=series")
        .then(res => {
          const movies = res.data;
          this.setState({ movies: movies.Search });
        });
    }
  }

  getDetails = (imdbID) => {
    // 1: Get movie details and set in state movie:
    fetch("http://www.omdbapi.com/?apikey=d67c387a&i=" + imdbID)
      .then(response => response.json())
      .then(movie => this.setState({ movie: movie }));
  }

  hideDetails = () => {
    // 1: Hide movie details by setting state movie to null:
    this.setState({ movie: null }); 
  }

  changeSearch = (selected) => {
    // 1: Change state & style:
    switch(selected){
      case 0:
        this.setState({ searchAll: true, searchMovies: false, searchSeries: false });
        document.getElementById('all-selected').style.fontWeight = 'bold';
        document.getElementById('movies-selected').style.fontWeight = 'normal';
        document.getElementById('series-selected').style.fontWeight = 'normal';
        break;
      case 1:
        this.setState({ searchAll: false, searchMovies: true, searchSeries: false });
        document.getElementById('all-selected').style.fontWeight = 'normal';
        document.getElementById('movies-selected').style.fontWeight = 'bold';
        document.getElementById('series-selected').style.fontWeight = 'normal';
        break;
      case 2:
        this.setState({ searchAll: false, searchMovies: false, searchSeries: true });
        document.getElementById('all-selected').style.fontWeight = 'normal';
        document.getElementById('movies-selected').style.fontWeight = 'normal';
        document.getElementById('series-selected').style.fontWeight = 'bold';
    }
  }

  render(){
    return (
      <React.Fragment>
        <Header changeSearch={this.changeSearch}/>
        <div className="container my-5">
          <SearchBar search={this.search} />
          <div id="detail-result"></div>
          <Details movie={this.state.movie} hideDetails={this.hideDetails}/>
          <Movies movies={this.state.movies} getDetails={this.getDetails}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
