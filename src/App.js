import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Redux CRUD Basic</h4>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}
export default App;