import React, { Component} from "react";
import axios from 'axios';

class Searchbar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchword: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch () {
    this.setState({
      searchword: event.target.value
    })
  }

  handleSubmit() {
    axios.get(`/brand/${this.state.searchword}`)
    .then ((response) => {
      console.log(response.data)
      this.setState({
        searchword: ""
      })
      this.props.change("brand", response.data);
    })
    .catch ((err) => {
      console.log(err);
    })

    event.preventDefault();
  }


  render() {
    return(
      <form className="searchdiv" onSubmit={this.handleSubmit}>
        <label>
          Find Cruelty-Free Brands
        </label>
        <div className='wrapper'>
        <input type="search" placeholder="search household products..." value={this.state.searchword} className="searchbar" onChange={this.handleSearch}></input>
        <button type="submit" className='submit-btn'></button>
        </div>
      </form>
    );
  }
}

export default Searchbar;
{/* <input type='image' className='submitBunny' src="https://cdn.dribbble.com/users/1044993/screenshots/14334994/media/3b5e1edd6ac5f92ee05b91b2baa5eac8.png"></input> */}