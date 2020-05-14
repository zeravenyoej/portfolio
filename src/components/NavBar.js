import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  return (
    <nav>
      <p onClick={()=>history.push('/')}>home</p>
      <p onClick={()=>history.push('/about')}>about</p>
      <p onClick={()=>history.push('/projects')}>projects</p>
      <p onClick={()=>history.push('/skills')}>skills</p>
      <p onClick={()=>history.push('/contact')}>contact</p>
    </nav>
  );
};

export default NavBar;