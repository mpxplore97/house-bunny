import React from "react";
import AlternativeEntry from './alternativeEntries.jsx'

var Alternative = (props) => (

      <div class="alt">
        <h1 className="alt-title">{props.info[0].brand_name} is <span className="not">NOT</span> cruelty-free :(</h1>
        <h2 className="altitle"> Try these alternatives instead!</h2>
        <div className="alt-tb">
        {props.info.slice(1, props.info.length).map((obj, index)=> (
          <AlternativeEntry info={obj} key = {index}/>
        )
        )}
        </div>
      </div>
);

export default Alternative;