import React, { Component } from 'react';
import PostForm from './PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title" style={{color:'#aaa'}}>codebrush react-redux crud test</h4>
        </header>
        <PostForm/>
      </div>
    );
  }
}
export default App;