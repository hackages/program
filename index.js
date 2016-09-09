import React, { DOM, Component } from 'react';
import { render } from 'react-dom';

class Main extends Component {
  render (){
    return (
      DOM.h1(null, "hi hao, React")
    );
  }
}

const domElement = document.getElementById('program');

render(<Main/>, domElement);

