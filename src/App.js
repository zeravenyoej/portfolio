import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Sass/App.scss';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/home"]}><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/skills"><Skills/></Route>
        <Route path="/projects"><Projects/></Route>
      </Switch>
    </div>
  );
}

export default App;
