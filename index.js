import "./assets/css/reset.css";
import './assets/css/style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './routes';

const dom = document.getElementById('education');

render(<App/>, dom);
