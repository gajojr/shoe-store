import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header.component';

import HomePage from './pages/HomePage/HomePage';
import KatalogPage from './pages/Katalog/Katalog';

function App() {
  return (
    <Router>
      <div>
        {/*Header is displayed on every page for user navigation*/}
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/katalog" component={KatalogPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
