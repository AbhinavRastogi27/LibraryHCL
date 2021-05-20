import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
// import {Table,Select,Input,Button} from "antd"
import Login from "./Book/login";
import BookContainer from "./Book/books.container";
// const Search = Input.Search;
// const InputGroup = Input.Group;
// const Option = Select.Option;

class App extends Component {  
   render() { 
    return (
      <div className="ui container">
      <BrowserRouter>
      <div>
      <Route path="/" exact component={Login}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/book" component={BookContainer}></Route>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;