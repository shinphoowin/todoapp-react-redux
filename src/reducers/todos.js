const todos = (state=[], action) => {
	switch(action.type){
		case 'ADD_TODO':
		return [
      ...state,
      {
      	id: action.id,
      	text: action.text,
      	completed: false,
      	editing: false
      }
		]
		case 'DELETE_TODO':
		  return state.filter((what) => what.id !== action.id)
		case 'EDIT_TODO':
		  return state.map((todo) => 
		  	todo.id === action.id 
		  	? {
		  		...todo,
          editing: !todo.editing
		  	}
		  	: todo)
		case 'TOGGLE_TODO':
		  return state.map(todo =>
        (todo.id === action.id)
        ? {
        	  ...todo, 
        	  completed: !todo.completed
        	}
        : todo
		  )
		  case 'UPDATE_TODO':
  	  return state.map((todo) =>
        todo.id === action.id
        ? {
        	...todo,
        	title: action.formObj.newtitle,
        	message: action.formObj.newmessage,
        	editing: !todo.editing
        }
        :
          todo
  	  	);
		default:
		  return state
	}
}
export default todos;