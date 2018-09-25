const postReducer = (state=[],action) => {
  switch(action.type){
  	case 'ADD_POST':
  	  return state.concat([action.formObj]);
  	case 'DELETE_POST':
  	  return state.filter((post) => post.id !== action.id);
  	case 'EDIT_POST':
  	  return state.map((post) =>
  	    post.id === action.id 
  	    ? {
  	    	...post,
  	    	editing: !post.editing
  	    }
  	    :
  	      post
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