import React from 'react';
import Temperature from './components/Temperature';
import Fiveday from './components/Fiveday';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component{
   render(){
    return(
    <React.Fragment>
    <Router>
  <div>
    <Link to="/Temperature">Current Temperature</Link> |&nbsp;
    <Link to="/Fiveday">5-Day Forecast</Link>
    <Route exact path="/Fiveday" component={Fiveday} />
    <Route exact path="/Temperature" component={Temperature} />

  </div>
  </Router>
    </React.Fragment>
   )
  }
}

export default App;
