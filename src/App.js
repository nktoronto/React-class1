import React from 'react';
/*import logo from './logo.svg'; */
import './App.css';
import Hello from './hello';

function App({name, age}) {
                            /* destructuring incooming params */
                            return (
                              <div>
                                {"app.js is displayed first "}
                                <br></br>
                                Hello from App.js .. By {name} Aged: {age - 10}
                                <div>Another Div within Div </div>
                                <ol>
                                  <li>app.js Item no. 1</li>
                                  <li>app.js Item no. 2</li>
                                  <li>app.js Item no. 3</li>
                                </ol>
                                <br/>
                                <Hello firstname={name}></Hello>
                              </div>
                            );
                            /* only one element is allowed but within div
another div can be there
 
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
</header>
</div>
); 
function App(props) {
return <div> Hello from App.js .. By {props.name} Aged: {props.age - 10}
 
 const hello = ({name}) => {return "Hello World "+ name}; implicit 'function\
 .. => ("Hello World "+ name) .. implicit 'return' too
 is equivalent to
 function hello({name}) {return "Hello " + name};
=> replacing keyword 'function'
}
*/
                          }

  export default App; /*reqd for import sttmt in index.js*/
