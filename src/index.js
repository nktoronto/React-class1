import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import * as serviceWorker from './serviceWorker'; */

ReactDOM.render(
 
  <div><App name="Nusrat W Khwaja" age={67-10} />
    <strong>Hello,</strong> Nusrat Khwaja !! <br></br>
    <para>This is a para 1 defined in index.js</para><br></br>
    <para>This is a para 2 defined in index.js</para><br></br>

    <ul><li>index.js 1st item</li>
        <li>index.js 2nd item</li>
    </ul>

  </div>,

  document.getElementById("root")
);
 /* <React.StrictMode>
    <App />
  </React.StrictMode>,
  <div>
    <App />
  </div>, 
  let user = {name:NK, age:67};
  let {name,age} = user;
  let newage = age - 20;
  
  is equivalent to: 
  let name = user.name;
  let age = user.age;
  */


  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
  
