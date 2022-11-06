import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './component/router';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/pkmn-site">
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
