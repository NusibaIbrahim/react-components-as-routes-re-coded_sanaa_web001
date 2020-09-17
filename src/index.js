import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
// Step 1. Import react-router functions
/* Add NavLink to importer */
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
