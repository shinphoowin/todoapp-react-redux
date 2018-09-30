import { connect } from 'react-redux';
import { toggleTodo } from './../actions';
import TodoList from './TodoList';
import { VisibiltiyFilters } from './../actions';

const getVisibleTodos = (todos, filter) => {

	switch(filter){
		case VisibiltiyFilters.SHOW_ALL:
		  return todos
		case VisibiltiyFilters.SHOW_COMPLETED:
		  return todos.filter(todo => todo.completed)
		case VisibiltiyFilters.SHOW_ACTIVE:
		  return todos.filter(todo => !todo.completed)
		default:
		  throw new Error('Unkonwn filter:' + filter)
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter),
	whatthehell: state
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);