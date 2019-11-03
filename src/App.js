import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Route path='/' render={(props)=><NavBar {...props}/>}/>
      </MainContainer>
    </div>
  );
}

export default App;
