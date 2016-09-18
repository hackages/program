import React, { Component } from 'react';
import Header from '../components/header';

class Courses extends Component{
  constructor() {
    super();
  }

  render() {
   return (
    <div>
     <Header title={ this.props.title }/>
     <h1>My Course</h1>
      { this.props.children }
    </div>
   );
  }
}

export default Courses;

