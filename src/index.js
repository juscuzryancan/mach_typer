import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Header} from './components';

const App = () => {

  return (
    <Router>
      <Header />
    </Router>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
