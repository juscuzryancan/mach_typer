import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {
  Header,
  Login
} from './components';

const App = () => {

  return (
    <Router>
      <Header />
      <Route path='/'>
      </Route>
      <Route exact path='/leaderboards'>
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/register'>
      </Route>
    </Router>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
