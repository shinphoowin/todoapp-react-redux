import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component{

	handleEdit = (e) => {
		console.log("handleEdit hit")
		e.preventDefault();
		const newtitle = this.refs.getTitle.value;
		const newmessage = this.refs.getMessage.value;

		const formObj = {
			newtitle,
			newmessage
		}
		console.log(formObj)
		console.log(this.props.postfordefaultVal.title);

		this.props.dispatch({
			type: 'UPDATE_POST',
			id: this.props.postfordefaultVal.id,
			formObj: formObj
		})
	}
	render(){
		return(
      <div key={this.props.postfordefaultVal.id}>
        Congratulations!! now u can call edit Component
      	<form onSubmit={this.handleEdit}>
      		<input type="text" ref="getTitle" defaultValue={this.props.postfordefaultVal.title} placeholder="Enter Post Title" className="full-width"/>
      		<textarea rows="5" ref="getMessage" defaultValue={this.props.postfordefaultVal.message} cols="28" placeholder="Enter Post" className="full-width"/>
       		<button>Update</button>
      	</form>
      </div>
		)
	}
}
export default connect()(EditComponent);
//by using this , we can use this.props.dispatch() funtion
// export default PostForm;