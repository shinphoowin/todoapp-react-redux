import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h4 className="header">Task List App &nbsp;(React-Redux)</h4>
        <div style={{textAlign: 'center'}}>Desktop Version Only</div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}
export default App;