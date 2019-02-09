import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Header extends Component{
  state = {
    keyword: ''
  };
  
  setSearchKey = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  search = (e) => {
    e.preventDefault();
    if(this.state.keyword !== '') {
      window.location.replace('/search/' + this.state.keyword);
    }
  };
  
  componentDidMount() {
    let url = window.location.pathname;
    const base = url.match(/search/g);
    if(base != null) {
      this.setState({keyword: url.split('/')[2]});
    } else {
      this.setState({keyword: ''});
    }
  }
  
  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            {this.props.branding}
          </Link>
          <form className="form-inline my-2 my-lg-0" onSubmit={e => this.search(e)}>
            <div className="input-group">
              <input className="form-control" name="keyword" type="search" placeholder="Search" aria-label="Search" value={this.state.keyword}
                     onChange={e => this.setSearchKey(e)}/>
              <div className="inpu-group-append">
                <button className="btn btn-outline-light" type="submit"><i className="fas fa-search"/></button>
              </div>
            </div>
          </form>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: 'MyApp'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;