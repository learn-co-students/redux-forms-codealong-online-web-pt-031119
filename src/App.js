import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import ViewTodos from './components/todos/ViewTodos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <ViewTodos />
      </div>
    );
  }
}

export default App
