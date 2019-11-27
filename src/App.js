import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFilm, faCoffee, faGraduationCap, faArrowAltCircleUp, faCode, faWrench, faHammer, faPhone, faLaptop } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faFilm, faCoffee, faGraduationCap, faArrowAltCircleUp, faCode, faWrench, faHammer, faPhone, faLaptop);



function App() {

  const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

  return (
    <div className="App">
      <MainContainer>
        <Route exact path='/' render={(props)=><Home {...props}/>}/>
        <Route path='/about' render={(props)=><About {...props}/>}/>
        <Route path='/skills' render={(props)=><Skills {...props}/>}/>
        <Route path='/projects' render={(props)=><Projects {...props}/>}/>
        <Route path='/contact' render={(props)=><Contact {...props}/>}/>
      </MainContainer>
    </div>
  );
}

export default App;
