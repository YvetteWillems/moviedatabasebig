import React, { Component } from 'react';

class SearchBar extends Component {
    onSubmit = (e) => {
        e.preventDefault()
    }
  render(){
    return (
        <div className="">
            <h1>Search title:</h1>
            <div id="search" className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="form-group col-sm-9">
                                <form onSubmit={this.onSubmit} >
                                    <input 
                                        onChange={this.props.search} 
                                        id="movieSearch" 
                                        className="form-control" 
                                        type="text" 
                                        placeholder="Search for title..." />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SearchBar;
