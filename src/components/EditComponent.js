import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component{

	handleEdit = (e) => {
		console.log("handleEdit hit");
		e.preventDefault();
		const newtask = this.refs.getTask.value;

		const formObj = {
			newtask
		}

		this.props.dispatch({
			type: 'UPDATE_TODO',
			id: this.props.todo.id,
			formObj: formObj
		});
	}

	handleonBlur = (event) => {
		const newtask = this.refs.getTask.value;
		const formObj = {
			newtask
		}

    if(event.key === 'Enter'){
      this.props.dispatch({
			  type: 'UPDATE_TODO',
			  id: this.props.todo.id,
			  formObj: formObj
		});
    }
  }

	render(){
		return(
      <div key={this.props.todo.id} className="editing">
      	<form onSubmit={this.handleEdit}>      	    	 
          <input className="edit" type="text" ref="getTask" defaultValue={this.props.todo.text} onKeyDown={this.handleonBlur}/>                
      	  <button type="submit" className="submitbtn">&#x2705;</button>
      	</form>
      </div>
		)
	}
}

export default connect()(EditComponent);
//by using this , we can use this.props.dispatch() funtion
// export default PostForm;

