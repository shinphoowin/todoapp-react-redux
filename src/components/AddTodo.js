import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

// const handleSubmit = (e,input,dispatch) => {
// 	e.preventDefault();
// 	if(!input.value.trim()){
//     return;
//   }
//   dispatch(addTodo(input.value))
//   input.value='';
// }

const AddTodo = ({ dispatch }) => {
	let input;
	return(
    <div style={{marginBottom: '40px'}}>
    	<form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
    		<input ref={node => input = node} style={{ float: 'left',marginRight: '8px'}}/>
    		<button type="submit">Add Todo</button>
    	</form>
    </div>
	);
}
export default connect()(AddTodo)