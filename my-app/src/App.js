import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import postPage from './containers/post';
import homePage from './containers/home';
import viewAllPage from './containers/viewAll';
import detail from './containers/detail';
import login from './containers/login';
import edit from './containers/edit';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={login} />
          <Route path="/home" component={homePage} />
          <Route path="/post" component={postPage} />
          <Route path="/viewAll" component={viewAllPage} />
          <Route path="/detail/:id" component={detail} />
          <Route path="/edit/:id" component={edit} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
