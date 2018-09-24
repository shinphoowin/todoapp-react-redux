import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component{

	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.refs.getTitle.value;
		const message = this.refs.getMessage.value;
		// const title1 = this.getTitle1.value;
  //   const message1 = this.getMessage1.value;

		// const formObj = {};
		// formObj.title = title;
		// formObj.getMessage = getMessage;
		// console.log(formObj);

		const formObj = {
			id: new Date(),
			title,
			message
			// title1,
			// message1
		}
		console.log(formObj)
		// console.log(this.props)

		this.props.dispatch({
			type: 'ADD_POST',
			formObj
		});
		this.refs.getTitle.value = '';
		this.refs.getMessage.value = '';
	}
	render(){
		// console.log(this.props);
		console.log(this.props.posts.length);
		var getpost = this.props.posts.map(post=> 
			<li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.message}</p>
        <button>Edit</button>
        <button onClick={()=>this.props.dispatch({type: 'DELETE_POST',id: post.id})}>Delete</button>
      </li>
		);
		console.log(this.props.posts.length);

		return(
      <div>
      	<h2>Create Post</h2>
      	<form onSubmit={this.handleSubmit}>
      		<input type="text" ref="getTitle" placeholder="Enter Post Title" className="full-width"/>
      		{
      			// <input required type="text" ref={(input)=>this.getTitle1 = input} placeholder="Enter Post Title"/>
      		}

      		<textarea rows="5" ref="getMessage" cols="28" placeholder="Enter Post" className="full-width"/>
      		{
      			// <textarea required rows="5" ref={(input)=>this.getMessage1 = input} cols="28" placeholder="Enter Post" />
      		}

      		<button>Submit</button>
      	</form>

      	<hr/>
      	<ul style={{padding:0}}>
      	  <h2>All Posts</h2>
      	 {getpost}
      	</ul>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	posts: state
  }
}

export default connect(mapStateToProps)(PostForm);//by using this , we can use this.props.dispatch() funtion
// export default PostForm;