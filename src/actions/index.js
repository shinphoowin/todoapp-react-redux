let nextTodoId = 0;
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

export const setVisilityFilter = dofilterspw => ({
	type: 'SET_VISIBILITY_FILTER',
	dofilterspw
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