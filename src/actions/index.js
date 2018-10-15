let nextTodoId = 0;
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const editTodo = id => ({
  type: 'EDIT_TODO',
  id
})

export const setVisilityFilter = dofilter => ({
	type: 'SET_VISIBILITY_FILTER',
	dofilter
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const VisibiltiyFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}