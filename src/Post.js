import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component{
	render(){
		console.log(this.props);
		return(
      <div>
        <h2 className="post_title">{this.props.postcarrier.title}</h2>
        <p className="post_message">{this.props.postcarrier.message}</p>   
        <button className="edit"
        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.postcarrier.id })
        }
        >Edit</button>
        <button className="delete"
        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.postcarrier.id })}
        >Delete</button>    	
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	posts: state
  }
}

export default connect(mapStateToProps)(Post);//by using this , we can use this.props.dispatch() funtion
// export default PostForm;