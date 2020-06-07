import React from "react";
import './hello.css';


function Hello({ firstname }) {
    /* destructuring incoming params */
    return (
      <div className="myname">
        {" "}
        <p>
          {" "}
          This is {firstname} from Hello fn in hello.js called by app.js ..
        </p>
        <br />
        <p> Un-ordered list in Hello fn in hello.js </p>
        <ul>
          {" "}
          <li>Hello-item1</li>
          <li>Hello-item2</li>
          <li>Hello-item3</li>
        </ul>
        <p> bye bye from Hello fn</p>
      </div>
    );
}

export default Hello; /*reqd for import sttmt in index.js*/
