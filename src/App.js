import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import Blog from './components/Blog';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Route path='/' render={(props)=><NavBar {...props}/>}/>
        <Route path='/about' render={(props)=><About {...props}/>}/>
        <Route path='/skills' render={(props)=><Skills {...props}/>}/>
        <Route path='/projects' render={(props)=><Projects {...props}/>}/>
        <Route path='/teaching' render={(props)=><Teaching {...props}/>}/>
        <Route path='/blog' render={(props)=><Blog {...props}/>}/>
        <Route path='/contact' render={(props)=><Contact {...props}/>}/>
      </MainContainer>
    </div>
  );
}

export default App;
