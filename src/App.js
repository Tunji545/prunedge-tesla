import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {
  ModelS,
  Model3,
  ModelX,
  ModelY,
  SolarRoof,
  SolarPanels,
} from './components/models';
import Shop from './components/Shop';
import Account from './components/Account';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/models' component={ModelS} />
          <Route path='/model3' component={Model3} />
          <Route path='/modelx' component={ModelX} />
          <Route path='/modely' component={ModelY} />
          <Route path='/solarRoof' component={SolarRoof} />
          <Route path='/solarPanels' component={SolarPanels} />
          <Route path='/shop' component={Shop} />
          <Route path='/account' component={Account} />
          <Route path='/menu' component={Menu} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
