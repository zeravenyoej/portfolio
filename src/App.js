import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]}><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/skills"><Skills/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
