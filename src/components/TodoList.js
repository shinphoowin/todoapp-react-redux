import React from 'react';
import PropTypes from 'prop-types';
import {deleteTodo, toggleTodo, editTodo} from './../actions';
import { connect } from 'react-redux';
import Todo from './Todo';
import EditComponent from './EditComponent';

const TodoList = ({ todos, dispatch }) => {
	return(
    <ul id="todo-list">
    	{todos.map(todo =>
      <li className={ todo.completed ? 'completed': ''}> 
      {console.log(todo)}
        <div className="view" key={todo.id}>	
          <input className="toggle" type="checkbox" onClick={() => dispatch(toggleTodo(todo.id))} checked={todo.completed ? true : false}/>  
          {todo.editing
          	? <EditComponent editing={todo.editing} inputval={todo.text} key={todo.id} todo={todo} onKeyPress={this.handleKeyPress}/> 
          	: <Todo gettodo={todo.text} key={todo.id} todo={todo} />
          }
          <div className="destroy" onClick={() => dispatch(deleteTodo(todo.id))}>&times;</div>
        </div>
      </li>      
    	)}	
    </ul>
)}

TodoList.propTypes = {todos : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,      
    }).isRequired
	).isRequired,
	toggleTodo: PropTypes.func.isRequired
}

export default connect()(TodoList);