import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header.component';

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div>
        {/*Header is displayed on every page for user navigation*/}
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          {/*<Route path="/login" component={LoginPage}/>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;