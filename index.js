import "./assets/css/reset.css";
import './assets/css/style.css';
import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Main from './components/main';

const App = () => {
  return <Main />;
};

const dom = document.getElementById('education');

render(<App/>, dom);
