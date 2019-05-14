import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
    <nav className="navbar-yvette">
        <div className="container">
            <div className="navbar-header">
                <div className="row">
                    <div className="col-sm-10"><div className="row">
                        <div className="col-md-auto mt-1"><a id="all-selected" onClick={() => { this.props.changeSearch(0) }} href="#">Search All</a></div>
                        <div className="col-md-auto mt-1"><a id="movies-selected" onClick={() => { this.props.changeSearch(1) }} href="#">Movies</a></div>
                        <div className="col-md-auto mt-1"><a id="series-selected" onClick={() => { this.props.changeSearch(2) }} href="#">Series</a></div>
                    </div></div>
                </div>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;
