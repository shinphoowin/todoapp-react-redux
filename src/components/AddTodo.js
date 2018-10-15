import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

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
        style={{position:'relative'}}
      >
    		<input ref={node => input = node} id="new-todo" placeholder="Insert Your Tasks Here !!"/>
    		<button type="submit" className="submitbtn">&#x2705;</button>
    	</form>
    </div>
	);
}
export default connect()(AddTodo)