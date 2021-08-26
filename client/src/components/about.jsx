import React, { Component} from "react";
import about from "./about.png";

class About extends Component {
  constructor(props) {
    super(props);

    }

    render () {
      return (
        <div className="aboutus-ctn">
          <div className="container">
          <div className="cloud"></div>
          </div>

          <div className="aboutus-bk">
            <img className="about-logo" src={about}/>
          <div className="aboutus-title">The Criteria for cruelty-free brand</div>
            <div className="aboutus-text"><span>Finished Products:</span> Their finished products are not tested on animals by the company or any other company.</div>
            <div className="aboutus-text"> <span>Ingredients:</span> Their ingredients are not tested on animals by the company or any other company.</div>
            <div className="aboutus-text"><span>Suppliers:</span> Their suppliers do not test ingredients, raw materials, or finished products on animals.</div>
            <div className="aboutus-text"><span>Third Parties:</span> No third party is testing their finished products or ingredients animal on their behalf.</div>
            <div className="aboutus-text"><span>Required by Law:</span> They don’t test on animals where the law requires it, and are not sold in mainland China.</div>
          </div>
        </div>
      )
    }
}

export default About;