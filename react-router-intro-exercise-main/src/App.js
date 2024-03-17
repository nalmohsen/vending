import React from 'react';
import VendingMachine from './components/VendingMachine';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Chocolate from './components/Chocolate';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
