import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Switch } from "react-router-dom";
import TodoList from './components/TodoList'
import TodoID from './components/TodoID';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
        <Route exact path='/allTodos' component={TodoList}/>
        <Route exact path='/todos/:id' component={TodoID}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
