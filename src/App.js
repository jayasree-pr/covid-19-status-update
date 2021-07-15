import logo from './logo.svg';
import './App.css';

import India from '../src/Component/India';
import World from '../src/Component/World';
import Header from '../src/Component/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch
}from 'react-router-dom';



class App extends Component{
  render(){
  return (
    
    <div className="container-fluid">
      <Router>
      <Header />
      <Switch>
      <Route exact path="/">
            <India />
      </Route>
      <Route path="/india">
            <India />
      </Route>
      <Route path="/world">
            <World />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}
}
export default App;
