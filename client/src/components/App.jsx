import React, { Component} from "react";
import Searchbar from './Searchbar.jsx'
import Brandinfo from './Brand.jsx'
import bunnylogo from './bunny.png'
import About from './about.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "search",
      brandinfo: []
    }

    this.changeView = this.changeView.bind(this);
    this.renderview = this.renderview.bind(this);
  }

  changeView(option, info) {
    this.setState({
      view: option,
      brandinfo: info
    });
  }

  renderview () {
    const {view} = this.state;
    if (view === "search"){
      return <Searchbar change={this.changeView}/>
    }
    if (view === "brand"){
      return <Brandinfo info={this.state.brandinfo}/>
    }
    if (view === "about"){
      return <About />
    }
  }

  render() {
    return(
      <div className="App">
        <div className="banner">
        <img className="bunny" src={bunnylogo}/>
        <h1 onClick={() => this.changeView("search", [])} className ="main-title">House Bunny</h1>
        <div onClick={() => this.changeView("about", [])} className="about-us">Criteria</div>
        </div>
        {this.renderview()}
      </div>
    );
  }
}

export default App;