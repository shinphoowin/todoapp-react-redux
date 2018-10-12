import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component{

	handleEdit = (e) => {
		console.log("handleEdit hit")
		e.preventDefault();
		const newtask = this.refs.getTask.value;

		const formObj = {
			newtask
		}

		this.props.dispatch({
			type: 'UPDATE_POST',
			id: this.props.todo.id,
			formObj: formObj
		});
	}
	render(){
		return(
      <div key={this.props.todo.id}>
      	<form onSubmit={this.handleEdit}>      	 
            <input type="text" ref="getTask" defaultValue={this.props.inputval} />          
          <button>Update</button>
      	</form>
      </div>
		)
	}
}

export default connect()(EditComponent);
//by using this , we can use this.props.dispatch() funtion
// export default PostForm;

