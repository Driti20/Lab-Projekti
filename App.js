import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Kryefaqja from './components/pages/Kryefaqja';
import Produktet from './components/pages/Produktet';
import Sherbimet from './components/pages/Sherbimet';
import Regjistrohu from './components/pages/Regjistrohu';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Kryefaqja} />
        <Route path='/sherbimet'  component={Sherbimet} />
        <Route path='/produktet'  component={Produktet} />
        <Route path='/regjistrohu' component={Regjistrohu} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
 