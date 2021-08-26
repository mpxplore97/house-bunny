import React, { Component} from "react";
import bunny from './bunnylogo.png'

class AlternativeEntry extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="individual-tab">
      <div className="alt-tb-name">
        <h3>{this.props.info.brand_name}</h3>
        <img className='bunny-logo' src={bunny}/>
        {this.props.info.vegan ? <img className="vegan" src="https://img.icons8.com/plasticine/50/000000/vegan-symbol.png"/> : null}
      </div>
      {this.props.info.parent_company !== 'null' ? <div>*parent company is {this.props.info.parent_company}*</div> : null}
      </div>
    )
  }

}

export default AlternativeEntry;