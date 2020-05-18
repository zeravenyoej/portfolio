import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// import { useTransition, animated } from "react-spring";
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import NavBar from './components/NavBar';

function App() {
  // const location = useLocation();
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: "translate3d(100%, 0, 0" },
  //   enter: { opacity: 1, transform: "translate3d(0%, 0, 0" },
  //   leave: { opacity: 0, transform: "translate3d(-50%, 0, 0" },
  // });

  return (
    // transitions.map(({ item : location, props, key}) => (
    //   <animated.div key={key} style={props} className="App">
    //     <Switch location={location}>
    //       <Route exact path={["/", "/home"]}><Home/></Route>
    //       <Route path="/about"><About/></Route>
    //       <Route path="/skills"><Skills/></Route>
    //       <Route path="/projects"><Projects/></Route>
    //       <Route path="/contact"><Contact/></Route>
    //     </Switch>
    //   </animated.div>
    //))
    <div className="App">
        <Switch>
          <Route exact path={["/", "/home"]}><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/skills"><Skills/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/contact"><Contact/></Route>
          {/* <Route path={["/contact", "/about", "/skills", "projects"]}><NavBar/></Route> */}
        </Switch>
    </div>
  );
}

export default App;
