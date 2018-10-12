import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {deleteTodo, toggleTodo, editTodo} from './../actions';

class Todo extends Component{
  render(){
  	return(
      <label onClick={() => this.props.dispatch(editTodo(this.props.todo.id))}>{this.props.gettodo}</label>
  	);
  }
}
export default connect()(Todo);