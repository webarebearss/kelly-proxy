import React from 'react';

class SearchModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }
  }
  
  render() {
    return (
      <nav className="navbar bg-white">
        <ul className="nav justify-content-start">
          <li className="nav-item">
          <img src="https://i.imgur.com/sD4oWuf.png"/>
          </li>
          <li className="nav-item">
            <div className="search-form">
              <i className="fas fa-search align-middle"></i>
              <input className="search-area align-middle" type="search" placeholder="Search" aria-label="Search"/>
            </div>
          </li>
        </ul>
        <ul className="nav-links nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">Become a host</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sign up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Log in</a>
          </li>
        </ul>
      </nav>
    )
  };
}

export default SearchModule;