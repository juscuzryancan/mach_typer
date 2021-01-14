import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {
  Header,
  Login,
  Register,
  Textbox,
  Caret
} from './components';

const App = () => {

  return (
    <Router>
      <Header />
      <Route path='/'>
        <Textbox />
        <Caret /> 
      </Route>
      <Route exact path='/leaderboards'>
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
    </Router>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
