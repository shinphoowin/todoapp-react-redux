import React from 'react';
import PropTypes from 'prop-types';
import {deleteTodo, toggleTodo} from './../actions';
import { connect } from 'react-redux';
import Todo from './Todo';
import EditComponent from './EditComponent';

const TodoList = ({ todos, dispatch }) => {
	return(
    <ul id="todo-list">
    	{todos.map(todo =>
      <li key={todo.id} className={ todo.completed ? 'completed': ''}> 
        <div className="view">	
          <input className="toggle" type="checkbox" onClick={() => dispatch(toggleTodo(todo.id))} checked={todo.completed ? true : false}/>  
          {todo.editing
          	? <EditComponent key={todo.id} todo={todo}/> 
          	: <Todo key={todo.id} todo={todo} />
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