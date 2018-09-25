import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component{
	render(){
		console.log(this.props);
		var posts = this.props.posts.map((post) => (
      <div key={post.id}>
      	{post.editing ? <EditComponent postfordefaultVal={post} key={post.id}/> : <Post postcarrier={post} key={post.id}/>}
      </div>
		));
		return(
      <div>
      	<h2>All Posts</h2>
        {
          posts
        }
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	posts: state
  }
}

export default connect(mapStateToProps)(AllPost);//by using this , we can use this.props.dispatch() funtion
// export default PostForm;