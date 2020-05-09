import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilm, faCoffee, faGraduationCap, faArrowAltCircleUp, faCode, faWrench, faHammer, faPhone, faLaptop } from '@fortawesome/free-solid-svg-icons';
library.add( faLinkedin, faFilm, faCoffee, faGraduationCap, faArrowAltCircleUp, faCode, faWrench, faHammer, faPhone, faLaptop);



function App() {

  const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <MainContainer>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/skills"><Skills/></Route>
            <Route path="/projects"><Projects/></Route>
            <Route path="/contact"><Contact/></Route>
          </MainContainer>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
