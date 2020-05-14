import React from 'react';
import NavCard from './NavCard';

const NavBar = () => {
  const data = ['home', 'about', 'projects', 'skills', 'contact']
  return (
    <nav>
      {data.map((name)=>(
        <NavCard name={name}/>
      ))}
    </nav>
  );
};

export default NavBar;