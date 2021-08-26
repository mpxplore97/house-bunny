import React, { Component} from "react";
import bunny from './bunnylogo.png'

class Crueltyfree extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="ctn1">
      <div className="cf-ctn">
        <h1>{this.props.info.brand_name} is Cruelty-free!</h1>
        <img className='bunny-logo' src={bunny}/>
        {this.props.info.vegan ? <img src="https://img.icons8.com/plasticine/50/000000/vegan-symbol.png"/> : null}

      </div>
      {this.props.info.parent_company !== 'null' ? <div className='parent-company'>*parent company is {this.props.info.parent_company}*</div> : null}
      </div>
    )
  }

}

export default Crueltyfree;