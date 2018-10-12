const postReducer = (state=[], action) => {
	console.log(action.formObj)
  switch(action.type){
  	case 'ADD_POST':
  	  return state.concat([action.formObj]);
  	case 'DELETE_POST':
  	  return state.filter((todo) => todo.id !== action.id);
  	case 'EDIT_POST':
  	  return state.map((todo) =>
  	    todo.id === action.id 
  	    ? {
  	    	...todo,
  	    	editing: !todo.editing
  	    }
  	    :
  	      todo
  	    );
  	// case 'UPDATE_POST':
  	//   return state.map((post) => {
  	//   	if(post.id === action.id){
  	//   		  return {
  	//   		  ...post,
  	//   		  title: action.formObj2.newtitle,
  	//   		  message: action.formObj2.newmessage,
  	//   		  editing: !post.editing
  	//   	  }
  	//   	}else
  	//   	return post;
  	//   })
  	case 'UPDATE_POST':
  	  return state.map((post) =>
        post.id === action.id
        ? {
        	...post,
        	title: action.formObj.newtitle,
        	message: action.formObj.newmessage,
        	editing: !post.editing
        }
        :
          post
  	  	);
  	default:
  	  return state;
  }
}
export default postReducer;