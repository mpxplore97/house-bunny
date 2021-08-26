import React, { Component} from "react";
import Crueltyfree from './Crueltyfree.jsx'
import Alternative from './alternative.jsx';

class Brandinfo extends Component{
  constructor(props) {
    super(props);
  }




  render () {
    return (
      <div>
        {this.props.info.length === 0 ? <div className="not-found">Brand Not Found</div> : this.props.info[0].cruelty_free ? <Crueltyfree info={this.props.info[1]}/> : <Alternative info={this.props.info}/>}

      </div>
    )
  }
}

export default Brandinfo;