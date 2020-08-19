import React from 'react';
import NavCard from './NavCard';
import cuid from "cuid";

const NavBar = () => {
    const data = ['home', 'projects', 'skills', 'about']
    return (
        <nav>
            {data.map((name)=>(
                <NavCard key={cuid()} name={name}/>
            ))}
        </nav>
  );
};

export default NavBar;