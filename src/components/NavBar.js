import React from 'react';
import NavCard from './NavCard';
import cuid from "cuid";

const NavBar = () => {
  const data = ['home', 'about', 'projects', 'skills', 'contact']
  return (
    <nav>
      {data.map((name)=>(
        <NavCard key={cuid()} name={name}/>
      ))}
    </nav>
  );
};

export default NavBar;