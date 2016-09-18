import React, { Component } from 'react';

class Courses extends Component{
  constructor(props) {
    super();
  }

  render() {
   return (
    <div>
     <Header title={ props.title }/>
     <h1>My Course</h1>
      { props.children }
    </div>
   );
  }
}

export default Courses;

